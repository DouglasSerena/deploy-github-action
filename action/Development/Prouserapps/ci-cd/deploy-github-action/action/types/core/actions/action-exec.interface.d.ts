import * as exec from '@actions/exec';
export interface IActionExec {
    run(commandLine: string): Promise<boolean>;
    run(commandLine: string, args?: string[]): Promise<boolean>;
    run(commandLine: string, options?: exec.ExecOptions): Promise<boolean>;
    run(commandLine: string, args?: string[], options?: exec.ExecOptions): Promise<boolean>;
}
