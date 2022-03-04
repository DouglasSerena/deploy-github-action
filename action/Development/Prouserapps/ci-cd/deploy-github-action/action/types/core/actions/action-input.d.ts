import { IActionInput } from './action-input.interface';
import { GITHUB_VERSION_NAME } from '../../domain/enums/github/github-version-name.enum';
export declare class ActionInput implements IActionInput {
    token: string;
    versionName: GITHUB_VERSION_NAME;
    constructor();
}
