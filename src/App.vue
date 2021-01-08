<template>
  <div id="app">
    <div class="container">
       <Main-nav-bar/>
        <keep-alive>
          <router-view/>
        </keep-alive>
        <Footer/>
    </div>
  </div>
</template>
<script>
import MainNavBar from './components/mainNavBar/mainNavBar';
import Footer from './views/footer/footer';

export default {
  name: 'App',
  components: {
    MainNavBar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/styleCss/reset.css";
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // border:1px solid black;
  // padding:40px 0px;
  // width:100%;
  // height: 800px;
  // position: absolute;
  // top:0;
  // bottom:0;
  margin: 0 auto;
  .container{
    width:80%;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    border:1px solid red;
    margin: 0 auto;
  }
};
</style>
