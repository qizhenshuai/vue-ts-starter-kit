const path = require('path')

const resolve = (dir = '') => path.join(__dirname, dir)

module.exports = {
  devServer: {
    proxy: {
      '^/weather': {
        target: 'https://www.apiopen.top/api',
        pathRewrite: {
          '^/weather': ''
        }
      }
    }
  }
}
