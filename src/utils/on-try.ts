export async function onTry<T = unknown>(
    callback: () => Promise<T>
): Promise<[T | null, Error | null]>;
export async function onTry<T = unknown>(
    promise: Promise<T>
): Promise<[T | null, Error | null]>;
export async function onTry<T>(
    callback: (() => Promise<T>) | Promise<T>
): Promise<[T | null, Error | null]> {
    try {
        if (typeof callback === "function") {
            callback = callback();
        }

        return [await callback, null];
    } catch (error) {
        return [null, error as Error];
    }
}
