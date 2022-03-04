import { IActionIo } from "./action-io.interface";
export declare class ActionIo implements IActionIo {
    remove(path: string | string[]): Promise<void>;
}
