<template>
<div class="wrapper" >
    <div class="nav">
    <!-- 插槽 -->
     <Btn-editor path= "/editor"></Btn-editor>
    <slot></slot>
  </div>
</div>
</template>
<script>
// import NavItem from '../navItem/navItem'
import BtnEditor from '../common/btnEditor/btnEditor';

  export default {
    name: 'Nav',
    components: {
    //   NavItem
    BtnEditor,
    },
    data() {
      return {
      };
    },
    methods: {
      Edtor() {
        console.log('写文章');
      },
    },
  };
</script>
<style lang="scss" scoped>
.nav{
  background: #ccc;
  height: 44px;
}
</style>
