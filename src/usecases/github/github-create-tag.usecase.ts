import { IGithubMetadataTagModel } from "../../domain/models/github/github-metadata-tag.model";
import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { IVersion } from "../../domain/interfaces/version.interface";
import { IGithubTagRepository } from "../../repositories/github/github-tag-repository.interface";
import { IGithubCreateTagUseCase } from "./github-create-tag-usecase.interface";
import { IGithubCreateTagResponse } from "../../domain/response/github/github-create-tag.response";
import { ActionLogger } from "../../core/actions/action-logger";

export class GithubCreateTagUseCase implements IGithubCreateTagUseCase {
    constructor(private _repository: IGithubTagRepository) {}

    public async create(
        tag: IGithubMetadataTagModel
    ): Promise<IGithubCreateTagResponse> {
        const newTag = await this._repository.createTag(tag);
        ActionLogger.log(`[GIT] Create new tag: "${newTag.tag}"`);

        return newTag;
    }

    public async createAlpha(
        tag: IGithubMetadataTagModel
    ): Promise<IGithubCreateTagResponse> {
        this._incrementPatch(tag.version);
        this._incrementNumber(tag);
        tag.name = GITHUB_VERSION_NAME.ALPHA;

        return await this.create(tag);
    }

    public async createRelease(
        tag: IGithubMetadataTagModel
    ): Promise<IGithubCreateTagResponse> {
        this._incrementMinor(tag.version);
        this._incrementNumber(tag);
        tag.name = GITHUB_VERSION_NAME.RELEASE;

        return await this.create(tag);
    }

    private _incrementNumber(
        tag: IGithubMetadataTagModel
    ): IGithubMetadataTagModel {
        return Object.assign(tag, { number: tag.number + 1 });
    }
    private _incrementMajor(version: IVersion): IVersion {
        return Object.assign(version, {
            patch: 0,
            minor: 0,
            major: version.major + 1,
        });
    }
    private _incrementMinor(version: IVersion): IVersion {
        return Object.assign(version, { patch: 0, minor: version.minor + 1 });
    }
    private _incrementPatch(version: IVersion): IVersion {
        return Object.assign(version, { patch: version.patch + 1 });
    }
}
