import * as glob from "@actions/glob";
import { IActionGlob } from "./action-glob.interface";
export declare class ActionGlob implements IActionGlob {
    paths(patterns: string, options?: glob.GlobOptions | undefined): Promise<string[]>;
    globber(patterns: string, options?: glob.GlobOptions | undefined): Promise<glob.Globber>;
}
