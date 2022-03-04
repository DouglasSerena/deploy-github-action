import { IGithub } from "./github.interface";
import { IActionInput } from "../actions/action-input.interface";
import { IGithubApi } from "./github-api.interface";
import { IGithubContext } from "./github-context.interface";
import { IActionExec } from "../actions/action-exec.interface";
import { IActionIo } from "../actions/action-io.interface";
import { IActionGlob } from "../actions/action-glob.interface";
export declare class Github implements IGithub {
    input: IActionInput;
    context: IGithubContext;
    api: IGithubApi;
    exec: IActionExec;
    glob: IActionGlob;
    io: IActionIo;
    constructor();
}
