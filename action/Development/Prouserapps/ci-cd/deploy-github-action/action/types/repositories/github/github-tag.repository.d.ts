import { IGithubMetadataTagModel } from '../../domain/models/github/github-metadata-tag.model';
import { IGithubTagModel } from '../../domain/models/github/github-tag.model';
import { IGithub } from '../../core/github/github.interface';
import { IGithubCreateTagResponse } from '../../domain/response/github/github-create-tag.response';
import { IGithubTagRepository } from './github-tag-repository.interface';
export declare class GithubTagRepository implements IGithubTagRepository {
    private _github;
    constructor(_github: IGithub);
    getTags(): Promise<IGithubTagModel[]>;
    createTag(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
    registerTag(tag: IGithubCreateTagResponse): Promise<any>;
    private _prepareTags;
}
