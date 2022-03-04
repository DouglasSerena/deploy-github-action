import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { PLATFORM } from "../../domain/enums/platform.enum";
export interface IActionInput {
    token: string;
    platform: PLATFORM;
    versionName: GITHUB_VERSION_NAME;
}
