import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import user from './modules/user'

export default new vuex.Store({
  modules: {
    user: user
  }
})