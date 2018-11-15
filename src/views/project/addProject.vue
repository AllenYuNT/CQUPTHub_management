<template>
  <transition name="add">
  <div class="addProject">
    <div class="main">
      <router-link to="/project">
      <sicon class="arrow" name="jiantouL2" scale="4"></sicon>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: "addProject",
  }
</script>

<style lang="less" scoped>
  input {
    border:none;
    background-color:transparent;
    outline: none;
  }
  .arrow {
    cursor: pointer;
  }
  .addProject {
    margin-left:140px;
    .main {
      margin-left:10px;
      padding:10px 10px 0 10px;
      background-color:#F2F2F2;
      min-height:calc(100vh - 50px);
    }
  }
  .add-enter-active {
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

</style>