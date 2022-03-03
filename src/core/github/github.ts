import * as core from '@actions/core';
import * as github from '@actions/github';

import { IGithub } from './github.interface';
import { Context } from '@actions/github/lib/context';
import { GithubApiType } from '../../domain/types/github/github-api.type';
import { GITHUB_INPUT } from '../../domain/enums/github/github-input.enum';

export class Github implements IGithub {
  public context: Context;
  public api: GithubApiType;
  public token: string;
  public owner: string;
  public repo: string;
  public core: typeof core = core;

  constructor() {
    this.token = core.getInput(GITHUB_INPUT.TOKEN);
    this.context = github.context;

    this.owner = this.context.repo.owner;
    this.repo = this.context.repo.repo;

    this.api = github.getOctokit(this.token);
  }
}
