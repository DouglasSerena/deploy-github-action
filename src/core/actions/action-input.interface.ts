import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { PLATFORM } from "../../domain/enums/platform.enum";

export interface IActionInput {
    keystoreBase64: string;
    keystorePath: string;
    keystoreFilename: string;

    token: string;
    platform: PLATFORM;
    versionName: GITHUB_VERSION_NAME;
}
