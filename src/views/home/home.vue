<template>
  <div class="home">
    <Side-bar/>
    <!-- <ul>
      <li>
        <p>标题</p>
        <span>内容内容内容内容内容内容</span>
      </li>
       <li>
        <p>标题</p>
        <span>内容内容内容内容内容内容</span>
      </li>
       <li>
        <p>标题</p>
        <span>内容内容内容内容内容内容</span>
      </li>
    </ul> -->
  </div>
</template>
<script>
// 引入侧边导航组件 引入文章标题组件
import SideBar from './components/sideBar';

  export default {
    name: 'sideBar',
    components: {
      SideBar,
    },
    data() {
      return {
      };
    },
  };
</script>
<style lang="scss" scoped>
.home{
  border:1px solid black;
  position:absolute;
  top:44px;
  right:0;
  left:0;
  bottom:300px;
  ul li{
    list-style: none;
  }
}
.el-input{
  width:20%;
  height:41px;
  .el-input__inner{
    height: 41px;
  }
}
</style>
