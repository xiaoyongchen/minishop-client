import Vue, { VNode } from "vue";

declare global {
  interface Window {
    GLOBAL: any;
  }

  interface MSCResponse<T> {
    code?: number;
    msg?: string;
    lang?: string;
    data: T;
  }
}
