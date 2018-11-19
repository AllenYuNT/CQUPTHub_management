<template>
	<div class='project'>
		<main class="main">
			<div class='button-box'>
				<!-- <router-link to = './editmenber'> 1</router-link> -->
				<div v-for="item in items" class="headmen">
					{{item.mark}}:&nbsp;&nbsp;&nbsp;
					<input :placeholder="item.placeholder">
				</div>
				<div class="headmen dirc">小组方向：&nbsp;&nbsp;&nbsp;
					<input type="text" placeholder="大数据">
					<sicon name="jiantouB" scale="2" class="smicon" @click="show"></sicon>
				 </div>
				<div class="search">查询</div>
			</div>
			<div class='project-box'>
				<header class='myheader'>
					<div class="namemenber">成员姓名</div>
					<div class="institute">成员学院</div>
					<div class="director">小组方向</div>
					<div class="addmen">
						<router-link to='/addmember' class="clors"> 
						添加成员
						</router-link>
					</div>
				</header>
				<div class='content-box'>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<div class='list'>
						<header class='header-list'>
							<div class="namemenber">杜聪</div>
							<div class="institute">计算机科学与技术</div>
							<div class="director">产品</div>
							<div class="edit">
								<router-link to='/editmember' class="clors"> 
								编辑
								</router-link>
							</div>
						</header>
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
				items:[
					{
						mark:'成员姓名',
						placeholder:'可不填'
					},
					{
						mark:'成员学院',
						placeholder:'可不填'
					},
				]
			}
		},
		methods:{
			show: function(){
				alert(2)
			}
		},
		components:{
			pagination,
			lastlogin,
		}
	}
</script>

<style lang='less' scoped>
@twidth:1500px;
@theight: 796px;
	.widthrate(){
		min-width: calc(100vw - 250px);
		text-align: center;
		font-size: 14px;
		.namemenber{
			width: 126px;
		}
		.institute{
			width: 185px;
		}
		.director{
			width: 185px;
		}
		.edit{
			width: 62px;
			height: 26px;
			line-height: 26px;
			margin-left: 200px;
			margin-top: 7px;
			.showder();
		}
		.namemenber,.institute,.director,.edit{
			float: left;
		}
	}
	.showder(){
		box-shadow:0.5px 0.5px 0.5px #d5d5d5,
					0.5px -0.5px 0.5px #d5d5d5,
					-0.5px 0.5px 0.5px #d5d5d5,
					-0.5px -0.5px 0.5px #d5d5d5;
	}

// 	a {
//     text-decoraction: none;
// }
// .router-link-active {
//     text-decoration: none;
// }
	.clors{
		color: black;
	}
	.project{
		margin-left:140px;
	}
	.main{
		padding:10px 10px 0 10px;
		height:calc(100vh - 50px);
		display:flex;
		flex-direction:column;
		.button-box{
			background-color: #f2f2f2;
			flex-shrink:0;
			height:50px;
			width:100%;
			margin-bottom:10px;
			.headmen{
				font-size: 13px;
				margin-left: 23px;
				float: left;
				margin-right: 17px;
				margin-top: 9px;
				position: relative;
				.smicon{
					cursor: pointer;
					position: absolute;
					z-index: 5;
					left: 170px;
					top: 6px;
					color: black;
					background-position: 0px 0px; 
				}
				input{
					width: 114px;
					height: 28px;
					text-indent: 1em;
				}
			}
			.search{
				width: 103px;
				height: 34px;
				line-height: 34px;
				color: #ffcc33;
				font-size: 14px;
				background-color: #e9e9e9;
				text-align: center;
				margin-left: 1290px/@twidth *100%;
				margin-top: 8px;
				// margin-right: 128px/@twidth *100%;
				// float: right;
				border: 1px solid #989898;
			}
		}
		.project-box{
			padding:10px;
			flex:1;
			background-color:#f1f1f1;
			.myheader{
				height:50px;
				background-color: #f2f2f2;
				line-height: 46px;
				font-weight: bold;
				.widthrate();
				.addmen{
					// margin-right: 117px/@twidth *100%;
					// float: right;
					margin-top: 11px;
					margin-left: 1300px/@twidth *100%;
					background-color: #ffffff;
					width: 103px;
					height: 26px;
					line-height: 26px;
					color: #333333;
					font-weight: normal;
					.showder();
				}

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
						background-color: #ffffff;
						line-height: 35px;
						font-size: 12px;
						.widthrate();
					}
					.footer-list{
						height:5px;
						flex-shrink:0;
						background-color: #f2f2f2;
					}
				}
			}
		}
	}
	input::-webkit-input-placeholder {
		color: #999999;
	}
	input:-moz-placeholder {
		color: #999999;
	}
	input::-moz-placeholder {
		color: #999999;
	}
	input:-ms-input-placeholder {
		color: #999999;
	}
	textarea::-webkit-input-placeholder {
		color: #999999;
	}
	textarea:-moz-placeholder {
		color: #999999;
	}
	textarea::-moz-placeholder {
		color: #999999;
	}
	textarea:-ms-input-placeholder {
		color: #999999;
	}
</style>