<!-- 编辑文章/项目 -->
<template>
	<div class="edit" >
		<div class="titleEdit">
			<div class="title">
				<input class="inp" ref="input" type="text" name="" v-model="txt"> <span class="delete" @click="deleteTxt(1)"><sicon name="delete" scale="2"></sicon></span>
			</div>
			<p class="line"></p>
		</div>
		<div class="titleEdit">
			<div class="title">
				<input class="inp" ref="input1" type="text" name="" v-model="jianjie"> <span class="delete" @click="deleteTxt(2)"><sicon name="delete" scale="2"></sicon></span>
			</div>
			<p class="line"></p>
		</div>
		<div class="pageEdit">
			<div id="editorElem" class="editorElem"></div>
            <button class="btn btn1" @click="showTips">删除</button>
            <button class="btn" @click="uploadPage">保存修改</button>
		</div>
		<span class="jiantou" @click="returnProject">
			<sicon name="jiantouL2" scale="4"></sicon>
		</span>
		<popup v-show="show" :show="show" @clearContent="clearContents"></popup>
		<b-ground v-show="show" :show="show"></b-ground>
	</div>
</template>

<script>
	import Popup from './components/popup.vue'
	import bGround from './components/bground.vue'
	import Vue from 'vue'
	import E from 'wangeditor'
    export default {
        name: 'edit',
        components:{
        	Popup,
        	bGround
        },
        data () {
	        return {
	            result:'', 
	            show:false,
                clearS:false,
	            editorContent: '',
	            txt:'',
	            jianjie:'',
	            content:'',
	            editio:'',
	            projectId:'',
	            type:'',
	            id:'',
	            title:'', 
	            time:'',
	            url:[],
	        }
        },
        created(){
        	this.pageId = this.$route.query.id;
        	this.type = this.$route.query.type;
        	this.projectid = this.$route.query.Projectid;
        	this.url = '/addProjectPage';
        },
        mounted(){
        	this.initEditor();
        	this.getData();
        },
        methods: {
        	getData(){
        		this.$api.getData(`/getProjectPage?id=${this.pageId}`)
        		.then((res)=>{
        			this.txt = res.title;
        			this.jianjie = res.EssayTit;
        			this.content = res.content;
					this.editor.txt.html(`${this.content}`);
					this.changeFocus();
        		})
        	},
	        changeFocus () {
	            Vue.nextTick(()=>{
	            	this.$refs.input.focus();
	            })
	        },
	        initEditor () {
		        this.editor = new E('#editorElem')
		        //配置菜单
		        this.editor.customConfig.menus = [
			        'head',  // 标题
				    'bold',  // 粗体
				    'fontSize',  // 字号
				    'fontName',  // 字体
				    'italic',  // 斜体
				    'underline',  // 下划线
				    'strikeThrough',  // 删除线
				    'foreColor',  // 文字颜色
				    'backColor',  // 背景颜色
				    'link',  // 插入链接
				    'list',  // 列表
				    'justify',  // 对齐方式
				    'quote',  // 引用
				    'emoticon',  // 表情
				    'image',  // 插入图片
				    'table',  // 表格
				    'video',  // 插入视频
				    'code',  // 插入代码
				    'undo',  // 撤销
				    'redo'  // 重复
		        ] 
		        //获取内容
		        this.editor.customConfig.onchange = (html) => {
		            this.editorContent = html
		        }
		        //设置内容
		        // editor.txt.html(this.content);
		        // 开启debug模式
		        this.editor.customConfig.debug = true
		       	// 上传图片到服务器
		       	// base 64 存储图片
		       	this.editor.customConfig.uploadImgShowBase64 = true 
		       	//后端接受上传文件的参数名称
				this.editor.customConfig.uploadFileName = 'myFile'; 
				//设置上传文件的服务器路径
				// this.editor.customConfig.uploadImgServer = '/upload'
				//设置自定义参数
				// this.editor.config.uploadParams = {

				// }
				// 将图片大小限制为 5M 
				this.editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024;  
				// 设置超时时间
				this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000
				//自定义上传图片事件
				this.editor.customConfig.uploadImgHooks = {
					success : (xhr, editor, result) => {
						console.log("上传成功");
					},
					fail : (xhr, editor, result) => {
						console.log("上传失败,原因是"+result);
					},
					error : (xhr, editor) => {
						console.log("上传出错");
					},
					timeout : (xhr, editor) => {
						console.log("上传超时");
					}
				}
				//隐藏网络图片上传
				this.editor.customConfig.showLinkImg = false;
		        //创建编辑器   
			    this.editor.create()
			    //初始化编辑器的内容
		
	        },
	        deleteTxt (type) {
	         	if(type == 1){
	         		this.txt = ''
	         	}
	         	else{
	         		this.jianjie = ''
	         	}
	        },
	        returnProject () {
	        	if(this.index == 1) {
	        		//返回项目页面
	        	    this.$router.push({path:'/project'});
	        	} else if(this.index == 2) {
	        		//返回文章页面
	        		this.$router.push({path:'/page'});
	        	}
	        },
	        showTips () {
	        	// 删除编辑的内容
	        	this.show = true;
	        },
            deleteContent (res) {
                if(res) {
	        		this.editor.txt.clear();
	        	}else {
	        		return ;
	        	}
            },
	        getTime () {
                let data = new Date();
                let year = data.getFullYear();
                let month = data.getMonth() + 1;
                let day = data.getDate();
                this.time = `${year}-${month}-${day}`;
	        },

            uploadPage () {
            	this.getTime();
	    		this.$api.sendData('/addProjectPage',{
	    			pageTit:this.jianjie, 
	    			id:this.pageId,
	        		title:this.txt,
	        		content:this.editorContent,
	        		time:this.time
	        	})
	        	.then((res)=>{
	        		if(res.static == 1){
	        			alert('编辑成功');
	        			this.$router.go(0);
	        		}
	        		else{
	        			alert('编辑失败')
	        		}
	        	})
	        	// this.checkStatic();
            },
	        clearContents (res) {
	        	this.show = false;
	        	this.deleteContent(res);
	        }
        },
}
</script>

<style lang="less" scoped>
    .edit {
    	position:relative;
    	margin: 0 0 0 140px;
        width: calc(100%-140px);
        height: calc(100%-50px);
        overflow: hidden;
        padding-bottom: 100px;
        .titleEdit {
        	margin-top: 50px;
        	text-align:center;
        	.title {
                .inp {
                    width: 350px;
                    padding: 0 40px;
                    text-align:left;
                	outline: none;
                	border:none;
                	background:transparent;
                }
                .delete {
		        	cursor: pointer;
		        	margin-left:-40px;
		        }
        	}
        	.line {
        		margin:7px auto;
        		width: 340px;
        		height: 3px;
        		box-shadow: 0 0 5px 0 #888;
        	}
        }
        .pageEdit {
        	margin: 30px auto; 
        	width: 1070px;
        	.editorElem {
        		text-align:left;
        		position: relative;
        		z-index: 1;
        	}
        }
        .btn {
        	position: absolute;
        	z-index:99;
        	font-size: 14px;
        	height: 30px;
        	padding: 0 14px;
        	line-height:30px;
        	border:none;
        	outline: none;
        	background: #fff;
            box-shadow: 0 0 5px 0 #888;
            cursor: pointer;
            color:#FFCC33;
            top:470px;
            right: 235px;
        }
        .btn1 {
        	right:350px;
        }
        .jiantou {
        	position: absolute;
        	top:20px;
        	left: 50px;
        }
    }
</style>