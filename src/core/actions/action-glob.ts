import * as glob from "@actions/glob";
import { coerceArray } from "../../utils/coerce-array";
import { IActionGlob } from "./action-glob.interface";

export class ActionGlob implements IActionGlob {
    public async paths(
        patterns: string,
        options?: glob.GlobOptions | undefined
    ) {
        const globber = await this.globber(patterns, {});
        return await globber.glob();
    }

    public async directories(
        patterns: string,
        options?: glob.GlobOptions
    ): Promise<string[]> {
        const paths = await this.paths(patterns, options);

        return paths.filter((path) => !/[.]/g.test(path));
    }

    public async globber(
        patterns: string,
        options?: glob.GlobOptions | undefined
    ) {
        return await glob.create(coerceArray(patterns).join("\n"), options);
    }
}
