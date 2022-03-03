import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
import { IGithubRepository } from '../../repositories/github/github-repository.interface';
import { IGithubCreateTag } from './create-tag-usecase.interface';
export declare class GithubCreateTag implements IGithubCreateTag {
    private _repository;
    constructor(_repository: IGithubRepository);
    create(owner: string, repo: string, tag: IMetadataTagModel): Promise<void>;
    createAlpha(owner: string, repo: string, tag: IMetadataTagModel): Promise<void>;
    createRelease(owner: string, repo: string, tag: IMetadataTagModel): Promise<void>;
    private _incrementNumber;
    private _incrementMajor;
    private _incrementMinor;
    private _incrementPatch;
}
