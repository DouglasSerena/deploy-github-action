import { IGithubCreateRefResponse } from "../../domain/response/github/github-create-ref.response";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";
import { IGithubTagRepository } from "../../repositories/github/github-tag-repository.interface";
import { IGithubRegisterTagUseCase } from "./github-register-tag-usecase.interface";
export declare class GithubRegisterTagUseCase implements IGithubRegisterTagUseCase {
    private _repository;
    constructor(_repository: IGithubTagRepository);
    register(newTag: IGithubCreateTagResponse): Promise<IGithubCreateRefResponse>;
}
