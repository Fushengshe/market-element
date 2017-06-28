<template>
  <div id="app">
    <router-link to="/components">
      <el-button>components</el-button>
    </router-link>
    <!--注意在这里必须加这个斜线，不然二级路由切换回一级路由会出现问题-->
    <router-link to="/hello">
      <el-button>hello</el-button>
    </router-link>
    <router-view></router-view>
    <!--<amap></amap>-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'this is the components'
      }
    },
    components: {}
  }
</script>

<style lang="stylus">
  #app {
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
    .amap-wrapper {
      width 500px
      height 500px
      margin 0 auto
    }

  }
</style>
