import { IGithubCommitModel } from "./github-commit.model";
import { IGithubMetadataTagModel } from "./github-metadata-tag.model";
export interface IGithubTagModel {
    name: string;
    commit: IGithubCommitModel;
    zipball_url: string;
    tarball_url: string;
    node_id: string;
    metadata?: IGithubMetadataTagModel;
}
