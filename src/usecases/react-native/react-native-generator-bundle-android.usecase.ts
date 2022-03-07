import path from "path";
import { IActionExec } from "../../core/actions/action-exec.interface";
import { IActionGlob } from "../../core/actions/action-glob.interface";
import { IActionIo } from "../../core/actions/action-io.interface";
import { ActionLogger } from "../../core/actions/action-logger";
import { onTry } from "../../utils/on-try";
import { IReactNativeGeneratorBundleAndroidUseCase } from "./react-native-generator-bundle-android-usecase.interface";

export class ReactNativeGeneratorBundleAndroidUseCase
    implements IReactNativeGeneratorBundleAndroidUseCase
{
    constructor(
        private _exec: IActionExec,
        private _io: IActionIo,
        private _glob: IActionGlob
    ) {}

    public async generator() {
        const success = await this._exec.run(
            "yarn react-native bundle --platform android --dev false --entry-file index.js --assets-dest android/app/src/main/res --bundle-output android/app/src/main/assets/index.android.bundle"
        );

        if (!success) {
            throw new Error(
                "There was an error trying to generate the android bundle."
            );
        }
        ActionLogger.log(`[REACT-NATIVE] Generate bundle apk`);

        await this._clearFolders();
    }

    private async _clearFolders() {
        const pathRes = "android/app/src/main/res";

        const [_, resError] = await onTry(this._io.remove(`${pathRes}/raw`));
        if (resError) {
            throw new Error(
                'An error occurred while trying to remove the "raw" folder.'
            );
        }
        ActionLogger.log(`[IO] Remove folder 'raw'`);

        const folders = await this._glob.directories(`${pathRes}/drawable-*`);

        const [__, drawableError] = await onTry(this._io.remove(folders));
        if (drawableError) {
            throw new Error(
                'An error occurred while trying to remove duplicate "drawable-*" folders.'
            );
        }
        ActionLogger.log(`[IO] Remove folders 'drawable-*'`);
    }
}
