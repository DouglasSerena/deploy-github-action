export interface IActionIo {
    findInPath(tool: string): Promise<string[]>;
    remove(path: string): Promise<void>;
}
