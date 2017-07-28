<template>
  <div class="store">
    <div class="store-header">
      <router-link to="/home">
        <span class="back-home"><img src="../../assets/back.png" alt="back"></span>
      </router-link>

      <el-popover class="more-menu" ref="popover1" placement="bottom" width="80" trigger="click">
        <ul class = "menu">
          <li class="store-info">店铺信息</li>
          <li class="store-contact">联系商家</li>
          <li class="store-collection">收藏</li>
          <li class="store-report">举报</li>
        </ul>
      </el-popover>
      <span class="more" v-popover:popover1>
        <img src="../../assets/menu.png" alt="more">
      </span>

      <span class="search-in-store">
        <el-input placeholder="店内搜索" icon="search" v-model="input" :on-icon-click="handleIconClick"></el-input>
      </span>
    </div>

    <div class = "store-resume">
      <div class = "avatar-warp">
        <div class = "store-avatar">
          <img src="http://temp.im/80x80" alt="store-avatar">
        </div>

        <div class = "store-info">
          <p class = "store-name">{{ storeName }}</p>
          <p class = "store-id">商铺号 {{ storeId }}</p>
          <p class = "collected-num">{{ collected }}人收藏</p>
        </div>
      </div>

      <p class = "store-rate">店铺等级 ※ ※ ※ ※ ※</p>

      <router-link to="/storeCard" class = "to-ticket">
        <el-button type="primary">优惠券</el-button>
      </router-link>

      <span class = "share">
        <img src="../../assets/share.png" alt="share">
      </span>

      <div  class = "store-promotion">
        <router-link to="/storeInfo">
          <p>xxxxxxx</p>
        </router-link>
      </div>
    </div>

    <div class = "store-content">
      <el-row>
        <el-col :span="6" class = "store-menu">

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Input, Popover, Row, Col } from 'element-ui'
  export default {
    name: 'store',
    data () {
      return {
        storeName: '滴滴',
        storeId: '10001',
        collected: '111',
        input: ''
      }
    },
    methods: {
      handleIconClick (ev) {
        console.log(ev)
      }
    },
    components: {
      'el-input': Input,
      'el-popover': Popover,
      'el-col': Col,
      'el-row': Row
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .store {
    height 100%
    overflow auto
    display flex
    flex-direction column
    .store-header {
      height 2.5rem
      .back-home {
        float left
        margin 0.3rem 1.7rem 0 0.2rem
      }
      .store-name {
        float left
        height 2.5rem
        line-height 3rem
        margin-right 14%
      }
      .search-in-store {
        width 40vw
        float right
        margin 0.2rem 2rem
      }
      .more {
        float right
        margin 0.2rem 0.5rem
      }
      .more-menu{
        padding 0
        .menu{
          list-style none
          font-size 15px
        }
      }
    }
    .store-resume{
      background url("http://temp.im/320x150")
      background-size cover
      padding-top 1.2rem
      overflow auto
      .avatar-warp{
        display flex
        margin-bottom 0.8rem
        .store-avatar{
          width 5rem
          height 5rem
          margin 0 2.5rem
        }
        .store-info{
          height 5rem
          p{
            margin 0
          }
          .store-name{
            font-size 20px
            margin-bottom 0.5rem
          }
        }
      }
      .store-rate{
        display inline-block
        float left
        margin 0.8rem 0 0 1rem
      }
      .to-ticket{
        margin-left 14%
      }
      .share{
        display inline-block
        float right
        margin 0.1rem 8%
      }
      .store-promotion{
        postion absolute
        bottom 0
        margin-top 0.5rem
        background rgba(0, 0, 0, 0.5)
        height 1.5rem
        a {
          text-decoration none
          p{
            padding 0 1rem
            margin 0
            color #2c3e50
            ling-height 1.5rem
            font-size 17px
          }
        }
      }
    }

    .store-content{
      width 100%
    }
  }
</style>
