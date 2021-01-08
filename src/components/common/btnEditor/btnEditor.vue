<template>
 <el-row >
  <el-button type="primary" plain  @click="pushEditor" >写文章</el-button>
</el-row>
</template>

<script>
  export default {
    name:"btnEditor",
    data(){
      return{

      }
    },
    props:{

    },
    methods:{
      pushEditor(){
        console.log(123);
        this.$router.push("/editor")
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.el-row{
  float:right
}
</style>