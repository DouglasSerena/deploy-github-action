import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
import { ITagModel } from '../../domain/github/tag.model';
export interface IGithubRepository {
    getTags(owner: string, repo: string): Promise<ITagModel[]>;
    createTag(owner: string, repo: string, tag: IMetadataTagModel): Promise<void>;
}
