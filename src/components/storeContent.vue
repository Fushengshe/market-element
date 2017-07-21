<template>
  <div class="store-content">
      <div class = "content" v-for="(i, index) in 8" :key = "i">
        <router-link class = "link" to="/good">
          <div class = "goods-img">
            <img src="http://temp.im/80x80" alt="goods">
          </div>

          <div class = "goods-info">
            <table class = "info">
                <td class = "left">
                  <tr class = "goods-name"><p>商品名称 {{ goodsName }}</p></tr>
                  <tr class = "goods-price"><p>单价 {{ goodPrice }}</p></tr>
                </td>

                <td class="right">
                  <tr class = "purchases-number"><p>购买人数{{ purchasesNumber }}</p></tr>
                  <tr class = "favorable-rate"><p>好评{{ favorableRate }}</p></tr>
                </td>
            </table>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'store',
    data () {
      return {
        goodsName: 'aaaaa',
        goodPrice: 'bbbbb',
        purchasesNumber: 'ccccc',
        favorableRate: 'ddd'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .store-content{
    .link{
      text-decoration none
      color #2c3e50
    }
    .content{
      overflow hidden
      margin-bottom 1px
      .goods-img img{
        height 4.6rem
        width 4.6rem
        float left
      }
      .goods-info{
        overflow hidden
        height 4.6rem
        border-bottom 1px solid #555
        width calc(100% - 4.6rem)
        .info{
          overflow hidden
          margin-left 0.4rem
          .left{
            text-align left
          }
          .right{
            text-align right
          }
          p{
            margin 0
            line-height 1.8rem
            font-size 14px
          }
        }
        .goods-name, .goods-price, .purchases-number, .favorable-rate{
          display inline-block
        }
      }
    }
  }
</style>
