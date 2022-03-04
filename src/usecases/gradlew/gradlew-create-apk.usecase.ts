import { IActionExec } from "../../core/actions/action-exec.interface";
import { IGradlewCreateApkUseCase } from "./gradlew-create-apk-usecase.interface";

export class GradlewCreateApkUseCase implements IGradlewCreateApkUseCase {
    constructor(private _exec: IActionExec) {}

    public async create(): Promise<void> {
        const success = await this._exec.run(
            "cd /android && ./gradlew assembleRelease"
        );

        if (!success) {
            throw new Error(
                "An error occurred while trying to generate the apk."
            );
        }
    }
}
