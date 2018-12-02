<template>
  <div id="app">

    <header-nav v-show='check()'></header-nav>
    <side-bar :linkList ='list' v-show='check()'></side-bar>
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
import { mapState, mapMutations   } from 'vuex'
import sideBar from './views/common/sideBar'
import headerNav from './views/common/headerNav'
export default {
  data(){
    return{

        list:[
          {
            link:'/project',
            name:'项目',
          },
          {
            link:'/page',
            name:'文章',
          },
          {
            link:'/member',
            name:'成员',
          }],

        }
    },
    computed:{
      ...mapState([
        'user'
      ])
    },  
    created(){
      this.change('啦啦啦');
      //这里用来判断后台首先返回的信息 后台session验证通过后用户名保存到vuex里
    },
    methods:{
      check(){
        if(this.$route.path == '/login'){
          return false
        }
        else{
          return true;
        }
      },
      ...mapMutations({
        change:'changState'
      })
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
