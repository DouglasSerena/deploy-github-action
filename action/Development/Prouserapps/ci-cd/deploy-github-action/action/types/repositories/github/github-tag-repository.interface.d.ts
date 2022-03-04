import { IGithubMetadataTagModel } from "../../domain/models/github/github-metadata-tag.model";
import { IGithubTagModel } from "../../domain/models/github/github-tag.model";
import { IGithubCreateRefResponse } from "../../domain/response/github/github-create-ref.response";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";
export interface IGithubTagRepository {
    getTags(): Promise<IGithubTagModel[]>;
    createTag(tag: IGithubMetadataTagModel): Promise<IGithubCreateTagResponse>;
    registerTag(tag: IGithubCreateTagResponse): Promise<IGithubCreateRefResponse>;
}
