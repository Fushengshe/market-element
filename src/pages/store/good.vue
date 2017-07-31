<template>
  <div class="good">
    <div class="store-header">
      <span class="back-home" @click="handleBack"><img src="../../assets/back.png" alt="back"></span>

      <div class="good-name">{{ goodData.goodName }}</div>
    </div>

    <div class = "product-image">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class = "good-info">
      <div class = "info">
        <p class = "name">{{ goodData.goodName }}</p>
        <p class = "description">{{ goodData.detail }}</p>
        <p>月销{{ goodData.monthlySales }}笔 | {{ goodData.purchases }}人评价 | 行行行行行</p>
      </div>

      <div class = "price">￥{{ goodData.price }}</div>

      <el-button class = "preferential">请选择 分类标准</el-button>
      <el-button class = "preferential">优惠券 / 促销信息</el-button>
    </div>

    <div class = "store-info">
      <div class = "store-info-left">
        <p class = "storeName">{{ goodData.storeName }}</p>
        <p>行行行行行</p>
        <p>{{ goodData.storeDescription }}</p>
      </div>

      <div class = "store-info-right">
        <div class = "distance">
          <p>{{ goodData.address }}</p>
          <p>{{ goodData.distance }}米</p>
        </div>
        <el-button class = "goto">导航到商店</el-button>
      </div>
    </div>

    <div class = "product-description">
      <pre>
        dsfdsgdsfk
        jghskljfdnbgksljfdbgn
        fdsklgjldksfjgldsjfglkjsdlfjg
        dfkjhglksdfhg
        dfkjgh
        dkfsghlkdfhglkhfd
      </pre>
    </div>

    <div class = "footer">
      <div class = "footer-top">
        <span class = "share"><img src="../../assets/share.png" alt="share-icaon"></span>
        <span class = "like"><img src="../../assets/Like.png" alt="lick-icon"></span>
        <span class = "add" @click="collect">收 藏</span>
      </div>

      <div class = "footer-bottom">
        <span>商品信息</span>
        <span>用户评价</span>
        <span>相关推荐</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../config/api'
  import {Carousel, CarouselItem, Message} from 'element-ui'
  const ERR_OK = 0
  export default {
    name: 'good',
    data () {
      return {
        goodData: []
      }
    },
    created () {
      api.getGoodData().then(({data}) => {
        if (data.code === ERR_OK) {
          this.goodData = data
          console.log(this.$route.query.id)
        }
      })
    },
    components: {
      'el-carousel': Carousel,
      'el-carousel-item': CarouselItem
    },
    methods: {
      handleBack () {
        this.$router.go(-1)
      },
      collect () {
        let opt = {
          goods_id: parseInt(this.$route.query.id),
          user_id: parseInt(this.$store.state.userID)
        }
        console.log(opt)
        api.collectGood(opt).then(({data}) => {
          if (data.code === ERR_OK) {
            Message.success('收藏成功')
          } else {
            Message.error('系统错误，请稍后重试')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .good{
    padding-bottom 4.6rem
    .store-header {
      height 2.5rem
      border-bottom 1px solid #888
      .back-home {
        position absolute
        left 0.2rem
        top 0.3rem
      }
      .good-name {
        text-align center
        height 2.5rem
        line-height 3rem
      }
    }
    .product-image{
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
    .good-info{
      overflow hidden
      .good-info:after{
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .info{
        float left
        margin 0 1.2% 1rem 8%
        height 3.6rem
        p{
          margin 0 0.2rem 0.2rem 0
          text-align center
          font-size 14px
        }
      }
      .price{
        float right
        padding 0 0.6rem
        height 3.6rem
        color #ff1b34
        text-align center
        font-size 19px
        line-height 3.6rem
        border-left 1px solid #888
      }
      .preferential{
        display block
        width 88%
        margin 1rem auto
      }
    }
    .store-info{
      width 78%
      margin 0 auto
      padding 4.5%
      overflow hidden
      border 1px solid #888
      border-radius 14px
      .store-info-left{
        float left
        width 60%
        .storeName{
          font-size 20px
          margin-bottom 0.8rem
        }
        p{
          margin 0 0 0.5rem 1rem
        }
      }
      .store-info-right{
        float right
        width 40%
        .distance{
          margin-bottom 1rem
          text-align center
          border-left 1px solid #888
        }
        p {
          margin 0
        }
      }
    }
    .product-description{
      width 88%
      margin 0 auto
    }
    .footer{
      position fixed
      bottom 0
      width 100%
      background #fff
      .footer-top{
        height 2.5rem
        .share{
          margin 0 1.5rem
        }
        .add{
          display inline-block
          height 100%
          width 40%
          text-align center
          font-size 18px
          line-height 2.5rem
          background #ff1b34
          color #fff
          float right
        }
      }
      .footer-bottom{
        display flex
        height 1.8rem
        font-size 17px
        span{
          flex 1
          margin 0.1rem 0
          height 1.6rem
          text-align center
          border-right 1px solid #888
          line-height 1.6rem
        }
        span:last-child{
          border none
        }
      }
    }
  }
</style>
