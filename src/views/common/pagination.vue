<template>
	<ul class='page-ul'>
		<li class='page-list'
			v-on:click = "$emit('changePage',1)"
		>
			&lt;
		</li>
		<li class='page-list' v-for ="index in pages" 
			v-bind:class = "{'select':index == current}"
			v-on:click = "$emit('goOther',index )"
			v-bind:key = 'index'>
			{{index}}
		</li>
	
		<li class='page-list'
			v-on:click = "$emit('changePage',2)"
		> &gt;
		</li>

	</ul>
</template>
<script type="text/javascript">
export default{
	props:['allpage','showItem','current'],
	data:function(){
		return {

							
		}
	},
	computed:{
		pages:function(){
			var pag = [];

			if(this.allpage <= this.showItem){
				for(let i = 0;i<this.allpage;i++){
					pag[i] = i+1;
				}
			} //一般来说分6页 当allpage小于的时候的处理
			else if(this.current <= this.showItem){
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
	methods:{
		goto:function(index){
			if(index == this.current){
				return
			}
			this.current = index;
			console.log(this.current);
			//do something
		}
	},
}
</script>

<style lang='less' scoped>
	.page-ul{
		display: flex;
		align-items: center;
		justify-content:flex-end;
		height:50px;
	}
	.page-list{
		display:flex;
		align-items:center;
		justify-content: center;
		width:50px;
		padding:10px;
		background-color:#f6f9fa;
		color:black;
		cursor:pointer;
		user-select:none;
	}
	.page-list.select{
		background-color:#00a1d6;
		color:white;
	}
</style>