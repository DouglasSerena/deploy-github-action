import { Context } from '@actions/github/lib/context';
export interface IGithubContext {
    context: Context;
    owner: string;
    repo: string;
    sha: string;
}
