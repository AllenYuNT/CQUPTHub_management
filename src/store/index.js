import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import test from './modules/test'

export default new vuex.Store({
  modules: {
    test: test
}
})