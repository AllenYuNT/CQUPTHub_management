<template>
	<div class='member'>
		<header-nav></header-nav>
		<side-bar :linkList ='list'></side-bar>
		<main-box></main-box>
	</div>
</template>

<script type="text/javascript">
import sideBar from '../common/sideBar'
import headerNav from '../common/headerNav'
import mainBox from '../common/mainBox'
	export default{
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
					}
				]
			}
		},
		methods:{
            change() {
            	console.log('hello word');
            }
		},
		components: {
			sideBar,
			headerNav
	  	},

	}
</script>

<style lang='less' scoped>
	
</style>