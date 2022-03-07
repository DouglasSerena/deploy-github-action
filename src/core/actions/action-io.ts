import * as fs from "fs";
import * as io from "@actions/io";
import { coerceArray } from "../../utils/coerce-array";
import { IActionIo } from "./action-io.interface";

export class ActionIo implements IActionIo {
    public async writeFile(
        file: fs.PathOrFileDescriptor,
        data: string | NodeJS.ArrayBufferView,
        options?: fs.WriteFileOptions
    ): Promise<void> {
        fs.writeFileSync(file, data, options);
    }
    public async remove(path: string | string[]) {
        const promises = coerceArray(path).map((path) => io.rmRF(path));

        await Promise.all(promises);
    }
}
