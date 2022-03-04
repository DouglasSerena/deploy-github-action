import { ActionLogger } from './core/actions/action-logger';
import { IGithub } from './core/github/github.interface';
import { GITHUB_VERSION_NAME } from './domain/enums/github/github-version-name.enum';
import { IGithubTagRepository } from './repositories/github/github-tag-repository.interface';
import { GithubTagRepository } from './repositories/github/github-tag.repository';
import { GithubCreateTagUseCase } from './usecases/github/github-create-tag.usecasecopy';
import { GithubGetLastTagUseCase } from './usecases/github/github-get-last-tag.usecase';
import { GithubRegisterTagUseCase } from './usecases/github/github-register-tag.usecase';

export class Action {
  constructor(private _github: IGithub) {}

  public async exec() {
    const githubRepository = new GithubTagRepository(this._github);

    await this._createNewTag(githubRepository);
    await this._generatorBundle();
    await this._createApk();
    await this._publishFirebase();
  }

  private async _createNewTag(githubRepository: IGithubTagRepository) {
    const githubGetLastTagUseCase = new GithubGetLastTagUseCase(
      githubRepository
    );
    const githubCreateTagUseCase = new GithubCreateTagUseCase(githubRepository);
    const githubRegisterTagUseCase = new GithubRegisterTagUseCase(
      githubRepository
    );

    const tag = await githubGetLastTagUseCase.tag();
    const metadata = tag?.metadata ?? {
      name: GITHUB_VERSION_NAME.ALPHA,
      number: 1,
      version: { major: 1, minor: 0, patch: 0 },
    };

    const newTag = await githubCreateTagUseCase.createAlpha(metadata);
    ActionLogger.log(`[INFO] Create new tag: ${newTag.tag}`);
    ActionLogger.log(
      JSON.stringify(await githubRegisterTagUseCase.register(newTag))
    );
    ActionLogger.log(`[INFO] Create ref tag: ${newTag.tag}`);
  }

  private async _generatorBundle() {}

  private async _createApk() {}

  private async _publishFirebase() {}
}
