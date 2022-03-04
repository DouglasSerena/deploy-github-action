import { ActionLogger } from "./core/actions/action-logger";
import { IGithub } from "./core/github/github.interface";
import { GITHUB_VERSION_NAME } from "./domain/enums/github/github-version-name.enum";
import { PLATFORM } from "./domain/enums/platform.enum";
import { IGithubTagRepository } from "./repositories/github/github-tag-repository.interface";
import { GithubTagRepository } from "./repositories/github/github-tag.repository";
import { GithubCreateTagUseCase } from "./usecases/github/github-create-tag.usecasecopy";
import { GithubGetLastTagUseCase } from "./usecases/github/github-get-last-tag.usecase";
import { GithubRegisterTagUseCase } from "./usecases/github/github-register-tag.usecase";
import { GradlewCreateApkUseCase } from "./usecases/gradlew/gradlew-create-apk.usecase";
import { ReactNativeGeneratorBundleAndroidUseCase } from "./usecases/react-native/react-native-generator-bundle-android.usecase";

export class Action {
    constructor(private _github: IGithub) {}

    public async exec() {
        const githubRepository = new GithubTagRepository(this._github);

        await this._createNewTag(githubRepository);
        await this._generatorBundle();
        await this._createApk();
        // await this._publishFirebase();
    }

    private async _createNewTag(githubRepository: IGithubTagRepository) {
        const githubGetLastTagUseCase = new GithubGetLastTagUseCase(
            githubRepository
        );
        const githubCreateTagUseCase = new GithubCreateTagUseCase(
            githubRepository
        );
        const githubRegisterTagUseCase = new GithubRegisterTagUseCase(
            githubRepository
        );

        const tag = await githubGetLastTagUseCase.tag();
        const metadata = tag?.metadata ?? {
            name: GITHUB_VERSION_NAME.ALPHA,
            number: 1,
            version: { major: 1, minor: 0, patch: 0 },
        };

        const newTag =
            this._github.input.versionName === GITHUB_VERSION_NAME.RELEASE
                ? await githubCreateTagUseCase.createRelease(metadata)
                : await githubCreateTagUseCase.createAlpha(metadata);

        ActionLogger.log(`[INFO] Create new tag: "${newTag.tag}"`);

        await githubRegisterTagUseCase.register(newTag);
        ActionLogger.log(`[INFO] Create ref: "${newTag.tag}"`);
    }

    private async _generatorBundle() {
        switch (this._github.input.platform) {
            case PLATFORM.ANDROID:
                const reactNativeGeneratorBundleAndroidUseCase =
                    new ReactNativeGeneratorBundleAndroidUseCase(
                        this._github.exec,
                        this._github.io
                    );

                await reactNativeGeneratorBundleAndroidUseCase.generator();
                break;
            case PLATFORM.IOS:
                throw new Error(`Not implemented`);
            default:
                throw new Error(
                    `Platform not unknown ${this._github.input.platform}`
                );
        }
    }

    private async _createApk() {
        const gradlewCreateApkUseCase = new GradlewCreateApkUseCase(
            this._github.exec
        );

        await gradlewCreateApkUseCase.create();
    }

    private async _publishFirebase() {}
}
