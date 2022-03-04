import * as github from "@actions/github";
import { GithubApiType } from "../../domain/types/github/github-api.type";
import { IActionInput } from "../actions/action-input.interface";
import { IGithubApi } from "./github-api.interface";

export class GithubApi implements IGithubApi {
    public api: GithubApiType;
    public request: GithubApiType["request"];

    constructor(_input: IActionInput) {
        this.api = github.getOctokit(_input.token);
        this.request = this.api.request;
    }
}
