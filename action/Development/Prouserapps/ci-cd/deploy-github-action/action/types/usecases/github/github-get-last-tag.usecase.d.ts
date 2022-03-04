import { IGithubTagModel } from "../../domain/models/github/github-tag.model";
import { IGithubTagRepository } from "../../repositories/github/github-tag-repository.interface";
import { IGithubGetLastTagUseCase } from "./github-get-last-tag-usecase.interface";
export declare class GithubGetLastTagUseCase implements IGithubGetLastTagUseCase {
    private _repository;
    constructor(_repository: IGithubTagRepository);
    tag(): Promise<IGithubTagModel | null>;
}
