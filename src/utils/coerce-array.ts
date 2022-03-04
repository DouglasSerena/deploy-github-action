export function coerceArray<T = unknown>(item: T | T[]): T[] {
  return Array.isArray(item) ? item : [item];
}
