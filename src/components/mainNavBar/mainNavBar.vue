<template>
<div>


  <Nav>
       <el-input v-model="input"
      placeholder="请输入搜索内容" 
      clearable
       ></el-input>
     <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <!-- <Nav-item  path="/home"  :activeColor="{ color:#aecff0 ,bgColor:"#999" }" > -->
      <Nav-item  path="/home"  >
        <div>首页</div>
      </Nav-item>
      <Nav-item path="/profile" >
        <div>个人中心</div>
      </Nav-item>
      <Nav-item   path="/singUp"  >
        <div>登录</div>
      </Nav-item>
      <Nav-item   path="/login">
        <div>注册</div>
      </Nav-item>
      <Nav-item  path="/errorPage"  >
        <div>404</div>
      </Nav-item>
       <!-- <Nav-item  path="/editor"  >
        <div>写文章</div>
      </Nav-item> -->
      
  </Nav>
</div>
</template>

<script>
import Nav from '../nav/nav'
import NavItem from '../navItem/navItem'

  export default {
    name:"mainNavBar",
    components:{
      Nav,
      NavItem,
    },
    data(){
      return {
        input:''
      }
    }

    
  }
</script>

<style lang="scss" scoped>
.box{
  color:#dc5d48
}
.el-input{
  width:20%;
  height:41px;
  .el-input__inner{
    height: 41px;
  }
 
}
</style>