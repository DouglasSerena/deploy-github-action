import { IGithub } from './core/github/github.interface';
export declare class Action {
    private _github;
    constructor(_github: IGithub);
    exec(): Promise<void>;
    private _createNewTag;
    private _generatorBundle;
    private _createApk;
    private _publishFirebase;
}
