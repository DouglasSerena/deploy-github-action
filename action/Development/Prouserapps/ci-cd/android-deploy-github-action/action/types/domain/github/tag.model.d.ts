import { ICommitModel } from './commit.model';
import { IMetadataTagModel } from './metadata-tag.model';
export interface ITagModel {
    name: string;
    commit: ICommitModel;
    zipball_url: string;
    tarball_url: string;
    node_id: string;
    metadata?: IMetadataTagModel;
}
