<template>
  <div class="index">
    <router-view></router-view>
    <div class = "nav">
      <router-link to="/home" class = "toHome navItem">
        <RippleButton>
          <span><img src = "../../assets/home.png" alt = "icon-hover" class="icon"/></span>
        </RippleButton>
      </router-link>
      <router-link to="/cart" class = "toCart navItem">
        <RippleButton>
          <span><img src = "../../assets/cart.png" alt = "icon-hover" class="icon"/></span>
        </RippleButton>
      </router-link>
      <router-link to="/me" class = "toMe navItem">
        <RippleButton>
          <span><img src = "../../assets/account.png" alt = "icon-hover" class="icon"/></span>
        </RippleButton>
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
  .index{
    padding-bottom 3.7rem
    .nav {
      height 7vh
      width 100%
      position fixed
      bottom 1vh
      display flex
      .navItem {
        height 100%
        flex 1
        .icon {
          display block
          margin 1.5vh auto
          height 60%
        }
      }
    }
  }

</style>
