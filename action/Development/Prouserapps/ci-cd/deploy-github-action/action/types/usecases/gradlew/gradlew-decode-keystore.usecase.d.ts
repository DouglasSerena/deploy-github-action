import { IActionInput } from "../../core/actions/action-input.interface";
import { IActionIo } from "../../core/actions/action-io.interface";
import { IGradlewDecodeKeystore } from "./gradlew-decode-keystore-usecase.interface";
export declare class GradlewDecodeKeystore implements IGradlewDecodeKeystore {
    private _input;
    private _io;
    constructor(_input: IActionInput, _io: IActionIo);
    decode(): Promise<void>;
}
