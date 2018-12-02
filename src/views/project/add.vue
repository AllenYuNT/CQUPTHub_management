<template>
  <transition name="addEnter">
  <div class="add">
    <p class="projectName">
      项目名称<br />
      <input v-model="projectName" class="addInput" type="text" placeholder="">
    </p>
    <p class="projectPerson">
      项目简介<br />
      <input v-model="projectMan" class="addInput" type="text" placeholder="">
    </p>
   <!--  <router-link :to="{name:'articleMenu',params:{Projectid:projectID}}"> -->
      <button class="next"  @click="nextId()">保存</button>
  </div>
  </transition>
</template>

<script>
  export default {
    name: "add",
    data(){
      return {
        projectName:'',
        projectMan:'',
        projectID:''
      }
    },
    computed:{
      check(){
        if(this.projectName =='' || this.projectMan == ''){
          return true
        }
        else{
          return false;
        }
      }
    },
    methods:{
      hangeData(date){
        var year  = date.getFullYear();
        var mounth = date.getMonth() + 1;
        var day = date.getDate(); 
        var hours = date.getHours();  
        var minute = date.getMinutes();
        var second = date.getSeconds();
        if(hours <10){
          hours = '0' + hours;
        }
        if(minute < 10){
          minute = '0' + minute;
        }
        if(second < 10){
          second = '0' + second;
        }
        return year + '-' + mounth + '-' + day
      },
      nextId(){
        if(this.check){
          alert('请填写完相关信息！')
        }
        else{
          let addData = {
            projectName:this.projectName,
            projectMan:this.projectMan,
            time:this.hangeData(new Date())
          };
          this.$api.sendData('/addProject',addData)
          .then((res)=>{
            this.$router.go(-1);
          })
          // let sta = this.$api.sendData('/addProject');
          // this.projectID = '123';
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  input {
    border:none;
    background-color:transparent;
    outline: none;
  }
  .add {
    font-size:16px;
    color:#333333;
    font-weight:700;
    .next {
      width:70px;
      height:40px;
      background-color:rgba(51,51,51,0.8);
      color:#fff;
      cursor:pointer;
      border:none;
      border-radius:3px;
      outline:none;
    }
    .next:hover {
      box-shadow: 1px 1px 1px rgba(51,51,51,0.6);
    }
  }
  .projectName,.projectPerson {
    margin:30px 10px;
  }
  .addInput {
    margin:10px 0;
    width:30vw;
    padding:3px;
    letter-spacing: 2px;
    transition:0.5s all;
    border-bottom:2px solid rgba(51,51,51,0.3);
  }
  .addInput:focus {
    border-bottom:2px solid rgba(51,51,51,0.8);
  }

  .addEnter-enter-active {
    animation:0.8s rightEnter forwards;
  }
  @keyframes rightEnter {
    0% {
      opacity:0;
      transform:translateX(200px);
    }
    100% {
      opacity:1;
      transform:translateX(0);
    }
  }
  .add-leave-active {
    width:0;
    /*animation:0.8s rightLeave forwards;*/
  }
  @keyframes rightLeave {
    100% {
      transform:translateX(200px);
    }
  }
</style>