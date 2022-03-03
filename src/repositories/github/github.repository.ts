import {} from '@actions/github';
import { ApiType } from '../../domain/github/api.type';
import { ITagModel } from '../../domain/github/tag.model';

export class GithubRepository {
  constructor(private _api: ApiType) {}

  public async getTags(owner: string, repo: string): Promise<ITagModel[]> {
    return await this._api
      .request('GET /repos/{owner}/{repo}/tags', { owner, repo })
      .then(({ data }) => data);
  }
}
