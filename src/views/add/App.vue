<!-- 编辑文章/项目 -->
<template>
	<div class="edit">
		<div class="titleEdit">
			<div class="title">
				<input placeholder = '请输入文章标题' class="inp" ref="input" type="text" name="" v-model="txt">
			</div>
			<p class="line"></p>
		</div>
		<div class="titleEdit">
			<div class="title">
				<input placeholder = '请输入文章简介' class="inp" type="text" name="" v-model="jianjie">
			</div>
			<p class="line"></p>
		</div>
		<div class="pageEdit">
			<div id="editorElem" class="editorElem"></div>
            <button class="btn" @click="uploadPage">上传</button>
		</div>
		<span class="jiantou" @click="returnProject">
			<sicon name="jiantouL2" scale="4"></sicon>
		</span>
	</div>
</template>

<script>
	import Vue from 'vue'
	import E from 'wangeditor'
    export default {
        name: 'add',
        data () {
	        return {
	            editorContent: '',
	            txt:'',
	            jianjie:'',
	            content:'',
	            editio:'',
	            projectid:'',
	            projectType:'',
	            type:'',
	            id:'',
	            title:'', 
	            time:'',
	            url:'',
	        }
        },
        created(){
        	this.projectid = this.$route.query.Projectid;
        	this.type = this.$route.query.type;
        	this.url = `/addProjectPage`;
        },
    	mounted() {
      	    //进入页面后光标指向
            this.changeFocus();
            //实例化编辑器
            this.initEditor();
    	},
        methods: {
	        changeFocus () {
	            Vue.nextTick(()=>{
	            	this.$refs.input.focus();
	            })
	        },
	        initEditor () {
		        this.editor = new E('#editorElem')
		        //配置菜单
		        this.editor.customConfig.menus = [
			    
				    'undo',  // 撤销    'head',  // 标题
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
				// this.editor.config.uploadImgUrl = '/upload';
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
			    this.editor.txt.html(`${this.content}`);
	        },
	        returnProject () {
	        	//返回项目页面
	        	this.$router.go(-1);
	        },
	        getTime () {
                let data = new Date();
                let year = data.getFullYear();
                let month = data.getMonth() + 1;
                let day = data.getDate();
                this.time= `${year}-${month}-${day}`;
	        },
            uploadPage () {
            	this.getTime();

	    		this.$api.sendData(`/api${this.url}`,{
	    			projectid:this.projectid,
	    			pageTit:this.jianjie,
	        		type:this.type,
	        		title:this.txt,
	        		content:this.editorContent,
	        		time:this.time
	        	})
	        	.then((res)=>{
	        		if(res.static == 1){
	        			alert('上传成功');
	        			
	        		}
	        		else{
	        			alert('上传失败');

	        		}
	        		this.$router.go(-1);
	        	})
	        	.catch((res)=>{
	        		alert('出错')
	        	})
            },
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
        	padding: 0 50px;
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
        .jiantou {
        	position: absolute;
        	top:20px;
        	left: 50px;
        	cursor:pointer;
        }
    }
</style>