<template>
	<div class="popup">
		<p>是否确认删除此内容</p>
		<button class="btn" @click="confirm">确认删除</button>
		<button class="btn" @click="cancel">取消</button>
	</div>
</template>

<script>
    export default {
        name:'popup',
        methods:{
        	confirm () {
                this.$emit('clearContent',true);
        	},
        	cancel () {
                this.$emit('clearContent',false);
        	}
        }
    }
</script>

<style lang="less" scoped>
	.popup {
		width: 400px;
		height: 200px;
        background:#fff;
        position: absolute;
        top:50%;
        left: 50%;
        z-index:999999;
        margin-top: -100px;
        margin-left: -270px;
        text-align:center;
        box-sizing:border-box;
        box-shadow:0 0 10px 0 #888;
        border-radius:10px;
        p {
        	margin-top:50px;
        }
        .btn {
        	margin-top: 30px;
        	border:none;
        	outline: none;
            font-size: 14px;
        	height: 30px;
        	padding: 0 14px;
        	line-height:30px;
        	background: #fff;
            box-shadow: 0 0 5px 0 #888;
            cursor: pointer;
            color:#FFCC33;
        }
        button:first-child {
        	margin-right: 40px;
        }
        button:last-child {
        	margin-left: 40px;
        }
	} 
</style>