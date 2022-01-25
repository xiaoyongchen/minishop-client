import { Position } from "postcss";
import { DirectiveBinding, App } from "vue";

/**
 * 自定义组件的安全高度
 * @param name
 * @param directive
 * @用法 v-safeInset.paddingTop="25"
 */

const Position = {
  paddingTop: "paddingTop",
  paddingRight: "paddingRight",
  paddingLeft: "paddingLeft",
  paddingBottom: "paddingBottom",
} as CSSStyleDeclaration;

// 字面量类型联合类型
type PositionKey = keyof typeof Position;
const safeInset = (app: App): void => {
  app.directive("safeInset", (el: HTMLElement, binding: DirectiveBinding) => {
    const userAgent = navigator.userAgent;
    const isIOS = userAgent.indexOf("iPhone") !== -1;
    if (isIOS) {
      return;
    }
    // CSSStyleDeclaration 里面的类型签名不知道为什么是number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const styleKey: any = (binding.arg as PositionKey) || Position.paddingTop;
    const safeInsetValue = el.style[styleKey];
    if (!parseFloat(safeInsetValue)) {
      // 这里要用el.style去设置
      el.style[styleKey] = binding.value + "px";
    }
  });
};

export default safeInset;
