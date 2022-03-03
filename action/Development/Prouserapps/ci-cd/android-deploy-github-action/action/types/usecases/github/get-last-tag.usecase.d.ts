import { ITagModel } from '../../domain/github/tag.model';
import { IGithubRepository } from '../../repositories/github/github-repository.interface';
import { IGithubGetLastTag } from './get-last-tag-usecase.interface';
export declare class GithubGetLastTag implements IGithubGetLastTag {
    private _repository;
    constructor(_repository: IGithubRepository);
    tag(owner: string, repo: string): Promise<ITagModel>;
}
