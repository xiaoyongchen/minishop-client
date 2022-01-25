import { Toast, Dialog } from "vant";
import type { App } from "vue";
// 将所有 loading Toast 设置为背景不可点击
Toast.setDefaultOptions("loading", { forbidClick: true });

export default {
  install: (app: App): void => {
    app.config.globalProperties.$toast = Toast;
    app.config.globalProperties.$loading = Toast.loading;
    app.config.globalProperties.$success = Toast.success;
    app.config.globalProperties.$fail = Toast.fail;
    app.config.globalProperties.$alert = Dialog.alert;
    app.config.globalProperties.$confirm = Dialog.confirm;
  },
};
