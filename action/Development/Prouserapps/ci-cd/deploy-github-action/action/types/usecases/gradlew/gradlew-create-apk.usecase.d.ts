import { IActionExec } from "../../core/actions/action-exec.interface";
import { IGradlewCreateApkUseCase } from "./gradlew-create-apk-usecase.interface";
export declare class GradlewCreateApkUseCase implements IGradlewCreateApkUseCase {
    private _exec;
    constructor(_exec: IActionExec);
    create(): Promise<void>;
}
