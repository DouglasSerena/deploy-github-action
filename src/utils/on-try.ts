export async function onTry<T = unknown>(
  callback: () => T
): Promise<[T | null, Error | null]> {
  try {
    const result = await callback();
    return [result, null];
  } catch (error) {
    return [null, error as Error];
  }
}
