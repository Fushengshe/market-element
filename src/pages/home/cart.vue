<template>
  <div class="cart">
    <h3 class="top-bar">购物车</h3>
    <cart-item class="cart-item"></cart-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import CartItem from '../../components/cartItem/index.vue'
  export default {
    name: 'cart',
    data () {
      return {
        msg: 'this is the cart component!'
      }
    },
    components: {
      CartItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart {
    .top-bar {
      margin 0
      text-align left
      border-bottom 3px solid #555
    }
    .cart-item{
      width 90%
      margin 0 auto
    }
  }
</style>
