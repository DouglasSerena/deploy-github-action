import { Context } from '@actions/github/lib/context';
import { IGithubContext } from './github-context.interface';
export declare class GithubContext implements IGithubContext {
    context: Context;
    owner: string;
    repo: string;
    sha: string;
    constructor();
}
