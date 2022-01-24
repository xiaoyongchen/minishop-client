/* eslint-disable */
export function isFormData(obj: any): boolean {
  return Object.prototype.toString.call(obj) === "[object FormData]";
}

export function assert(condition: any, msg: any) {
  if (!condition) {
    throw new Error(`[Apierror] ${msg}`);
  }
}
