<template>
	<div class='project'>
		<main class="main">
			<div class='button-box'>
				<div class="search">
					<div>
						<span>文章标题: </span>
						<input type="text" placeholder="可不填">
					</div>
					<div>
						<span>作者:  </span>
						<input type="text" placeholder="可不填">
					</div>
					<div>
						<span>上传时间:</span>
						<input type="text" placeholder="最近一周">
					</div>
				</div>
				<button>查询</button>
			</div>
			<div class='project-box'>
				<header class='myheader'>
					<div class="header">
						<div>文章标题</div>
						<div>部分正文</div>
					</div>
					<button>添加文章</button>
				</header>
				<div class='content-box'>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
					<div class='list'>
						<header class='header-list'>《架构设计》</header>
						<footer class='footer-list'>架构设计架构设计架构设计架构设</footer>
						<button>编辑</button>
					</div>
				</div>
			</div>
			<pagination @click="add"></pagination>
			<lastlogin></lastlogin>
		</main>
	</div>
</template>

<script>
import pagination from '../common/pagination.vue'
import lastlogin from '../common/lastlogin.vue'
	export default{
		data(){
			return{
				page: [{
					type:'',
					id:'',
					title:'',
    			content:''
				}],
				count: 1
			}
		},
		methods:{
			add: function() {
				count++;
			}
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
		padding:13px 10px 0 20px;
		height:calc(100vh - 50px);
		display:flex;
		flex-direction:column;
		.button-box{
			background-color: rgba(242, 242, 242, 1);
			flex-shrink:0;
			height:50px;
			width:100%;
			display: flex;
			justify-content: space-between;
			padding-left: 30px;
			align-items: center;
			.search {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			div {
				display: flex;
				flex-direction: row;
				font-size: 15px;
				justify-content:flex-start;
				align-items: center;
				padding-right: 100px;
				span {
					padding-right: 10px;
					width: 80px;
				}
				input {
					width: 110px;
					height: 28px;
					font-size: 13px;
					box-shadow: 0 0 5px #ccc;
				}
			}
			button {
				height: 35px;
				width: 140px;
				margin-top: 8px;
				color: orange;
				font-size: 15px;
			}
		}
		.project-box{
			width:100%;
			flex:1;
			margin-top:10px;
			background-color: rgba(242, 242, 242, 1);
			.myheader{
				justify-content: space-between;
				height:40px;
				display: flex;
				align-items: center;
				.header{
					display: flex;
				}
				div {
					font-size: 15px;
					font-family: 'Arial Negreta', 'Arial';
			    font-weight: 700;
			    font-style: normal;
					padding-left: 20px;
					&:nth-child(2) {
						padding-left: 55px;
					}
				}
				button {
					height: 30px;
					width: 150px;
					background-color: white;
					border: none;
					font-size: 15px;
					box-shadow: 0 0 10px #ccc;
				}
			}
			.content-box{
				height:calc(100% - 50px);
				.list{
					font-size: 14px;
					background: white;
					height:12.5%;
					display:flex;
					margin-bottom: 10px;
					align-items: center;
					.header-list{
						padding-left: 35px;
					}
					.footer-list{
						padding: 10px 0 0 0;
						flex-shrink:0;
						margin-left: 33px;
						width: 450px;
					}
					button {
						width: 55px;
						border: 1px solid #ccc;
						background: white;
						font-size: 13px;
						color: grey;
						margin-left: 280px;
						margin: 5px 0;
						border: none;
						height: 28px;
						box-shadow: 0 0 10px #ccc;
					}
				}
			}
		}
	}
</style>