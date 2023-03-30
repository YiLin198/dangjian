const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer:{
    hot: true,
    port: 8082, // 启动端口
    open: true,  // 启动后是否自动打开网页
  },
})
