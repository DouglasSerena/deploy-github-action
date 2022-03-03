import { ApiType } from '../../domain/github/api.type';
import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
import { ITagModel } from '../../domain/github/tag.model';
import { VERSION_NAME } from '../../domain/version-name.enum';

export class GithubRepository {
  constructor(private _api: ApiType) {}

  public async getTags(owner: string, repo: string): Promise<ITagModel[]> {
    return await this._api
      .request('GET /repos/{owner}/{repo}/tags', { owner, repo })
      .then(({ data }) => this._prepareTags(data));
  }

  public async createTag(
    owner: string,
    repo: string,
    tag: IMetadataTagModel
  ): Promise<void> {
    const { major, minor, patch } = tag.version;
    const version = `${tag.name}-${major}.${minor}.${patch}_${tag.number}`;

    await this._api
      .request('POST /repos/{owner}/{repo}/git/tags', {
        repo: repo,
        owner: owner,
        tag: version,
        message: `New tag ${version}`,
        object: 'object',
        type: 'commit',
      })
      .then(({ data }) => data);
  }

  private _prepareTags(tags: Omit<ITagModel, 'metadata'>[]): ITagModel[] {
    return tags.reduce((tags, tag) => {
      const match = /(\w+)-([\d\.]+)_(\d+)/g.exec(tag.name)!;

      if (!match) {
        return tags;
      }
      const [_, name, version, number] = match;
      const [major, minor, patch] = version.split('.');

      tags.push({
        ...tag,
        metadata: {
          name: name as VERSION_NAME,
          version: {
            major: Number(major),
            minor: Number(minor),
            patch: Number(patch),
          },
          number: Number(number),
        },
      });

      return tags;
    }, [] as ITagModel[]);
  }
}
