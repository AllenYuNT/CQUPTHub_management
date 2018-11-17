<!-- 左侧侧边栏 -->
<template>
	<div class='sideBar'>
		<nav class='navLBoxWrapper'>
			<ul class='navBox'>
					<router-link class='navList' v-for = '(item,index) in linkList' tag='li' :key = 'index' :to = 'item.link' >{{item.name}}</router-link>
					<li class="setting" @click="appearBt">设置</li>
					<transition name="show">
						<ul class="huaAll" v-if="appearOr">
							<router-link class="huaList" v-for= '(item, index) in huaList' tag='li' :to = 'item.link'  :key = 'index'>{{item.name}}</router-link>
						</ul>
					</transition>
			</ul>
		</nav>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['linkList', 'huaList'],
		data(){
			return {
				appearOr: false
			}
		},
		methods: {
			appearBt: function() {
				this.appearOr = !this.appearOr;

			}
		} 
	}
</script>

<style lang='less' scoped>
	.navBox {
		position: relative;
	}
	.sideBar{
		index:1;
		position:fixed;
		left:0;
		top:50px;
		width:140px;
		height:100%;
		background-color:#677782;
		.navList, .setting{
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
		.huaList {
			index: -2;
			background-color: #e4e4e4;
			border-bottom:1px solid #677782;
			height: 34px;
			padding-bottom:18px;
			text-align: center;
			line-height: 34px;
			font-weight: 400;
	    font-style: normal;
	    font-size: 13px;
	    color: #333333;
		}
	}
	@keyframes show {
      0% {
      		margin-top: -136px;
          opacity: 0;
      }
      100% {
          opacity: 1;
          margin-top: 0;
      }
  }
  @keyframes hide {
      0% {
          opacity: 1;
          margin-top: 0;
      }
      100% {
          opacity: 0;
          margin-top: -136px;
      }
  }
  .show-enter-active {
      animation: show 1.2s;
  }
  .show-leave-active {
      animation: hide 1.2s;
  }
  .show-enter, .show-leave-to {
      opacity: 0;
  }
</style>