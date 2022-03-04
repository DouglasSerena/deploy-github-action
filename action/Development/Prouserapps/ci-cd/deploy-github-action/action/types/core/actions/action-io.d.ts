import { IActionIo } from "./action-io.interface";
export declare class ActionIo implements IActionIo {
    findInPath(tool: string): Promise<string[]>;
    remove(path: string): Promise<void>;
}
