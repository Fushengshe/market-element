<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img class="item-image" src="./gakki.jpg" alt="">
    </div>
    <div class="cart-item-info">
      <h3 class="info-title">商品名称：{{item.title}}</h3>
      <div class="info-type">具体型号：{{item.type}}</div>
      <div class="info-store">店铺名称：{{item.store}}</div>
      <div class="info-money">
        <h5 class="info-price">单价：{{item.price}}</h5>
        <div class="info-count">{{item.count}}数量</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cart-item',
    data () {
      return {
        msg: 'this is the cart-item component!',
        item: {
          title: 'this is the test title',
          type: 'this is the test type info',
          store: 'this is the test store name',
          price: 12,
          count: 12
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart-item {
    display flex
    .cart-item-img {
      flex 1
      .item-image {
        width 100%
      }
    }
    .cart-item-info{
      flex 1
    }
  }
</style>
