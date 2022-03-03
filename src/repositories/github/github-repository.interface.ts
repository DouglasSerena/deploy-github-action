import { ITagModel } from '../../domain/github/tag.model';

export interface IGithubRepository {
  getTags(owner: string, repo: string): Promise<ITagModel[]>;
}
