<template>
  <div id="app">
    <router-view></router-view>
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


<style lang="stylus" scoped>
  #app {
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    .amap-wrapper {
      width 500px
      height 500px
      margin 0 auto
    }
  }
</style>
