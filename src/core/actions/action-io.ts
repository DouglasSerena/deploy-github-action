import * as io from "@actions/io";
import { IActionIo } from "./action-io.interface";

export class ActionIo implements IActionIo {
    public async findInPath(tool: string) {
        return await io.findInPath(tool);
    }

    public async remove(path: string) {
        return await io.rmRF(path);
    }
}
