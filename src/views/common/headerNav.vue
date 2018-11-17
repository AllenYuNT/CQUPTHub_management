<!-- 顶部导航 -->
<template>
	<div>
		<header class='myHeader'>
			<div class="logo">
				<img src="../../svg/man.svg">
				<span>CQUPTHUB</span>
			</div>
			<div class="right">
				<img src="../../svg/user.svg">
				<span>admin</span>
			</div>
			<router-link to="/" class="right1"><img src="../../svg/hours.svg"></router-link>
			<router-link to='/login' class="right1"><img src="../../svg/exit.svg"></router-link>
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
	  line-height: 50px;
	  .logo {
	  	display: flex;
	  	padding-left: 60px;
	  	color: white;
	  	font-size: 20px;
	  	font-weight: bold;
	  	span {
	  		padding-left: 20px;
	  	}
	  }
	  .right {
	  	margin-left: 890px;
	  	display: flex;
	  	color: white;
	  	font-size: 15px;
	  	padding-right: 30px;
	  	span {
	  		padding-left: 15px;
	  	}
	  }
	  .right1 {
	  	padding: 7px 15px;
	  }
	}
</style>