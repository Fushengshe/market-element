<template>
  <div class="cart">
    <div class="header">
      <p class="cart-text">购物车</p>
      <span><img src="../../assets/edit.png" alt="edit" class="edit"/></span>
    </div>


    <div class="store-items" v-for="item in list">
      <h3 class="store-name" >{{ item.store.storeName }}</h3>

      <div class="goods" v-for = "product in item.store.products">
        <div class="goods-img">
          <img src="http://temp.im/104x104" alt="the img of goods">
        </div>
        <div class="goods-text">
          <p class="goods-name">{{ product.productName }}</p>
          <p class="goods-feature">{{ product.productFeature }}</p>
          <p class="goods-description">{{ product.parts }}</p>
          <p class="goods-price">￥{{ product.productPrice }}</p>
          <p class="goods-quantity">x{{ product.productQuantity }}</p>
        </div>
      </div>
    </div>

    <!--<div class = "cart-items"  v-for = "(o, index) of 4" :key = "o">-->
    <!--<div class = "cart-item">-->
    <!--<div class = "item-img">-->
    <!--<img src = "http://temp.im/104x104"/>-->
    <!--</div>-->

    <!--<div class = "item-text">-->
    <!--<table>-->
    <!--<tr>-->
    <!--<td class = "right-text">商品名称：</td>-->
    <!--<td class = "left-text">显示器</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td class = "right-text">具体型号：</td>-->
    <!--<td class = "left-text">9016</td>-->
    <!--</tr>-->
    <!--&lt;!&ndash;<tr>&ndash;&gt;-->
    <!--&lt;!&ndash;<td class = "right-text">店铺名称：</td>&ndash;&gt;-->
    <!--&lt;!&ndash;<td class = "left-text">浮生社</td>&ndash;&gt;-->
    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--<tr>-->
    <!--<td class = "left-text">单价：450</td>-->
    <!--<td class = "center-text">数量：1</td>-->
    <!--</tr>-->
    <!--</table>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  //  import api from '../../config/api'
  export default {
    name: 'cart',
    data () {
      return {
        'totalMoney': 4529,
        'list': [
          {
            'store': {
              'storeName': '小米旗舰店',
              'products': [
                {
                  'productId': 1001,
                  'productName': '小米6',
                  'productFeature': '黑色',
                  'productPrice': 2499,
                  'productQuantity': 1,
                  'productImage': 'image/goods-1.jpg',
                  'parts': '限购1件'
                },
                {
                  'productId': 1002,
                  'productName': '扫地机器人',
                  'productFeature': '银色',
                  'productPrice': 2000,
                  'productQuantity': 1,
                  'productImage': 'image/goods-2.jpg',
                  'parts': '赠送桌子'
                }
              ]
            }
          },
          {
            'store': {
              'storeName': '三只松鼠',
              'products': [
                {
                  'productId': 1003,
                  'productName': '腰果',
                  'productFeature': '200g',
                  'productPrice': 10,
                  'productQuantity': 1,
                  'productImage': 'image/goods-3.jpg'
                },
                {
                  'productId': 1004,
                  'productName': '夏威夷果',
                  'productFeature': '300g',
                  'productPrice': 20,
                  'productQuantity': 1,
                  'productImage': 'image/goods-4.jpg',
                  'parts': '送撬片'
                }
              ]
            }
          }
        ]
      }
    }
//    beforeCreate () {
//      api.getProducts().then(({result}) => {
//        console.log(result)
//      })
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart {
    padding-top 2.7rem
    background #d0d0d0
    .header {
      width 100%
      height 2.2rem
      padding-top 0.5rem
      background #fff
      border-bottom 1px solid #222
      position fixed
      top 0
      .cart-text {
        display inline-block
        margin-top 0.2rem
        margin-left 0.8rem
      }
      .edit {
        height 1.6rem
        margin-right 0.8rem
        float right
      }
    }

    .store-items {
      width 100%
      padding-top 0.8rem
      background #fff
      border-bottom 1px solid #b1b1b1
      margin-bottom 1rem
      h3, p {
        margin 0
      }
      .store-name {
        margin-left 1.5rem
        margin-bottom 0.7rem
        border-bottom 2px solid #d0d0d0
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
    /*.cart-items{
      width 100%
      display flex
      align-items center
      justify-content center
      .cart-item{
        width 85%
        height 8rem
        padding 1rem
        margin-bottom 2vh
        border-radius 5px
        border 1px solid #222
        display flex
        align-items center
        .item-img{
          width 6.5rem
          height 6.5rem
          margin-right 2rem
          border-radius 5px
          float left
        }
        .item-text{
          .right-text{
            text-align right
          }
          .left-text{
            text-align left
          }
          .center-text{
            text-align center
          }
        }
      }
    }*/
  }
</style>
