<template>
  <div class="index">
    <router-view></router-view>
    <div class = "nav">
      <router-link to="/home" class = "toHome navItem">
        <RippleButton>home</RippleButton>
      </router-link>
      <router-link to="/cart" class = "toCart navItem">
        <RippleButton>cart</RippleButton>
      </router-link>
      <router-link to="/me" class = "toMe navItem">
        <RippleButton>me</RippleButton>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import RippleButton from '../../components/RippleButton'
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    components: {
      RippleButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.nav{
  height 9vh
  width 100%
  position fixed
  bottom 1vh
  display flex
  .navItem{
    height 100%
    flex 1
    display inline-block
    text-decoration none
  }
}
</style>
