<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img class="item-image" src="./gakki.jpg" alt="">
    </div>
    <div class="cart-item-info">
      <div class="info-title">商品名称：{{cart.title}}</div>
      <div class="info-type">具体型号：{{cart.type}}</div>
      <div class="info-store">店铺名称：{{cart.store}}</div>
      <div class="info-money">
        <div class="info-price">单价：{{cart.price}}</div>
        <div class="info-count">{{cart.count}}数量</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cart-item',
    props: {
      'cart': {
        type: Object,
        require: true
      }
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart-item {
    display flex
    justify-content space-between
    box-sizing border-box
    padding 0.3em 0.6em
    border 1px solid #555
    border-radius 5px
    .cart-item-img {
      display flex
      align-items center
      flex 0 0 35%
      width 35%
      .item-image {
        width 100%
      }
    }
    .cart-item-info {
      flex 0 0 60%
      width 60%
      font-size 0.8em
      .info-title, .info-price {
        margin 0
      }
      .info-title{
        font-size 1.05em
        font-weight 600
      }
      .info-money {
        display flex
        font-size 0.8em
        font-weight 600
        .info-price {
          flex 1
          width 50%
          text-align left
        }
        .info-count {
          flex 1
          width 50%
          text-align right
        }
      }
    }
  }
</style>
