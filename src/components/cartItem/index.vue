<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img class="item-image" src="./gakki.jpg" alt="">
    </div>
    <div class="cart-item-info">
      <h5 class="info-title">商品名称：{{item.title}}</h5>
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
          title: 'the title',
          type: 'type info',
          store: 'store name',
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
    justify-content space-between
    border 1px solid #555
    border-radius 5px
    .cart-item-img {
      flex 0 0 35%
      width 35%
      .item-image {
        width 100%
      }
    }
    .cart-item-info{
      flex 0 0 60%
      width 60%
      .info-title, .info-price{
        margin 0
      }
    }
  }
</style>
