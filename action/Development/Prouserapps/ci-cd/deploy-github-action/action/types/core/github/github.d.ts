import { IGithub } from "./github.interface";
import { IActionInput } from "../actions/action-input.interface";
import { IGithubApi } from "./github-api.interface";
import { IGithubContext } from "./github-context.interface";
import { IActionExec } from "../actions/action-exec.interface";
export declare class Github implements IGithub {
    input: IActionInput;
    context: IGithubContext;
    api: IGithubApi;
    exec: IActionExec;
    constructor();
}
