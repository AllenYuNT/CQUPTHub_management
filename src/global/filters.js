// import { Toast } from "_vant@0.12.14@vant";

let filters = {
  init(val) {
    return 'filter init'
  },
  helloWorld() {
    return 'Hello World'
  }

}
export default {
  install(Vue) {
    for (var key in filters) {
      Vue.filter(key, filters[key])
    }
    Vue.prototype.init = filters.init
    Vue.prototype.helloWorld = filters.helloWorld
    
  }
}
