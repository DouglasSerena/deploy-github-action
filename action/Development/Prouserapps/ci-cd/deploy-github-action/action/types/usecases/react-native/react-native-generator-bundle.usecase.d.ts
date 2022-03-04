import { IActionExec } from '../../core/actions/action-exec.interface';
import { IReactNativeGeneratorBundleUseCase } from './react-native-generator-bundle-usecase.interface';
export declare class ReactNativeGeneratorBundleUseCase implements IReactNativeGeneratorBundleUseCase {
    private _exec;
    constructor(_exec: IActionExec);
    generator(): Promise<void>;
    private _prepare;
}
