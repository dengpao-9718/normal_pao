const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = defineConfig({
  runtimeCompiler: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("css", resolve("src/assets/css"))
      .set("img", resolve("src/assets/image"))
      .set("views", resolve("src/views"))
      .set("store", resolve("src/store"))
      .set("comp", resolve("src/components"));
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      api: {
        target: "http:127.0.0.1:9527/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //重写路径
          "^/api": "",
        },
      },
    },
  },
});
