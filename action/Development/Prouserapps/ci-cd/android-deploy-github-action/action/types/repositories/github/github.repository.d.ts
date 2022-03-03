import { ApiType } from '../../domain/github/api.type';
import { ITagModel } from '../../domain/github/tag.model';
export declare class GithubRepository {
    private _api;
    constructor(_api: ApiType);
    getTags(owner: string, repo: string): Promise<ITagModel[]>;
}
