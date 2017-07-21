<template>
  <div class="store">
    <div class="store-header">
      <router-link to="/home">
        <span class="back-home"><img src="../../assets/back.png" alt="back"></span>
      </router-link>

      <span class="store-name">{{ storeName }}</span>
      <span class="search-in-store">
        <el-input placeholder="店内搜索" icon="search" v-model="input" :on-icon-click="handleIconClick"></el-input>
      </span>

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
    </div>

    <div class = "ticket-bar">
      <div class = "curtain">
        <div class = "store-avatar"><img src="http://temp.im/80x80" alt="store-avatar"></div>
        <div class = "store-slogan">
          <router-link to="/storeInfo"><p>xxxxxxx</p></router-link>
        </div>
      </div>

      <div class = "store-resume">
        商铺号：{{ storeId }} | {{ collected }}人收藏 <br />
        店铺等级
      </div>
      <router-link to="card" class = "to-ticket">
        <el-button type="primary">优惠券</el-button>
      </router-link>
      <span class = "share"><img src="../../assets/share.png" alt="share"></span>
    </div>

    <div class = "store-content">
      <el-row>
        <el-col :span="6" class = "store-menu">
          <el-menu default-active ="storeContent_1" :router = true class="el-menu-vertical">
            <el-menu-item class = "el-menu-item" index="storeContent_1"><i class="el-icon-menu"></i>全部</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_2"><i class="el-icon-menu"></i>零食</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_3"><i class="el-icon-menu"></i>饮料</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_4"><i class="el-icon-menu"></i>厨卫</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_5"><i class="el-icon-menu"></i>洗浴</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_6"><i class="el-icon-menu"></i>服装</el-menu-item>
            <el-menu-item class = "el-menu-item" index="storeContent_7"><i class="el-icon-menu"></i>办公</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="24">
          <div class = "content">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {Input, Popover, Row, Col, Menu, MenuItem} from 'element-ui'
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
      'el-row': Row,
      'el-menu': Menu,
      'el-menu-item': MenuItem
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
        float left
        margin-top 0.2rem
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
    .ticket-bar{
      width 100%
      overflow hidden
      border-bottom 1px solid #777
      .curtain{
        height 9.5rem
        background-image url('http://temp.im/375x150')
        position relative
        .store-avatar{
          width 4.8rem
          height 4.8rem
          border-radius 2.4rem
          position absolute
          bottom -2.4rem
          left 1.5rem
        }
        .store-slogan{
          position absolute
          bottom 0.5rem
          left 8.2rem
          p{
            margin 0
          }
        }
      }
      .store-resume{
        font-size 14px
        margin-left 7rem
      }
      .share{
        float right
        height 2rem
        width 2rem
        margin 0.2rem 20% 0 20%
      }
      .to-ticket{
        float right
        margin-top 0.1rem
        margin-right 20%
      }
    }
    .store-content{
      width 100%
      .store-menu{
        height 100%
        position fixed
        left 0
        ul{
          min-height 40rem
        }
        .el-menu-item{
          height 3.5rem
        }
      }
      .content{
        margin-left 13.5%
      }
    }
  }
</style>
