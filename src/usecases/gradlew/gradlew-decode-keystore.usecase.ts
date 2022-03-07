import path from "path";
import { IActionInput } from "../../core/actions/action-input.interface";
import { IActionIo } from "../../core/actions/action-io.interface";
import { IGradlewDecodeKeystore } from "./gradlew-decode-keystore-usecase.interface";

export class GradlewDecodeKeystore implements IGradlewDecodeKeystore {
    constructor(private _input: IActionInput, private _io: IActionIo) {}

    public async decode(): Promise<void> {
        const keystorePath = this._input.keystorePath;
        const keystoreBase64 = this._input.keystoreBase64;
        const keystoreFilename = this._input.keystoreFilename;
        const dest = path.join(keystorePath, keystoreFilename);

        await this._io.writeFile(dest, Buffer.from(keystoreBase64, "base64"));
    }
}
