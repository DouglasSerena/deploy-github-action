import path from 'path';
import { IActionExec } from '../../core/actions/action-exec.interface';
import { IReactNativeGeneratorBundleAndroidUseCase } from './react-native-generator-bundle-android-usecase.interface';

export class ReactNativeGeneratorBundleAndroidUseCase
  implements IReactNativeGeneratorBundleAndroidUseCase
{
  constructor(private _exec: IActionExec) {}

  public async generator() {
    const success = await this._exec.run(
      'yarn react-native bundle --platform android --dev false --entry-file index.js --assets-dest android/app/src/main/res --bundle-output android/app/src/main/assets/index.android.bundle'
    );

    if (!success) {
      throw new Error(
        'There was an error trying to generate the android bundle.'
      );
    }

    await this._clearFolders();
  }

  private async _clearFolders() {
    const successDrawable = await this._exec.run('rm -r drawable-*', {
      cwd: path.join(__dirname, 'android', 'app', 'src', 'main', 'res'),
    });
    if (!successDrawable) {
      throw new Error(
        'An error occurred while trying to remove duplicate "drawable-*" folders.'
      );
    }

    const successRaw = await this._exec.run('rm -r drawable-*', {
      cwd: path.join(__dirname, 'android', 'app', 'src', 'main', 'res'),
    });
    if (!successRaw) {
      throw new Error(
        'An error occurred while trying to remove the "raw" folder.'
      );
    }
  }
}
