<template>
  <transition name="addEnter">
  <div class="add">
    <p class="projectName">
      项目名称<br />
      <input v-model="projectName" class="addInput" type="text" placeholder="">
    </p>
    <p class="projectPerson">
      项目负责人<br />
      <input v-model="projectMan" class="addInput" type="text" placeholder="">
    </p>
    <router-link :to="{name:'articleMenu',params:{Projectid:projectID}}">
      <button class="next" @click="nextId()">保存</button>
    </router-link>
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
    methods:{
      nextId(){
        let dateX = new Date();
        let year = dateX.getFullYear();
        let month = dateX.getMonth();
        let day = dateX.getDate();
        let addTime = year+'/'+month+'/'+day;

        let addData = {
          projectName:this.projectName,
          projectMan:this.projectMan,
          time:addTime
        };
        // let sta = this.$api.sendData('/addProject');
        this.projectID = '123';
      }
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