import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/router'
import member from '../views/member/router'
import page from  '../views/page/router'
import project from '../views/project/router'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect:'/project',
    },
    ...project,
    ...login,
    ...member,
    ...page,
  ],
})