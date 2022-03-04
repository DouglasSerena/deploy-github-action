export declare function onTry<T = unknown>(callback: () => T): Promise<[T | null, Error | null]>;
