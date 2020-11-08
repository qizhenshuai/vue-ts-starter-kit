import { createApp } from 'vue'

/**
 * 加载所有的plugin
 * @param app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach(file => {
    if (typeof files(file).default === 'function') {
      if (file !== './index.ts') {
        files(file).default(app)
      }
    }
  })
}
