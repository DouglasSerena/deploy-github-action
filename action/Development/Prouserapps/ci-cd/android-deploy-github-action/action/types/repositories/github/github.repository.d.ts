import { ApiType } from '../../domain/github/api.type';
import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
import { ITagModel } from '../../domain/github/tag.model';
export declare class GithubRepository {
    private _api;
    constructor(_api: ApiType);
    getTags(owner: string, repo: string): Promise<ITagModel[]>;
    createTag(owner: string, repo: string, sha: string, tag: IMetadataTagModel): Promise<unknown>;
    private _prepareTags;
}
