import * as exec from "@actions/exec";
import { IActionExec } from "./action-exec.interface";
import { ActionLogger } from "./action-logger";

export class ActionExec implements IActionExec {
    run(commandLine: string): Promise<boolean>;
    run(commandLine: string, args?: string[]): Promise<boolean>;
    run(commandLine: string, options?: exec.ExecOptions): Promise<boolean>;
    run(
        commandLine: string,
        args?: string[],
        options?: exec.ExecOptions
    ): Promise<boolean>;
    public async run(commandLine: any, ...args: any[]): Promise<boolean> {
        try {
            if (Array.isArray(args[0])) {
                ActionLogger.log(`[EXEC]: ${commandLine} ${args[0].join(" ")}`);
                await exec.exec(commandLine, args[0], args[1]);
            } else {
                ActionLogger.log(`[EXEC]: ${commandLine}`);
                await exec.exec(commandLine, undefined, args[0]);
            }
            return true;
        } catch (error) {
            return false;
        }
    }
}
