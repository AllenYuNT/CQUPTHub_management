<template>
  <div id="app">
    <header-nav></header-nav>
    <side-bar :linkList ='list'></side-bar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件-->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件-->
    </router-view>
  </div>
</template>

<script>
import sideBar from './views/common/sideBar'
import headerNav from './views/common/headerNav'
export default {
  data(){
    return{
        list:[
          {
            link:'/',
            name:'项目'
          },
          {
            link:'/page',
            name:'文章'
          },
          {
            link:'/member',
            name:'成员',
          }]
        }
    },
    components:{
        sideBar,
        headerNav,
    },
  name: 'App',
}
</script>

<style>
#app{
  font-size: 18px;
}
</style>
