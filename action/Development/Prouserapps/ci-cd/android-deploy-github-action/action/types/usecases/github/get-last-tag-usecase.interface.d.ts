import { ITagModel } from '../../domain/github/tag.model';
export interface IGithubGetLastTag {
    tag(owner: string, repo: string): Promise<ITagModel>;
}
