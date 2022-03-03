import { IMetadataTagModel } from '../../domain/github/metadata-tag.model';
export interface IGithubCreateTag {
    create(owner: string, repo: string, sha: string, tag: IMetadataTagModel): Promise<unknown>;
    createAlpha(owner: string, repo: string, sha: string, tag: IMetadataTagModel): Promise<unknown>;
    createRelease(owner: string, repo: string, sha: string, tag: IMetadataTagModel): Promise<unknown>;
}
