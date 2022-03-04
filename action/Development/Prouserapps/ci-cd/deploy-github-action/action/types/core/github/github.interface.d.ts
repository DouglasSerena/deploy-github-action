import { IGithubApi } from './github-api.interface';
import { IGithubContext } from './github-context.interface';
import { IActionInput } from '../actions/action-input.interface';
import { IActionExec } from '../actions/action-exec.interface';
export interface IGithub {
    context: IGithubContext;
    input: IActionInput;
    api: IGithubApi;
    exec: IActionExec;
}
