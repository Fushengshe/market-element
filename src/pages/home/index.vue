<template>
  <div class="index">
    <router-view></router-view>
    <navigator></navigator>
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
  }
</style>
