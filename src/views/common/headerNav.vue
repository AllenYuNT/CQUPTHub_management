<!-- 顶部导航 -->
<template>
	<div>
		<header class='myHeader'>

			<div class="logo">
				<sicon name="man" scale="4"></sicon>
				<span>CQUPTHUB</span>
			</div>
			<div class="right">
				<sicon name="user" scale="4"></sicon>
				<span>admin</span>
				<router-link to="/" class="hoursIcon"><sicon name="hours" scale="3"></sicon>
				</router-link>
				<router-link to='/login' class="exitIcon"><sicon name="exit" scale="3"></sicon>
				</router-link>
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
		line-height: 50px;
	  	background-color: rgb(70, 76, 91);
	  	z-index:99;
	  	position:relative;
	  	display: flex;
	  	align-items:center;
  	    justify-content: space-between;
	  .logo {
	  	display: flex;
	  	align-items:center;
	  	padding-left: 60px;
	  	color: white;
	  	font-size: 20px;
	  	font-weight: bold;
	  	span {
	  		padding-left: 20px;
	  	}
	  }
	  .right {
	  	display:flex;
	  	align-items:center;
	  	color: white;
	  	font-size: 15px;
	  	padding-right: 30px;
	  	span {
	  		padding:0 15px;
	  	}
	  	a{
	  		display:flex;
	  		align-items:center;
	  		margin:0 5px;
	  		padding:0 10px;
	  	}
	  	.hoursIcon{
	  		border-right:1px solid black;
	  		border-left:1px solid black;
	  	}
	  }
	}
</style>