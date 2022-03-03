import { IGithubMetadataTagModel } from '../../domain/models/github/github-metadata-tag.model';
import { IGithubCreateTagResponse } from '../../domain/response/github/github-create-tag.response';

export interface IGithubCreateTagUseCase {
  create(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
  createAlpha(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
  createRelease(
    tag: IGithubMetadataTagModel
  ): Promise<IGithubCreateTagResponse>;
}
