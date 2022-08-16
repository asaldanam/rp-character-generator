/** Generates time based base64 uuid  */
export function uuid() {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  return id;
}
