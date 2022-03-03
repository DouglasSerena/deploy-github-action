import { IGithubTagModel } from '../../domain/models/github/github-tag.model';

export interface IGithubGetLastTagUseCase {
  tag(): Promise<IGithubTagModel | null>;
}
