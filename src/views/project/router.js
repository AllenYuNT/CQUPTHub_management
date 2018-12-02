import App from './App';
import addProject from './addProject'
import add from './add'
import articleMenu from './articleMenu'

export default [
  {
    path: '/project',
    name:'project',
    component: App
  },
  {
    path:'/addProject',
    component:addProject,
    children:[
      {
        path:'/addProject',
        redirect:'/addProject/add'
      },
      {
        path:'/addProject/add',
        name:'addProject',
        component:add
      },
      {
        path:'/addProject/articleMenu',
        name:'articleMenu',
        component:articleMenu
      }
    ]
  }
]