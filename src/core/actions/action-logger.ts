import * as core from "@actions/core";

export class ActionLogger {
    public static log(message: string): void {
        return core.info(message);
    }
    public static debug(message: string): void {
        return core.info(message);
    }
    public static failed(message: string): void {
        return core.setFailed(message);
    }
}
