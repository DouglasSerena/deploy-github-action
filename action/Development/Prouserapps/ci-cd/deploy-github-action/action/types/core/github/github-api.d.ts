import { GithubApiType } from "../../domain/types/github/github-api.type";
import { IActionInput } from "../actions/action-input.interface";
import { IGithubApi } from "./github-api.interface";
export declare class GithubApi implements IGithubApi {
    api: GithubApiType;
    request: GithubApiType["request"];
    constructor(_input: IActionInput);
}
