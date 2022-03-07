/// <reference types="node" />
import * as fs from "fs";
import { IActionIo } from "./action-io.interface";
export declare class ActionIo implements IActionIo {
    writeFile(file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: fs.WriteFileOptions): Promise<void>;
    remove(path: string | string[]): Promise<void>;
}
