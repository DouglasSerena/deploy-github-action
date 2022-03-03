import * as core from '@actions/core';
import { IGithub } from './github.interface';
import { Context } from '@actions/github/lib/context';
import { GithubApiType } from '../../domain/types/github/github-api.type';
export declare class Github implements IGithub {
    context: Context;
    api: GithubApiType;
    token: string;
    owner: string;
    repo: string;
    core: typeof core;
    constructor();
}
