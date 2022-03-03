import { ITagModel } from '../../domain/github/tag.model';
import { IGithubRepository } from '../../repositories/github/github-repository.interface';
import { IGithubGetLastTag } from './get-last-tag-usecase.interface';

export class GithubGetLastTag implements IGithubGetLastTag {
  constructor(private _repository: IGithubRepository) {}

  public async tag(owner: string, repo: string): Promise<ITagModel> {
    const tags = await this._repository.getTags(owner, repo);

    return tags[0];
  }
}
