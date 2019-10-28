import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'

Vue.use(Vuex)
const debug: boolean = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home
  },
  strict: debug
})
