import { IActionExec } from '../../core/actions/action-exec.interface';
import { IReactNativeGeneratorBundleAndroidUseCase } from './react-native-generator-bundle-android-usecase.interface';
export declare class ReactNativeGeneratorBundleAndroidUseCase implements IReactNativeGeneratorBundleAndroidUseCase {
    private _exec;
    constructor(_exec: IActionExec);
    generator(): Promise<void>;
    private _clearFolders;
}
