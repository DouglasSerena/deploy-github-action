import { IGithub } from './github.interface';
import { IActionInput } from '../actions/action-input.interface';
import { ActionInput } from '../actions/action-input';
import { GithubApi } from './github-api';
import { GithubContext } from './github-context';
import { IGithubApi } from './github-api.interface';
import { IGithubContext } from './github-context.interface';
import { IActionExec } from '../actions/action-exec.interface';
import { ActionExec } from '../actions/action-exec';

export class Github implements IGithub {
  public input: IActionInput;
  public context: IGithubContext;
  public api: IGithubApi;
  public exec: IActionExec;

  constructor() {
    this.input = new ActionInput();
    this.context = new GithubContext();
    this.api = new GithubApi(this.input);
    this.exec = new ActionExec();
  }
}
