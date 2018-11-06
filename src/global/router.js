import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/router'
import login from '../views/login/router'
import member from '../views/member/router'
import page from  '../views/page/router'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect:'/index',
    },
    ...index,
    ...login,
    ...member,
    ...page
  ],
})