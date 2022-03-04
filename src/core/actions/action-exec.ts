import * as exec from '@actions/exec';
import { IActionExec } from './action-exec.interface';

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
        await exec.exec(commandLine, args[0], args[1]);
      } else {
        await exec.exec(commandLine, undefined, args[0]);
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
