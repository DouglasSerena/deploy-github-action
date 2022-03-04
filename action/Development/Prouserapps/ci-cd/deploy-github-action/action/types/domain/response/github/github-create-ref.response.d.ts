import { IGithubObjectModel } from '../../models/github/github-object.model';
export interface IGithubCreateRefResponse {
    ref: string;
    node_id: string;
    url: string;
    object: IGithubObjectModel;
}
