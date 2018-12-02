<template>
	<div class='project'>
		<main class="main">
			<div class='button-box'>
				<p>
					文章标题：
					<input v-model="pageName" type="text" placeholder="可不填">
				</p>
				<p>
					上传时间：
					<select v-model="pageTime">
						<option value="昨天">昨天</option>
						<option value="最近3天">最近3天</option>
						<option value="一周内">一周内</option>
						<option value="一个月内">一个月内</option>
						<option value="一个月之前">一个月之前</option>
					</select>
				</p>
				<button class="projectSearch" @click="search()">查询</button>
			</div>
			<div class='project-box'>
				<header class='myheader'>
					<p class="ProjectDetail">文章标题</p>
					<p class="ProjectDetail">部分正文</p>
					<div class='myheader-add'>
					   <Select  class='addDrop' v-model="projectid">
					      	<Option v-for="item in projectAll" :value="item.Projectid" :key='item.Projectid'>{{item.projectName}}</Option>
					    </Select>
					   <Select  class='addDrop' v-model="projectType">
							<Option  v-for="(item,index) in pageType" :value="name[index]" :key='item'>{{item}}</Option>
					    </Select>
						<button class="addProject" @click='addPage'>添加文章</button>
					</div>
					
				</header>
				<div class='content-box' v-if='finsh'>
					<!--<transition name="listBox">-->
					<div class='list listBox' v-for="(item,index) in pagelist">
						<header class='header-list'>
							<router-link :to="{path:'/edit',query:{Projectid:item.Projectid,id:item.id,type:item.type}}">
								<li class="projectLi">
									<p class="ProjectDetail">{{item.title}}</p>
									<p class="ProjectDetail">{{item.jianjie}}</p>
								</li>
							</router-link>
						</header>
						<footer class='footer-list'></footer>
					</div>
					<!--</transition>-->
				</div>
			</div>
			<pagination class='mypagin' @goOther='goOther' @changePage='changePage'  :showItem='showItem' :allpage='allItem' :current ='current'></pagination>
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
			pagelist:[],
  			projectAll:[],
  			pageType:['架构设计','关键问题','技术要点','过程日记'],
  			name:['design','keyissue','point','process'],
	        pageName:'',
	        pageTime:'',
	        projectid:'',
	        projectType:'',
	        finsh:false,
	        current:1,//当前页
	        allItem:'',//所有页
	        showItem:6,//默认展示6个
		}
	},
	created(){
		this.getData();
		this.getProjectAll();
	},
	methods:{
	  	getData(){
		  	this.$api.getData("/getAllPage?title=&time=&page=1")
		  	.then((res)=>{
		  		this.allItem = res.total; //总共多少页
		  		res.pageAll.map((item,index)=>{
		  			this.pagelist[index] = {};
		  			this.pagelist[index].id = item.id;
		  			this.pagelist[index].jianjie = item.jianjie;
		  			this.pagelist[index].title = item.title;
		  			this.pagelist[index].type = item.type;
		  			this.pagelist[index].Projectid = item.Projectid;
		  			this.finsh = true;
		  		})
		  		
		  	})
		  	.catch((err)=>{
		  		console.log(err)
		  	})
		},
		getDetail(page,pageName,pageTime){
			this.finsh = false;
			this.pagelist = [];
			this.$api.getData('/getAllPage?title=&time=&page=' + page)

		  	.then((res)=>{
		  		this.allItem = res.total; //总共多少页
		  		res.pageAll.map((item,index)=>{
		  			this.pagelist[index] = {};
		  			this.pagelist[index].id = item.id;
		  			this.pagelist[index].jianjie = item.jianjie;
		  			this.pagelist[index].title = item.title;
		  			this.pagelist[index].type = item.type;
		  			this.pagelist[index].Projectid = item.Projectid;
		  			this.finsh = true;
		  		})
		  		
		  	})
		  	.catch((err)=>{
		  		console.log(err)
		  	})
		},
		getProjectAll(){
			this.$api.getData('/getAllProject')
			.then((res)=>{
				this.projectAll  = res.list
			})
		},
		addPage(){
			if(this.projectType == '' || this.projectid == ''){
				alert('请选择所属项目以及文章类型')
			}
			else{
				this.$router.push(`/add?Projectid=${this.projectid}&type=${this.projectType}`)
			}
		},
		goOther(page){
			this.current = page;
			this.getDetail(page);
		},
		changePage(type){
			if(type == 2 && this.current < this.allItem){
				this.current ++ ;
				this.getDetail(this.current);
			}
			else if(type == 1 && this.current >1){
				this.current -- ;
				this.getDetail(this.current);
			}
			else{
				return
			}
		},
	},
	// methods:{
	//   	search(){
	//     	let url = '/getProject?name='+this.projectName+'&man='+this.projectMan+'&time='+this.projectTime;
	//     // this.projectList = this.$api.getData(url);
	// 	}
	// },
	components:{
		pagination,
		lastlogin,
	},	
}

