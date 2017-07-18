<template>
  <div class="store-content">
    <router-link class = "link" to="/good">
      <div class = "content" v-for="(i, index) in 4" :key = "i">
        <div class = "goods-img">
          <img src="http://temp.im/80x80" alt="goods">
        </div>

        <div class = "goods-info">
          <table class = "info">
              <td>
                <tr class = "goods-name"><p>商品名称 {{ goodsName }}</p></tr>
                <tr class = "goods-price"><p>单价 {{ goodPrice }}</p></tr>
              </td>

              <td>
                <tr class = "purchases-number"><p>{{ purchasesNumber }}人购买</p></tr>
                <tr class = "favorable-rate"><p>好评{{ favorableRate }}</p></tr>
              </td>
          </table>
        </div>
      </div>
    </router-link>
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
      .goods-img{
        float left
      }
      .goods-info{
        font-size 14px
        .info{
          padding-bottom 1rem
          border-bottom 1px solid #555
        }
        .info p {
          margin 0.5rem 0
        }
        .goods-name{
          display inline-block
          text-align left
        }
        .goods-price{
          display inline-block
          text-align left
        }
        .purchases-number{
          display inline-block
          text-align right
        }
        .favorable-rate{
          display inline-block
          text-align right
        }
      }
    }
  }
</style>
