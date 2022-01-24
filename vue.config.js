const { merge } = require("webpack-merge");
const { resolve } = require("path");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  parallel: false,
  configureWebpack: () => {
    return {
      resolve: {
        // 设置别名
        alias: {
          "@": resolve(__dirname, "src"),
          "@utils": resolve(__dirname, "src/utils"),
          "@views": resolve(__dirname, "src/views"),
          "@assets": resolve(__dirname, "src/assets"),
          "@service": resolve(__dirname, "src/service"),
          "@components": resolve(__dirname, "src/components"),
          "@config": resolve(__dirname, "src/config"),
          "@constant": resolve(__dirname, "src/constant"),
          "@hooks": resolve(__dirname, "src/hooks"),
        },
      },
    };
  },
  // 高级配置，类似插槽主要功能merge loader
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        });
        return options;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/index.scss";`,
      },
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    disableHostCheck: true,
    port: 8080,
    hotOnly: true,
    open: true,
  },
};
