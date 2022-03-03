import { IGithubMetadataTagModel } from '../../domain/models/github/github-metadata-tag.model';
import { IGithubTagRepository } from '../../repositories/github/github-tag-repository.interface';
import { IGithubCreateTagUseCase } from './github-create-tag-usecase.interface';
import { IGithubCreateTagResponse } from '../../domain/response/github/github-create-tag.response';
export declare class GithubCreateTagUseCase implements IGithubCreateTagUseCase {
    private _repository;
    constructor(_repository: IGithubTagRepository);
    create(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
    createAlpha(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
    createRelease(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
    private _incrementNumber;
    private _incrementMajor;
    private _incrementMinor;
    private _incrementPatch;
}
