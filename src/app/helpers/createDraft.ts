export function createDraft<T extends any>(object: T): T {
  return structuredClone(object);
}