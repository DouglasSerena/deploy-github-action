import { IGithubCreateRefResponse } from "../../domain/response/github/github-create-ref.response";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";
import { IGithubTagRepository } from "../../repositories/github/github-tag-repository.interface";
import { IGithubRegisterTagUseCase } from "./github-register-tag-usecase.interface";

export class GithubRegisterTagUseCase implements IGithubRegisterTagUseCase {
    constructor(private _repository: IGithubTagRepository) {}

    public async register(
        newTag: IGithubCreateTagResponse
    ): Promise<IGithubCreateRefResponse> {
        return this._repository.registerTag(newTag);
    }
}
