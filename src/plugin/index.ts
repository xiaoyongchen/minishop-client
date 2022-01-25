// 按需引用插件
// const { $toast }: any = instance?.appContext.config.globalProperties
import type { App } from "vue";
import VantPlugins from "./vant";
import api from "./api";
import safeInset from "@/directives/safeInset";

export default {
  install: (app: App): void => {
    app.use(VantPlugins);

    // 添加全局其他属性
    app.config.globalProperties.$api = api;
    // 设置自定义指令
    safeInset(app);
  },
};
