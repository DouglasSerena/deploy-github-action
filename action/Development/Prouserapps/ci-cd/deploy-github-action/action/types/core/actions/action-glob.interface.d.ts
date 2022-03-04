import * as glob from "@actions/glob";
export interface IActionGlob {
    directories(patterns: string, options?: glob.GlobOptions | undefined): Promise<string[]>;
    paths(patterns: string, options?: glob.GlobOptions | undefined): Promise<string[]>;
    globber(path: string): Promise<glob.Globber>;
}
