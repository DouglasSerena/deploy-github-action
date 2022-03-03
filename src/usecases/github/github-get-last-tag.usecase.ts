import { IGithubTagModel } from '../../domain/models/github/github-tag.model';
import { IGithubTagRepository } from '../../repositories/github/github-tag-repository.interface';
import { IGithubGetLastTagUseCase } from './github-get-last-tag-usecase.interface';

export class GithubGetLastTagUseCase implements IGithubGetLastTagUseCase {
  constructor(private _repository: IGithubTagRepository) {}

  public async tag(): Promise<IGithubTagModel | null> {
    const tags = await this._repository.getTags();

    return tags.reduce((last, tag) => {
      if (tag.metadata) {
        if (!last) {
          return tag;
        }

        if (tag.metadata.number > last.metadata!.number) {
          return tag;
        }
      }
      return last;
    }, null as IGithubTagModel | null);
  }
}
