import { GITHUB_VERSION_NAME } from '../../enums/github/github-version-name.enum';
import { IVersion } from '../../interfaces/version.interface';

export interface IGithubMetadataTagModel {
  name: GITHUB_VERSION_NAME;
  version: IVersion;
  number: number;
}
