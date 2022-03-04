import { IActionExec } from "../../core/actions/action-exec.interface";
import { IActionGlob } from "../../core/actions/action-glob.interface";
import { IActionIo } from "../../core/actions/action-io.interface";
import { IReactNativeGeneratorBundleAndroidUseCase } from "./react-native-generator-bundle-android-usecase.interface";
export declare class ReactNativeGeneratorBundleAndroidUseCase implements IReactNativeGeneratorBundleAndroidUseCase {
    private _exec;
    private _io;
    private _glob;
    constructor(_exec: IActionExec, _io: IActionIo, _glob: IActionGlob);
    generator(): Promise<void>;
    private _clearFolders;
}
