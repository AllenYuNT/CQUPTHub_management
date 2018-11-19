<!-- 分页 -->
<template>
	<div class='pagination'>
		<main class="main-box">
			<ul class="pagememb">
				<li @click="cut"><</li>
				<li v-for="index in pages" @click="goto(index)" class="pagelist" :class="{'active':current == index}" :key="index">{{index}}</li>
				<li @click='add'>></li>

			</ul>
		</main>
	</div>
</template>

<script type="text/javascript">
	export default{
		data: function(){
			return {
				current: 1,
				showItem: 8,
				allpage: 30
			}
		},
		computed:{
			pages:function(){
				var pag = [];
				if(this.current <= this.showItem){
					for(let i = 0;i<this.showItem;i++){
						pag[i] = i+1;
					}
				}
				else{
					var middle = Math.floor(this.current - this.showItem/2);
					if(middle  > (this.allpage - this.showItem)){
						middle = this.allpage - this.showItem + 1;
					}
					for(let i = 0;i<this.showItem;i++){
						pag[i] = middle;
						middle++;
					}
				}//当展示的current大于showItem时
				return pag;
			}
		},
		methods: {
			cut:function(){
				if(this.current == 1) return;
				this.current  --;
			},
			add:function(){

				if(this.current == this.allpage) return
				this.current ++;
			},
			goto: function(index){
				if(index == this.current) return;
				this.current = index;
			}
		}
	}
</script>

<style lang='less'>
.showder(){
box-shadow:0.5px 0.5px 0.5px #d5d5d5,
			0.5px -0.5px 0.5px #d5d5d5,
			-0.5px 0.5px 0.5px #d5d5d5,
			-0.5px -0.5px 0.5px #d5d5d5;
}
.pagination{
	height:80px;
	flex-shrink:0;
	background-color: #f2f2f2;
}
	.main-box{
		margin-left: 764px;
		margin-top: 24px;
		font-size: 13px;
		.pagememb{
			li{
				float: left;
				min-width: 20px;
				min-height: 20px;
				line-height: 20px;
				text-align: center;
				.showder();
				background-color: #ffffff;
				cursor: pointer;
				margin: 0 3px;
				// margin-left: 5px;
				// padding-left: 5px;
				// padding-right: 5px;
			}
			.pagelist.active{
				background-color:lightskyblue;
			}
		}
	}
</style>
