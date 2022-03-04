export declare function onTry<T = unknown>(callback: () => Promise<T>): Promise<[T | null, Error | null]>;
export declare function onTry<T = unknown>(promise: Promise<T>): Promise<[T | null, Error | null]>;
