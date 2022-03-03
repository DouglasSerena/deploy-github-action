import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
import { VERSION_NAME } from '../../domain/version-name.enum';
import { IVersionModel } from '../../domain/version.model';
import { IGithubRepository } from '../../repositories/github/github-repository.interface';
import { IGithubCreateTag } from './create-tag-usecase.interface';

export class GithubCreateTag implements IGithubCreateTag {
  constructor(private _repository: IGithubRepository) {}

  public async create(
    owner: string,
    repo: string,
    tag: IMetadataTagModel
  ): Promise<void> {
    await this._repository.createTag(owner, repo, tag);
  }

  public async createAlpha(
    owner: string,
    repo: string,
    tag: IMetadataTagModel
  ): Promise<void> {
    this._incrementPatch(tag.version);
    this._incrementNumber(tag);
    tag.name = VERSION_NAME.ALPHA;

    await this.create(owner, repo, tag);
  }

  public async createRelease(
    owner: string,
    repo: string,
    tag: IMetadataTagModel
  ): Promise<void> {
    this._incrementMinor(tag.version);
    this._incrementNumber(tag);
    tag.name = VERSION_NAME.RELEASE;

    await this.create(owner, repo, tag);
  }

  private _incrementNumber(tag: IMetadataTagModel): IMetadataTagModel {
    return Object.assign(tag, { number: tag.number + 1 });
  }
  private _incrementMajor(version: IVersionModel): IVersionModel {
    return Object.assign(version, {
      patch: 0,
      minor: 0,
      major: version.major + 1,
    });
  }
  private _incrementMinor(version: IVersionModel): IVersionModel {
    return Object.assign(version, { patch: 0, minor: version.minor + 1 });
  }
  private _incrementPatch(version: IVersionModel): IVersionModel {
    return Object.assign(version, { patch: version.patch + 1 });
  }
}