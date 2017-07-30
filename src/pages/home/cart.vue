<template>
  <div class="cart">
    <div class="header">
      <p class="cart-text">购物记录</p>
      <!--<span><img src="../../assets/edit.png" alt="edit" class="edit"/></span>-->
    </div>


    <div class="store-items" v-for="item in cartData.goodsList">
      <h3 class="store-name" >{{ item.storeName }}</h3>

      <div class="goods" v-for = "product in item.products">
        <div class="goods-img">
          <img src="http://temp.im/104x104" alt="the img of goods">
        </div>
        <div class="goods-text">
          <p class="goods-name">{{ product.productName }}</p>
          <p class="goods-feature">{{ product.productFeature }}</p>
          <span class = "goods-description">
            <p v-for = "part in product.parts">{{ part.partsName }}</p>
          </span>
          <p class="goods-price">￥{{ product.productPrice * product.productQuantity }}</p>
          <p class="goods-quantity">x {{ product.productQuantity }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../config/api'
  const ERR_OK = 0

  export default {
    name: 'cart',
    data () {
      return {
        cartData: []
      }
    },
    created () {
      api.getCartData().then(({data}) => {
        if (data.code === ERR_OK) {
          this.cartData = data
          console.log(this.cartData)
        }
      })
    },
    computed: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/index.styl"
  .cart {
    padding-top 2.7rem
    background #d0d0d0
    .header {
      width 100%
      height 2.2rem
      padding-top 0.5rem
      background #fff
      border-1px(rgba(7,17,27,0.1))
      position fixed
      top 0
      .cart-text {
        display inline-block
        margin-top 0.2rem
        margin-left 0.8rem
      }
      /*.edit {
        height 1.6rem
        margin-right 0.8rem
        float right
      }*/
    }

    .store-items {
      width 100%
      padding-top 0.8rem
      background #fff
      border-1px(rgba(7,17,27,0.1))
      margin-bottom 1rem
      padding-bottom 0.3rem
      h3, p {
        margin 0
      }
      .store-name {
        margin-left 1.5rem
        margin-bottom 0.7rem
        border-1px(rgba(7,17,27,0.1))
      }
      .goods {
        margin 0.7rem 0
        .goods-img {
          float left
          width 30vw
          margin-left 1.5rem
        }
        .goods-text {
          float left
          margin-left 1.5rem
          position relative
          width 55vw
          .goods-name {
            margin-bottom 0.3rem
            display inline-block
          }
          .goods-description {
            display inline-block
            margin-top 1rem
            font-size 12px
            color #ff1b34
          }
          .goods-price {
            position absolute
            right 0
            top 0
            color #ff1b34
          }
          .goods-quantity {
            position absolute
            right 0
            top 1.8rem
          }
        }
      }
      .goods:after {
        clear both
        content ''
        display block
        width 0
        height 0
        visibility hidden
      }
    }
  }
</style>
