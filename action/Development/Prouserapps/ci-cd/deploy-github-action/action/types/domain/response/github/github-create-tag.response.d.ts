import { IGithubObjectModel } from "../../models/github/github-object.model";
import { IGithubTaggerModel } from "../../models/github/github-tagger.model";
import { IGithubVerificationModel } from "../../models/github/github-verification.model";
export interface IGithubCreateTagResponse {
    node_id: string;
    tag: string;
    sha: string;
    url: string;
    message: string;
    tagger: IGithubTaggerModel;
    object: IGithubObjectModel;
    verification?: IGithubVerificationModel;
}
