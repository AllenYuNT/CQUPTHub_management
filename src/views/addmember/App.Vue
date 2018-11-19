<template>
	<div class='member'>
		<div class="bgmenber">
			<router-link to = '/member'> 
				<sicon name="jiantouL2" scale="3" id="back"></sicon>	
			</router-link>
			<div class="mainInform">
				<span class="midMark">基础信息</span>
				<div v-for="item in basic" class="basicInform">
					{{item.mark}}:&nbsp;&nbsp;&nbsp;<input type="text" :placeholder="item.placeholder">
				</div>
				<hr>
				<span class="midMark">个人技能</span> 
				<div class="skillInform">
					<div class="skillMark">语言:
						<ul class="skillInput">
							<li v-for="item1 in language">
								<input type="text" :placeholder="item1.placeholder">
							</li>
							<div class="add" @click="adding1">+</div>
						</ul>
					</div>
					<div class="skillMark">软件:
						<ul class="skillInput">
							<li v-for="item2 in soft">
								<input type="text" :placeholder="item2.placeholder">
							</li>
							<div class="add" @click="adding2">+</div>
						</ul>
					</div>
				</div>
				<hr>
				<span class="midMark">个人经历</span>
				<div>
					<textarea placeholder="格式：2018/11/8
		叙述事的地方 "></textarea>
				</div>
			</div>
			<div class="photo">照片</div>
			<router-link to = '/member'> 
				<div class="saving">保存修改</div>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">

	export default{
		data(){
			return{
				basic:[
					{
						mark:'姓名',
						placeholder:' '
					},
					{
						mark:'学院',
						placeholder:' '
					},
					{
						mark:'小组',
						placeholder:' '
					},
				],
				language:[
					{placeholder:' '},
				],
				soft:[
					{placeholder:' '},
				],
				// els: {placeholder:' '}
			}
		},
		methods:{
			adding1: function(){
				let els = {placeholder:' '};
				this.language.push(els);
			},
			adding2: function(){
				let elss = {placeholder:' '};
				this.soft.push(elss);
			}
		},
	}
</script>

<style lang='less' scoped>
	.member{
		margin-left:140px;
		width: calc(100vw - 155px);
		height: calc(100vh - 72px);
		background-color: #f2f2f2;
	}
	.bgmenber{
		border-top: 20px solid #f2f2f2;
		margin-left: 13px;
		background-color: #ffffff;
		min-width: calc(100vw - 155px);
		height: calc(100vh - 72px);
	}
	#back{
		cursor: pointer;
		margin-top: 34px;
		margin-left: 72px;
	}
	#back,.mainInform,.photo,.saving{
		float: left;
	}
	.mainInform{
		margin-left: 38px;
		width: 438px;
		padding-top: 41px;
		hr{
			opacity: 0.5;
		}
		.midMark{
			color: #333333;
			font-size: 18px;
			margin-left: 48px;
			font-weight: bold;
			line-height: 43px;
		}
		.basicInform{
			margin-left: 48px;
			height: 40px;
			font-size: 15px;
			input{
				text-indent: 0.5em;
				 box-shadow:0.5px 0.5px 0.5px #d5d5d5,
							0.5px -0.5px 0.5px #d5d5d5,
							-0.5px 0.5px 0.5px #d5d5d5,
							-0.5px -0.5px 0.5px #d5d5d5;
			}
		}
		.skillInform{
			margin-left: 48px;
			font-size: 15px;
			width: 321px;
			.skillInput{
				margin-top: -18px;
				margin-left: 48px;
				width: 238px;
				min-height: 100px;
				input{
					margin-bottom: 9px;
					box-shadow:0.5px 0.5px 0.5px #d5d5d5,
							0.5px -0.5px 0.5px #d5d5d5,
							-0.5px 0.5px 0.5px #d5d5d5,
							-0.5px -0.5px 0.5px #d5d5d5;
				}
			}
		}
		textarea{
			margin-left: 91px;
			height: 105px;
			width: 236px;
			box-shadow:0.5px 0.5px 0.5px #d5d5d5,
					0.5px -0.5px 0.5px #d5d5d5,
					-0.5px 0.5px 0.5px #d5d5d5,
					-0.5px -0.5px 0.5px #d5d5d5;
		}
		.add{
			cursor: pointer;
			font-size: 18px;
			font-weight: bold;
			margin-top: -30px;
			margin-bottom: 20px;
			margin-left: 180px;
		}
	}
	.photo{
		cursor: pointer;
		margin-top: 85px;
		margin-left: 95px;
		width: 82px;
		height: 103px;
		line-height: 103px;
		text-align: center;
		border: 0.5px solid #797979;
		background-color: #f2f2f2;
	}
	.saving{
		cursor: pointer;
		margin-top: 607px;
		width: 103px;
		height: 26px;
		line-height: 26px;
		text-align: center;
		color: #ffcc33;
		font-size:  12px;
		box-shadow:0.5px 0.5px 0.5px #d5d5d5,
					0.5px -0.5px 0.5px #d5d5d5,
					-0.5px 0.5px 0.5px #d5d5d5,
					-0.5px -0.5px 0.5px #d5d5d5;
	}
	input::-webkit-input-placeholder {
		color: #d5d5d5;
	}
	input:-moz-placeholder {
		color: #d5d5d5;
	}
	input::-moz-placeholder {
		color: #d5d5d5;
	}
	input:-ms-input-placeholder {
		color: #d5d5d5;
	}
	textarea::-webkit-input-placeholder {
		color: #d5d5d5;
	}
	textarea:-moz-placeholder {
		color: #d5d5d5;
	}
	textarea::-moz-placeholder {
		color: #d5d5d5;
	}
	textarea:-ms-input-placeholder {
		color: #d5d5d5;
	}
</style>