import * as fs from "fs";

export interface IActionIo {
    remove(path: string | string[]): Promise<void>;
    writeFile(
        file: fs.PathOrFileDescriptor,
        data: string | NodeJS.ArrayBufferView,
        options?: fs.WriteFileOptions | undefined
    ): Promise<void>;
}
