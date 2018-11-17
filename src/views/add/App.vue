<!-- 编辑文章/项目 -->
<template>
	<div class="edit">
		<div class="titleEdit">
			<div class="title">
				<input class="inp" ref="input" type="text" name="" v-model="txt">
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
	            result:'', 
	            editorContent: '',
	            txt:'',
	            content:'',
	            editio:'',
	            projectId:'',
	            projectType:'',
	            type:'',
	            id:'',
	            title:'', 
	            time:'',
	            url:'',
	            result:'',
	            index:1
	        }
        },
        methods: {
	        changeFocus () {
	            Vue.nextTick(()=>{
	            	this.$refs.input.focus();
	            })
	        },
	        judgeApi () {
                if(this.$route.params.Projectid && this.$route.params.type) {
                	//添加项目文章页的api
                	this.url = `/addProjectPage?Projectid=${this.$route.params.Projectid}&&type=${this.$route.params.type}`;
                	this.index = 1;
                } else {
                	//添加文章的api
                	this.url = `/addCommonPage`
                	this.index = 2;
                }
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
			    this.editor.txt.html(`<p>${this.content}</p>`);
	        },
	        returnProject () {
	        	//返回项目页面
	        	this.$router.push();
	        },
	        getTime () {
                let data = new Date();
                let year = data.getFullYear();
                let month = data.getMonth() + 1;
                let day = data.getDate();
                this.time= `${year}/${month}/${day}`;
	        },
	        getDatas () {
	        	//得到路由传参文章类型
                this.projectType = this.$route.params.projectType;
	        },
            uploadPage () {
            	if(this.index == 1) {
            		this.result = this.$api.sendData(this.url,{
	            		//添加项目文章页时向后台传递的参数
	            		type:this.type,
	            		title:this.txt,
	            		content:this.editorContent,
	            		time:this.time
	            	})
	            	this.checkStatic();
	            	this.url = [];
            	} else if(this.index == 2) {
            		this.result = this.$api.sendData(this.url,{
	            		//添加文章时向后台传递的参数
	            		title:this.txt,
	            		content:this.editorContent,
	            		time:this.time
	            	})
	            	this.checkStatic();
	            	this.url = [];
            	}
            },
            checkStatic () {
            	//判断提交的状态
                if(this.result.static == 1 ) {
                	if(this.index == 1) {
                		//返回项目主页
                        this.$router.push({path:'project'});
                	} else if(this.index == 2){
                		//返回文章页
                		this.$router.push({path:'/page'});
                	}
                    
                } else if(this.result.static == 0) {
                    alert('提交失败');
                }
            }
        },
        mounted() {
      	    //进入页面后光标指向
            this.changeFocus();
            //判断请求的后端api
            this.judgeApi();
            //获取编辑时间
            this.getTime();
            //实例化编辑器
            this.initEditor();
    }
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
                    text-align:center;
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
        	}
        }
        .btn {
        	position: absolute;
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
        }
    }
</style>