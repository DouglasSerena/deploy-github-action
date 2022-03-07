import { IActionInput } from "./action-input.interface";
import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { PLATFORM } from "../../domain/enums/platform.enum";
export declare class ActionInput implements IActionInput {
    keystorePath: string;
    keystoreBase64: string;
    keystoreFilename: string;
    token: string;
    platform: PLATFORM;
    versionName: GITHUB_VERSION_NAME;
    constructor();
}
