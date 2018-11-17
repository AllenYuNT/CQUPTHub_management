<template>
	<div class='last'>
		<main>{{ this.lastTime }}</main>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'lasylogin',
		data() {
			return {
				thisTime:'',
                lastTime:'',
                result:{},
                Ip:''
			}
		},
		methods:{
			getLastTime () {
				this.Ip = this.result.Ip;
				if(this.getItem(this.Ip)) {
					this.lastTime = localStorage.getItem(this.Ip);
				} else {
					alert('您是第一次登录');
				}
			},
			setThisTime () {
				let data = new Date();
				let year = data.getFullYear();
				let month = data.getMonth();
				let day = data.getDate();
				this.thisTime = `${year}/${month}/${day}`;
                localStorage.setItem(this.Ip,this.thisTime);
			} 
		},
		created() {
			//向后台请求得到登录Ip
            // this.result = this.$api.getData();
		},
		mounted() {
			//读取上一次的时间
			this.getLastTime();
			//保存到本地localStorage
			this.setThisTime();
		}
	}
</script>

<style lang='less' scoped>
	.last{
		height:80px;
		flex-shrink:0;
		background-color:#a29999;
	}
</style>