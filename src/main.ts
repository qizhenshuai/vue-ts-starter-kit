import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { AppConfig } from './config/app'
import { loadAllPlugins } from './plugins'

const app = createApp(App)
app.config.globalProperties.globalConfig = AppConfig

// 加载所有的plugin
loadAllPlugins(app)

app.use(store)
app.use(router)

app.mount('#app')
