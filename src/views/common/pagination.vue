<!-- 分页 -->
<template>
	<div class='pagination'>
		<main class="main-box">
			<ul class="pagememb">
				<li @click="current-- && goto(current--)"><a>&lsaquo;&lsaquo;</a></li>
				<li v-for="index in pages" @click="goto(index)" class="pagelist" :class="{'active':current == index}" :key="index"><a>{{index}} </a></li>
				<li><a href="#">...</a></li>
				<li class="pagelist" @click="goto(allpage)"><a href="#">{{ allpage}} </a></li>
				<li @click=" goto(++current)"><a>&rsaquo;&rsaquo;</a></li>
				<li class="non">跳转</li>
				<li class="pagelist"> <input type="" name=""></li>
				<li class="non">页</li>
				<li class="pagelist">确定</li>
			</ul>
		</main>
	</div>
</template>

<script type="text/javascript">
	export default{
		data: function(){
			return {
				current: 1,
				showItem: 4,
				allpage: 13
			}
		},
		computed:{
			pages: function(){
				var pag = [];
				if(this.current < this.showItem){
					var i = Math.min(this.showItem,this.allpage);
					while(i){
						pag.unshift(i--);
					}
				}else{
					var middle = this.current - Math.floor(this.showItem/2),
					i = this.showItem;
					if(middle > (this.allpage - this.showItem)){
						middle = (this.allpage - this.showItem) + 1;
					}
					while(i--){
						pag.push(middle++);
					}
				}
				return pag;
			}
		},
		methods: {
			goto: function(index){
				console.log(index);
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
				a{
					color: #333333;
				}
				input{
					width: 20px;
				}
				.active{
					background-color: #f2f2f2;
					color: #ffcfa8;
				}

			}
			.non{
				background-color: #f2f2f2;
				box-shadow: none;
			}
		}
		.pagelist{
			// float: left;
		}
		// .goto{
		// 	margin-left: 35px;
		// }
		// .active{
		// 	background-color:  
		// 	color: red;
		// }
		// .pagememb,.goto{
		// 	float: left;
		// }
	}
</style>