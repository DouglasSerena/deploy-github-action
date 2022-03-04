export interface IActionIo {
    remove(path: string | string[]): Promise<void>;
}
