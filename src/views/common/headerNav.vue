<!-- 顶部导航 -->
<template>
	<div>
		<header class='myHeader'>
			<div class="logo">
				<img src="../../svg/man.svg">
				<span>CQUPThub</span>
			</div>
			<div class="right">
				<div class="ID">
					<img src="../../svg/user.svg">
					<span>admin</span>
				</div>
				<router-link to="/"><img src="../../svg/hours.svg" class="house"></router-link>
				<router-link to='/login'><img src="../../svg/exit.svg"></router-link>
			</div>
		</header>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style lang='less' scoped>
	.myHeader{
		width: 100%;
		height:50px;
	  background-color: rgba(70, 76, 91, 0.9);
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  .logo {
	  	margin-left: 50px;
	  	display: flex;
	  	align-items: center;
	  	color: white;
	  	font-size: 20px;
	  	font-weight: bold;
	  	span {
	  		margin-left: 20px;
	  	}
	  }
	  .right {
	  	display: flex;
	  	align-items: center;
	  	color: white;
	  	font-size: 15px;
	  	margin-right: 20px;
	  	.house {
	  		padding: 0 35px;
	  	}
	  	.ID {
	  		display: flex;
	  		align-items: center;
	  		span {
	  			margin-left: 10px;
	  		}
	  	}
	  }
	}
</style>