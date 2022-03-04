import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";

export interface IActionInput {
  token: string;
  versionName: GITHUB_VERSION_NAME;
}
