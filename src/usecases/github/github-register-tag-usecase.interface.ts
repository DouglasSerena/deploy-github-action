import { IGithubCreateRefResponse } from "../../domain/response/github/github-create-ref.response";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";

export interface IGithubRegisterTagUseCase {
    register(tag: IGithubCreateTagResponse): Promise<IGithubCreateRefResponse>;
}
