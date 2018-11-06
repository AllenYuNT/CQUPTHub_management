<template>
	<div class = 'login'>
		<main class='main'>
			<div class='captionBox'>
				<div class='loginBox'>
					<header class='loginTitle'>
						<sicon class='myIcon' name="man" scale="9.0"></sicon>
						<p class='title'>CQUPThub 后台管理系统</p>
						<p class='title little'>Background management system</p>	
					</header>
					<div class='loginContent'>
						<form id='myForm' method="post" action="#">
							<label class='myLabel'>
								<sicon class='myIcon' name='user' scale='2.5'></sicon>
								<input @focus = 'select($event)' @blur ="leave($event,'请输入账号')" type="text" name="username" placeholder="请输入账号">
							</label>
							<label class='myLabel'>
								<sicon class='myIcon' name='lock' scale='2.5'></sicon>
								<input  @focus = 'select($event)' @blur ="leave($event,'请输入登录密码')"  type="text" name="password" placeholder="请输入登录密码">
							</label>
							<input class="submit" type="submit" name="submit" value="登录">
						</form>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{
			select(event){
				event.target.placeholder = '';
			},
			leave(event,value){
				event.target.placeholder = value
			}
		}
	}
</script>

<style lang='less' scoped>
	.main{
		postion:relative;
		width:100vw;
		height:100vh;
		background-size:cover;
		background-repeat:no-repeat;
		background-position:right top;
		background-image:url('../../assets/background.jpg');
		.captionBox{
			position:absolute;
			width:100%;
			height:400px;
			top:22vh;
			background-color:rgba(0,0,0,0.4);
			.loginBox{
				width:600px;
				margin:0 auto;
				.loginTitle{
					padding-top:25px;
					text-align:center;
					.myIcon{
						float:left;
					}
					.title{
						color:white;
						display:inline-block;
						margin:5px 0;
						font-size:35px;
						font-family:'微软雅黑 Bold', '微软雅黑';
						font-weight:700;
					}
					.little{
						font-size:28px;
					}
				}
				.loginContent{
					#myForm{
						width:300px;
						padding-top:20px;
						margin:0 auto;
						text-align:center;
						.myLabel{
							display:flex;
							align-items:center;
							justify-content: center;
							height:45px;
							margin:25px auto;
							background:white;
							input{
								width:240px;
								height:35px;
								font-size:16px;
								color: #999999;
								margin-left:10px;
								border:none;
								outline:none;
							}
						}
						.myLabel:hover{
							border:2px solid #249af8;
						}
					}
					.submit{
						height:50px;
						width:100%;
					    background-color: rgba(255, 255, 255, 1);
					    border:1px solid rgba(121, 121, 121, 1);
					    border-radius:5px;
					    cursor:pointer;
					}
				}
			}
		}
	}
</style>