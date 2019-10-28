import Vue from 'vue'
import 'amfe-flexible'
import FastClick from 'fastclick'
import '@/libs/vant'
import '@/styles/index.scss'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 解决移动端click事件300毫秒延迟方法
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
