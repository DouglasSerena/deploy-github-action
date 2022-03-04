import * as github from '@actions/github';
import { Context } from '@actions/github/lib/context';
import { IGithubContext } from './github-context.interface';

export class GithubContext implements IGithubContext {
  public context: Context;
  public owner: string;
  public repo: string;
  public sha: string;

  constructor() {
    this.context = github.context;
    this.owner = this.context.repo.owner;
    this.repo = this.context.repo.repo;
    this.sha = this.context.sha;
  }
}
