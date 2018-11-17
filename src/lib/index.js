import Vue from 'vue'

import ajax from './ajax'
import svgIcon from './svgIcon'
import iview from './iview'

export default {
  install(Vue) {
    Vue.use(ajax)
    Vue.use(svgIcon)
    Vue.use(iview)
  }
}
