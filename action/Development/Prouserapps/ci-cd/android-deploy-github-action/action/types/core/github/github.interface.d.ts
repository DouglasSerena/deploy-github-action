import * as core from '@actions/core';
import { GithubApiType } from '../../domain/types/github/github-api.type';
import { Context } from '@actions/github/lib/context';
export interface IGithub {
    context: Context;
    api: GithubApiType;
    token: string;
    owner: string;
    repo: string;
    core: typeof core;
}
