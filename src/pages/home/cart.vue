<template>
  <div class="cart">
    <div class = "header">
      <p class = "cart-text">购物车</p>
      <span><img src = "../../assets/edit.png" alt = "edit" class = "edit" /></span>
    </div>

    <div class = "cart-items"  v-for = "(o, index) of 4" :key = "o">
      <div class = "cart-item">
        <div class = "item-img">
          <img src = "http://temp.im/104x104"/>
        </div>

        <div class = "item-text">
          <table>
            <tr>
              <td class = "right-text">商品名称：</td>
              <td class = "left-text">显示器</td>
            </tr>
            <tr>
              <td class = "right-text">具体型号：</td>
              <td class = "left-text">9016</td>
            </tr>
            <tr>
              <td class = "right-text">店铺名称：</td>
              <td class = "left-text">浮生社</td>
            </tr>
            <tr>
              <td class = "left-text">单价：450</td>
              <td class = "center-text">数量：1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cart',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cart{
    padding-top 3rem
    .header{
      width 100%
      height 5vh
      padding-top 0.5rem
      margin-bottom 2vh
      background #fff
      border-bottom 1px solid #222
      position fixed
      top 0
      .cart-text{
        display inline-block
        margin 0 0 0 0.8rem
      }
      .edit{
        height 80%
        margin-right 0.8rem
        float right
      }
    }

    .cart-items{
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
    }
  }
</style>
