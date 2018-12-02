import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/router'
import member from '../views/member/router'
import addmember from '../views/addmember/router'
import editmember from '../views/editmember/router'
import page from  '../views/page/router'
import project from '../views/project/router'
import add from '../views/add/router'
import edit from '../views/edit/router'
Vue.use(Router)

const router  = new Router ({
  routes: [
    {
      path: '/',
      redirect:'/project',
    },
    ...project,
    ...login,
    ...member,
    ...page,
    ...add,
    ...edit,
    ...addmember,
    ...editmember,
  ],
})
router.beforeEach((to,from,next)=>{
  next();
})
export default router