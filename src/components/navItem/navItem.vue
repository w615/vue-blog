<!--
 NavItem
-->
<template>
    <div class="nav-item"
    @click="itemClick"
    @mouseover ="itemHover"
    @mouseout="removeHover">
    <div :style="activeStyle"><slot></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'navItem',
    data() {
      return {
        isHover: false,
      };
    },
    props: {
      path: String,
        activeColor: {
          type: Object,
          default() {
            return { color: 'black', bgColor: '#ccc' };
          },
      },
    },
    computed: {
        isActive() {
          return this.$route.path.includes(this.path);
        },
      activeStyle() {
          return {
            color: this.isActive ? this.activeColor.color : this.isHover ? this.activeColor.color : '#f8f8f2',
            backgroundColor: this.isActive ? this.activeColor.bgColor : this.isHover ? this.activeColor.bgColor : '#ccc',
          };
      },
    },
     methods: {
      itemClick() {
        this.$router.push(this.path);
      },
      itemHover() {
        this.isHover = true;
      },
      removeHover() {
        this.isHover = false;
      },
    },
  };
</script>
<style lang="scss" scoped>
.nav-item{
   float:left;
   margin-left: 30px;
   cursor: pointer;
   height: 44px;
   line-height: 44px;
}
  .active{
    border-bottom:2px solid black;
  }
</style>