</script>

<style lang='less' scoped>
	a {
		color:#755A6E;
	}
	input,select {
		outline:none;
	}
	button {
		background: transparent;
		border:none;
		outline: none;
		cursor:pointer;
	}
	.project{
		margin-left:140px;
	}
	.main{
		padding:0 10px 0 10px;
		height:calc(100vh - 50px);
		display:flex;
		flex-direction:column;
		.button-box{
			background-color:#f2f2f2;
			flex-shrink:0;
			height:50px;
			width:100%;
			margin-bottom:10px;
			display:flex;
			align-items: center;
			padding-left:25px;
			>p {
				font-size: 15px;
				margin-right: 45px;
				padding: 10px 0;
				input {
					width: 116px;
					padding: 2px 8px;
					font-size: 14px;
					color: #B399B3;
					border: 1px solid rgba(179, 153, 179, 0.4);
					box-shadow: 0 0 2px rgba(179, 153, 179, 0.4);
				}
			}
			.projectSearch {
				width:100px;
				height:30px;
				border:1px solid rgba(179,153,179,0.4);
				box-shadow: 0 0 2px rgba(179,153,179,0.4);
				font-size:16px;
				border-radius:5px;
				background-color:#fff;
				color:rgba(0,0,0,0.6);
				margin-left:200px;
			}
			.projectSearch:hover {
				color:#515A6E;
				box-shadow: 1px 1px 4px rgba(179,153,179,0.8);
			}
		}
		.project-box{
			padding:10px;
			width:100%;
			flex:1;
			background-color:#f1f1f1;
			/*background-color:#f2f2f2;*/
			.myheader{
				height:50px;
				/*background-color:rgba(0,0,0,0.5);*/
				text-align: center;
				display:grid;
				grid-template-columns: 15% 40% 40%;  
				>p{
					padding:20px 0 12px 0;
					font-weight:bold;
					font-size:16px;
				}
				.addProject {
					width:80px;
					height:30px;
					border:1px solid rgba(179, 153, 179, 0.4);
					border-radius:5px;
					display: inline;
					font-size:16px;
					margin-left:5px;
					background-color:#fff;
					color:rgba(0, 0, 0, 0.6);
				}
				.addProject:hover {
					color:#515A6E;
					box-shadow: 1px 1px 4px rgba(179,153,179,0.8);
				}
				.myheader-add{
					display:flex;
					align-items:center;
					.addDrop{
						width:120px;
						margin:0 5px;
					}
				}
			}
			.content-box{
				/*background-color:rgba(186, 186, 186, 0.8);*/
				height:calc(100% - 50px);
				.projectLi {
					display:grid;
					grid-template-columns: 15% 40% 40%;  
					background-color:#fff;
					cursor:pointer;
					height:100%;
					transition:0.2s all;
				}
				.projectLi:hover {
					background-color: rgba(239, 239, 231, 0.1);
				}
				.ProjectDetail {
					text-align: center;
					font-size:15px;
					/*padding:10px 0;*/
					height:100%;
					box-sizing:border-box;
					line-height:2.2;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.list{
					height:12.5%;
					display:flex;
					flex-direction:column;
					.header-list{
						flex:1;
					}
					.footer-list{
						height:5px;
						flex-shrink:0;
						/*background-color:grey;*/
					}
				}
			}
		}
	}
	.listBox {
		animation:0.8s show forwards;
	}
	@keyframes show {
		0% {
			opacity:0;
			transform:translateY(50px);
		}
		100% {
			opacity:1;
			transform:translateY(0);
		}
	}
</style>