<template>
  <div class="store-info">
    <div class = "store-info-header">
      <div class = "back-to-store">
        <img src="../../assets/back.png" alt="back">
      </div>
      <h2 class = "store-name">{{ storeName }}</h2>
    </div>

    <div class = "avatar-bar">
      <div class = "avatar-bg">
        <img src="http://temp.im/412x160" alt="avatarBg">
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
          <i></i>
        </div>
        <div class = "phone">
          <span class = "phone-text">联系方式： {{ phone }}</span>
          <i></i>
        </div>
      </div>
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
        phone: '13222222222'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .store-info{
    width 100%
    .store-info-header{
      border-bottom 1px solid #666
      .back-to-store{
        position absolute
        top 0.4rem
        left 0.2rem
      }
      .store-name{
        text-align center
        margin-top 0.4rem
        margin-bottom 0.2rem
      }
    }
    .avatar-bar{
      .store-avatar{
        width 5rem
        margin -2.5rem auto 0 auto
        .store-avatar p{
          border-radius 2.5rem
        }
      }
    }
    .info-bar{
      width 100%
      text-align center
      font-size 14px
      .address-phone{
        width 100%
        .address{
          width 100%
          margin-bottom 0.8rem
          text-align left
          font-size 16px
        }
        .address-text{
          width 100%
          margin 0 10%
          display inline-block
          border 1px solid #888
          padding 0.8rem
        }
        .phone{
          font-size 16px
          text-align left
        }
      }
    }
  }
</style>
