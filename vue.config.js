
const PORT = 5757

module.exports = {
  devServer: {
    port: PORT,
    open: true,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXY_API,
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          // ['^' + process.env.VUE_APP_BASE_API]: process.env.VUE_APP_BASE_API
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
