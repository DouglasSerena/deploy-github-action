import { IGithub } from './core/github/github.interface';
export declare class Action {
    private _github;
    constructor(_github: IGithub);
    exec(): Promise<void>;
}
