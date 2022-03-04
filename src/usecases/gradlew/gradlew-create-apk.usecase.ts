import { IActionExec } from "../../core/actions/action-exec.interface";
import { ActionLogger } from "../../core/actions/action-logger";
import { IGradlewCreateApkUseCase } from "./gradlew-create-apk-usecase.interface";

export class GradlewCreateApkUseCase implements IGradlewCreateApkUseCase {
    constructor(private _exec: IActionExec) {}

    public async create(): Promise<void> {
        const success = await this._exec.run("./gradlew assembleRelease", {
            cwd: "android",
        });

        if (!success) {
            throw new Error(
                "An error occurred while trying to generate the apk."
            );
        }
        ActionLogger.log(`[INFO] Create apk android`);
    }
}
