<template>
  <transition name="articleShow">
  <div class="articleMenu" v-if = 'finsh'>
    <div class="menu" v-for="(item,menu,index) in menuData">
      <div class="menuHeader">
        {{menuTitle[index]}}
        <router-link :to="{path:'/add',query:{Projectid:projectID,type:menuType[index]}}">
          <button id="add">添加文章</button>
        </router-link>
      </div>
      <div class="detail">
        <ul>
          <span v-for="article in item">
          <router-link :to="{path:'/edit',query:{Projectid:projectID,id:article.id,type:article.type}}">
            <li>
              <span class="title">{{article.title}}</span>
              <span class="text">{{article.EssayTit}}</span>
            </li>
          </router-link>
          </span>
        </ul>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: "articleMenu",
    data(){
      return {
        menuTitle:['架构设计','关键问题','技术要点','过程日记'],
        menuType:['design','keyissue','point','process'],
        projectID:'',
        finsh:false,
      }
    },
    created() {
      this.projectID = this.$route.query.Projectid;
      this.$api.getData(`/api/getTypeProject?Projectid=${this.projectID}`)
      .then((res)=>{
        res = JSON.stringify(res);
        this.menuData = JSON.parse(res);
        this.finsh = true;
      })
    }
  }
</script>

<style lang="less" scoped>
  a {
    color:#755A6E;
  }
  button {
    background: transparent;
    border:none;
    outline: none;
    cursor:pointer;
  }
  #add {
    padding:0 10px;
    height:30px;
    border:1px solid rgba(179, 153, 179, 0.4);
    border-radius:5px;
    background-color:#fff;
    color:rgba(0, 0, 0, 0.6);
    position:absolute;
    right:10%;
    top:20%;
  }
  #add:hover {
    color:#515A6E;
    box-shadow: 1px 1px 4px rgba(179,153,179,0.8);
  }
  .articleMenu {
    padding-bottom:100px;
    .menuHeader {
      font-size:16px;
      font-weight:700;
      padding:20px 0 10px 20px;
      position:relative;
    }
    .detail {
      li {
        font-size:15px;
        background-color:#fff;
        padding:10px 0;
        margin-bottom:5px;
        cursor:pointer;
        >span {
          display:inline-block;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
        .title {
          width:10%;
          margin-right:4%;
        }
        .text{
          width:40%;
        }
      }
      li:hover {
        background-color: rgba(239, 239, 231, 0.1);
      }
    }
  }
  .articleShow-enter-active {
    animation:0.8s show forwards;
  }
  @keyframes show {
    0% {
      opacity:0;
      transform:translateY(50px);
    }
    100%{
      opacity:1;
      transform:translateY(0);
    }
  }
</style>