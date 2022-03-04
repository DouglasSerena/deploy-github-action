import { IGithubApi } from "./github-api.interface";
import { IGithubContext } from "./github-context.interface";
import { IActionInput } from "../actions/action-input.interface";
import { IActionExec } from "../actions/action-exec.interface";
import { IActionIo } from "../actions/action-io.interface";
import { IActionGlob } from "../actions/action-glob.interface";

export interface IGithub {
    context: IGithubContext;
    input: IActionInput;
    api: IGithubApi;
    exec: IActionExec;
    glob: IActionGlob;
    io: IActionIo;
}
