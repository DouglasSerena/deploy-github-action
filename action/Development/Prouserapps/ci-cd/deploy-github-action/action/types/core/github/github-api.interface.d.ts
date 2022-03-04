import { GithubApiType } from '../../domain/types/github/github-api.type';
export interface IGithubApi {
    api: GithubApiType;
    request: GithubApiType['request'];
}
