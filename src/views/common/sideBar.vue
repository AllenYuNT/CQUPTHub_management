<!-- 左侧侧边栏 -->
<template>
	<div class='sideBar'>
		<nav class='navLBoxWrapper'>
			<ul class='navBox'>	
				<router-link  :class='{select:isSelect(item.link)}' class='navList' v-for = '(item,index) in linkList' tag='li' :key = 'index' :to = 'item.link' >{{item.name}}</router-link>
			</ul>
		</nav>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['linkList'],
		data(){
			return {
			}
		},
		computed:{

		},
		methods:{
			isSelect(link){
				if(link == '/project' && (this.$route.name == 'project' || this.$route.name == 'addProject' || this.$route.name == 'articleMenu' )){

					return true;
				}
				return false;
			}
		}
	}
</script>

<style lang='less' scoped>
	.sideBar{
		position:fixed;
		left:0;
		top:0;
		bottom:0;
		padding-top:50px;
		width:140px;
		height:100%;
		background-color:#677782;
		.navList{
			text-align:center;
			padding:18px;
			font-size:16px;
			color:white;
			cursor:pointer;
			border-bottom:1px solid white;
		}
		.navList.router-link-exact-active.router-link-active{
			color:rgb(255, 204, 51);
		}
		.navList.select{
			color:rgb(255, 204, 51);
		}
	}
</style>