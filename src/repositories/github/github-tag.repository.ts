import { IGithubMetadataTagModel } from "../../domain/models/github/github-metadata-tag.model";
import { IGithubTagModel } from "../../domain/models/github/github-tag.model";
import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { IGithub } from "../../core/github/github.interface";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";
import { IGithubTagRepository } from "./github-tag-repository.interface";

export class GithubTagRepository implements IGithubTagRepository {
    constructor(private _github: IGithub) {}

    public async getTags(): Promise<IGithubTagModel[]> {
        return await this._github.api
            .request("GET /repos/{owner}/{repo}/tags", {
                owner: this._github.context.owner,
                repo: this._github.context.repo,
            })
            .then(({ data }) => this._prepareTags(data));
    }

    public async createTag(
        tag: IGithubMetadataTagModel
    ): Promise<IGithubCreateTagResponse> {
        const { major, minor, patch } = tag.version;
        const version = `${tag.name}-${major}.${minor}.${patch}_${tag.number}`;

        return await this._github.api
            .request("POST /repos/{owner}/{repo}/git/tags", {
                owner: this._github.context.owner,
                repo: this._github.context.repo,
                tag: version,
                message: `New tag ${version}`,
                object: this._github.context.sha,
                type: "commit",
            })
            .then(({ data }) => data);
    }

    public async registerTag(tag: IGithubCreateTagResponse): Promise<any> {
        return await this._github.api
            .request("POST /repos/{owner}/{repo}/git/refs", {
                owner: this._github.context.owner,
                repo: this._github.context.repo,
                ref: `refs/tags/${tag.tag}`,
                sha: tag.sha,
            })
            .then(({ data }) => data);
    }

    private _prepareTags(
        tags: Omit<IGithubTagModel, "metadata">[]
    ): IGithubTagModel[] {
        return tags.reduce((tags, tag) => {
            const match = /(\w+)-([\d\.]+)_(\d+)/gi.exec(tag.name)!;

            if (!match) {
                return tags;
            }
            const [_, name, version, number] = match;
            const [major, minor, patch] = version.split(".");

            tags.push({
                ...tag,
                metadata: {
                    name: name as GITHUB_VERSION_NAME,
                    version: {
                        major: Number(major),
                        minor: Number(minor),
                        patch: Number(patch),
                    },
                    number: Number(number),
                },
            });

            return tags;
        }, [] as IGithubTagModel[]);
    }
}
