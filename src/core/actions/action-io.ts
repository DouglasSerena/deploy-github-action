import * as io from "@actions/io";
import { IActionIo } from "./action-io.interface";

export class ActionIo implements IActionIo {
    public async remove(path: string) {
        return io.rmRF(path);
    }
}
