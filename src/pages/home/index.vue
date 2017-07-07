<template>
  <div class="index">
    <router-view></router-view>
    <navigator class="home-navigator"></navigator>
  </div>
</template>

<script type="text/ecmascript-6">
  import navigator from '@/components/navigator'
  export default {
    name: 'index',
    data () {
      return {}
    },
    components: {
      navigator
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .index{
    padding-bottom 10vh
    .home-navigator{
      border-top 1px solid #555
    }
  }
</style>
