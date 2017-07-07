<template>
  <div class="nav">
    <router-link to="/cart" class="cart-link index-route">
      <div class="cart-icon icon"></div>
    </router-link>
    <router-link class="home-link index-route" to="/home">
      <div class="home-icon icon"></div>
    </router-link>
    <router-link to="/me" class="me-link index-route">
      <div class="me-icon icon"></div>
    </router-link>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'index',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .nav {
    display flex
    position fixed
    bottom 0
    width 100%
    height 5vh
    background-color #fff
    .index-route {
      height 100%
      flex 1
      display inline-block
      text-decoration none
    }
    .icon {
      height 100%
      background-size auto 100%
      background-position-x center
      background-repeat no-repeat
    }
    .home-icon {
      background-image url("./homepage.png")
    }
    .cart-icon {
      background-image url("./cart.png")
    }
    .me-icon {
      background-image url("./addressbook.png")
    }
  }
</style>
