<template>
  <div class="cart">
    <h3 class="top-bar">购物车</h3>
    <div class="cart-item-wrapper" v-for="(cart, index) in carts" :index="index">
      <cart-item :cart="cart"></cart-item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CartItem from '../../components/cartItem/index.vue'
  export default {
    name: 'cart',
    data () {
      return {
        msg: 'this is the cart component!',
        carts: [{
          title: 'the title',
          type: 'type info',
          store: 'store name',
          price: 13,
          count: 13
        }, {
          title: 'the title',
          type: 'type info',
          store: 'store name',
          price: 1314,
          count: 1314
        }, {
          title: 'the title',
          type: 'type info',
          store: 'store name',
          price: 89,
          count: 89
        }, {
          title: 'the title',
          type: 'type info',
          store: 'store name',
          price: 66,
          count: 66
        }]
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
    .cart-item-wrapper {
      width 95%
      margin 15px auto
    }
  }
</style>
