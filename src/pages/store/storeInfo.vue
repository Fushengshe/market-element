<template>
  <div class="store-info">
    <div class = "store-info-header border-1px">
      <router-link to="/store">
        <div class = "back-to-store">
          <img src="../../assets/back.png" alt="back">
        </div>
      </router-link>
      <h2 class = "store-name">{{ storeName }}</h2>
    </div>

    <div class = "avatar-bar">
      <div class = "avatar-bg">
        <img class = "bg" src="http://temp.im/412x160" alt="avatarBg">
      </div>

      <div class = "store-avatar">
        <img src="http://temp.im/80x80" alt="store-avatar">
      </div>
    </div>

    <div class = "info-bar">
      <div class = "info-text">
        <p>商铺号：{{ storeId }} | {{ collected }}人收藏 | 店铺等级</p>
      </div>
      <div class = "address-phone">
        <div class = "address">
          <span class = "address-text">店铺地址：{{ address }}</span>
          <img class = "address-icon" src="http://temp.im/32x32" alt="address-icon">
        </div>
        <div class = "phone">
          <span class = "phone-text">联系方式： {{ phone }}</span>
          <img class = "phone-icon" src="http://temp.im/32x32" alt="address-icon">
        </div>
      </div>
    </div>

    <div class = "quality-goods">
      <h3 class = "goods-title">精选好货</h3>
      <div class = "goods-warp">
        <img class = "good-item" src="http://temp.im/100x100" alt="quality-goods">
        <img class = "good-item" src="http://temp.im/100x100" alt="quality-goods">
      </div>
    </div>

    <div class = "store-introduction">
      <h3 class = "introduction-title">门店介绍</h3>
      <p class = "introduction">{{ introduction }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'store-info',
    data () {
      return {
        storeName: 'xxxx',
        storeId: '11',
        collected: '22',
        address: '秦皇岛',
        phone: '13222222222',
        introduction: '66666666666666666666666666666666666666666666666'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .store-info{
    width 100%
    /*overflow hidden*/
    .store-info-header{
      border-1px(rgba(7,17,27,0.1))
      .back-to-store{
        display inline-block
        position absolute
        top 0.1rem
        left 0.2rem
      }
      .store-name{
        text-align center
        margin-top 0.4rem
        margin-bottom 0.2rem
      }
    }
    .avatar-bar{
      .avatar-bg .bg{
        width 100%
      }
      .store-avatar{
        width 5rem
        margin -2.5rem auto 0 auto
      }
    }
    .info-bar{
      text-align center
      font-size 14px
      .address-phone{
        .address{
          display flex
          align-items center
          justify-content  center
          text-align left
          margin-bottom 0.8rem
          .address-text{
            display inline-block
            width 70%
            padding 0.5rem 0.5rem
            font-size 15px
            border 1px solid #888
            border-radius 20px
          }
          .address-icon{
            margin-left 1rem
          }
        }
        .phone{
          display flex
          align-items center
          justify-content  center
          text-align left
          margin-bottom 0.8rem
          .phone-text{
            display inline-block
            width 70%
            padding 0.5rem 0.5rem
            font-size 15px
            border 1px solid #888
            border-radius 20px
          }
          .phone-icon{
            margin-left 1rem
          }
        }
      }
    }
    .quality-goods{
      width 80%
      text-align center
      padding 1rem
      margin 0 auto
      border 1px solid #888
      border-radius 20px
      .goods-title{
        margin  0 0 1rem 0
      }
      .goods-warp{
        display flex
        align-items center
        justify-content center
        .good-item{
          margin 0 1rem
          border-radius 20px
        }
      }
    }
    .store-introduction{
      margin-top 2rem
      padding 0 1rem
      .introduction-title{
        margin 0 0 1rem 0
        text-align center
      }
      .introduction{
        word-wrap break-word
        word-break normal
      }
    }
  }
</style>
