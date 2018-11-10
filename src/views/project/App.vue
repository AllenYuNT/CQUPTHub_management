<template>
	<div class='project'>
		<main class="main">
			<div class='button-box'>
			</div>
			<div class='project-box'>
				<header class='myheader'></header>
				<div class='content-box'>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'></header>
						<footer class='footer-list'></footer>
					</div>
				</div>
			</div>
			<pagination></pagination>
			<lastlogin></lastlogin>
		</main>                                                                                                                                                                   
	</div>
</template>

<script type="text/javascript">
import pagination from '../common/pagination.vue'
import lastlogin from '../common/lastlogin.vue'
	export default{
		data(){
			return{
			}
		},
		methods:{

		},
		components:{
			pagination,
			lastlogin,
		}
	}
</script>

<style lang='less' scoped>
	.project{
		margin-left:140px;
	}
	.main{
		padding:10px 10px 0 10px;
		height:calc(100vh - 50px);
		display:flex;
		flex-direction:column;
		.button-box{
			background-color:grey;
			flex-shrink:0;
			height:50px;
			width:100%;
			margin-bottom:10px;
		}
		.project-box{
			padding:10px;
			width:100%;
			flex:1;
			background-color:#f1f1f1;
			.myheader{
				height:50px;
				background-color:rgba(0,0,0,0.5);
			}
			.content-box{
				background-color:rgba(186, 186, 186, 0.8);
				height:calc(100% - 50px);
				.list{
					height:12.5%;
					display:flex;
					flex-direction:column;
					.header-list{
						flex:1;
					}
					.footer-list{
						height:5px;
						flex-shrink:0;
						background-color:grey;
					}
				}
			}
		}
	}
</style>