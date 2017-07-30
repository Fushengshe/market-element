<template>
  <div class="store">
    <div class="store-header">
      <span class="back-home" @click="handleBack"><img src="../../assets/back.png" alt="back"></span>

      <el-popover class="more-menu" ref="popover1" placement="bottom" width="80" trigger="click">
        <ul class="menu">
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


    <div class="store-resume">
      <div class="avatar-warp">
        <div class="store-avatar">
          <img src="http://temp.im/80x80" alt="store-avatDar">
        </div>

        <div class="store-info">
          <p class="store-name">{{ storeData.storeName }}</p>
          <p class="store-id">商铺号 {{ storeData.storeID }}</p>
          <p class="collected-num">{{ storeData.collectedNum }}人收藏</p>
        </div>
      </div>

      <p class="store-rate">店铺等级 ※ ※ ※ ※ ※</p>

      <router-link to="/storeCard" class="to-ticket">
        <el-button type="primary">优惠券</el-button>
      </router-link>

      <span class="share">
        <img src="../../assets/share.png" alt="share">
      </span>

      <div class="store-promotion">
        <router-link to="/storeInfo">
          <p>{{ storeData.storeSlogan }}</p>
        </router-link>
      </div>
    </div>


    <div class="store-content">
      <div class="store-menu" ref="storeMenu">
        <ul class="menu-items">
          <li class="menu-item border-1px" v-for="(item, $index) in storeData.storeGoods"
              :class="{'current':currentIndex===$index}" @click="selectMenu($index, $event)">
            <p class="text">{{ item.goodClassify }}</p>
          </li>
        </ul>
      </div>

      <div class="goods-warp" ref="goodsWarp">
        <ul class="store-goods">
          <li class="store-good store-good-hook" v-for="item in storeData.storeGoods">
            <h1 class="good-title border-1px">{{ item.goodClassify }}</h1>
            <ul>
              <router-link to="/good">
                <li v-for="good in item.goods" class="good border-1px">
                  <img src="http://temp.im/80x80" alt="good-img" class="good-img">
                  <div class="good-info">
                    <h2 class="good-name">{{ good.name }}</h2>
                    <p class="good-price">￥{{ good.price }}</p>
                    <p class="brought-num">{{ good.broughtNum }}人付款</p>
                    <p class="available"></p>
                  </div>
                </li>
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../config/api'
  import { Input, Popover } from 'element-ui'
  import BScroll from 'better-scroll'

  const ERR_OK = 0
  export default {
    name: 'store',
    data () {
      return {
        storeData: [],
        input: '',
        listHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex () {
        // 计算当前goodList高度索引，并与scrollY比较
        for (let j = 0; j < this.listHeight.length; j++) {
          let height1 = this.listHeight[j]
          let height2 = this.listHeight[j + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return j
          }
        }
        return 0
      }
    },
    created () {
      api.getStoreData().then(({data}) => {
        if (data.code === ERR_OK) {
          this.storeData = data
          this.$nextTick(() => {
            // 操作原生dom时，一定要注意调用nextTick，等dom渲染完毕后再进行操作，防止错误的发生
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
    },
    methods: {
      handleBack () {
        this.$router.go(-1)
      },
      handleIconClick (ev) {
        console.log(ev)
      },
      _initScroll () {
        // 初始化betterScroll
        this.menuScroll = new BScroll(this.$refs.storeMenu, {click: true})
        this.goodScroll = new BScroll(this.$refs.goodsWarp, {probeType: 3, click: true})

        this.goodScroll.on('scroll', (position) => {
          this.scrollY = Math.abs(Math.round(position.y))
        })
      },
      _calculateHeight () {
        // 计算每个goodList的高度并存入listHeight用于与scrollY作比较
        let goodList = this.$refs.goodsWarp.getElementsByClassName('store-good-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < goodList.length; i++) {
          let item = goodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu (index, ev) {
        // 左侧menu点击联动右边goodList
        if (!ev._constructed) {
          return
        }
        let goodList = this.$refs.goodsWarp.getElementsByClassName('store-good-hook')
        let el = goodList[index]
        this.goodScroll.scrollToElement(el, 500)
      }
    },
    components: {
      'el-input': Input,
      'el-popover': Popover
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/index.styl"
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
      .el-popover {
        padding 0
        margin 0
        ul {
          padding 0
          margin 0
          li{
            list-style none
            font-size 15px
          }
        }
      }
    }
    .store-resume {
      background url("http://temp.im/320x150")
      background-size cover
      padding-top 1.2rem
      overflow auto
      .avatar-warp {
        display flex
        margin-bottom 0.8rem
        .store-avatar {
          width 5rem
          height 5rem
          margin 0 2.5rem
        }
        .store-info {
          height 5rem
          p {
            margin 0
          }
          .store-name {
            font-size 20px
            margin-bottom 0.5rem
          }
        }
      }
      .store-rate {
        display inline-block
        float left
        margin 0.8rem 0 0 1rem
      }
      .to-ticket {
        margin-left 14%
      }
      .share {
        display inline-block
        float right
        margin 0.1rem 8%
      }
      .store-promotion {
        postion absolute
        bottom 0
        margin-top 0.5rem
        background rgba(0, 0, 0, 0.5)
        height 1.5rem
        a {
          text-decoration none
          p {
            padding 0 1rem
            margin 0
            color #fff
            ling-height 1.5rem
            font-size 17px
            overflow hidden
          }
        }
      }
    }
    .store-content {
      display flex
      position absolute
      top 13.73rem
      bottom 0
      width 100%
      overflow hidden
      .store-menu {
        flex 0 0 5rem
        background #f3f5f7
        .menu-items {
          margin 0
          padding 0
          .menu-item {
            display table
            list-style none
            height 3rem
            width 100%
            margin 0 auto
            text-align center
            border-1px(rgba(7,17,27,0.1))
            &.current {
              position relative
              margin -1px 0
              z-index 10
              background #fff
              font-weight 700
              border none
            }
            .text {
              display table-cell
              margin 0
              vertical-align middle
              font-size 14px
            }
          }
        }
      }
      .goods-warp {
        flex 1
        a {
          text-decoration none
        }
        .store-goods {
          padding 0
          margin 0
          .store-good {
            list-style none
            ul {
              margin 0
              padding 0
            }
            .good-title {
              margin 0
              padding 0.1rem 1rem
              font-size 16px
              border-left 5px solid rgba(7,17,27,0.1)
              border-1px(rgba(7,17,27,0.1))
              background #f3f5f7
            }
            .good {
              list-style none
              height 6rem
              border-1px(rgba(7,17,7,0.1))
              .good-img {
                float left
                margin 0 1rem 1rem 1rem
              }
              .good-info {
                .good-name {
                  margin 1rem 0
                  color #2c3e50
                }
                .good-price {
                  display inline-block
                  margin 0
                  color #ff1b34
                }
                .brought-num {
                  display inline-block
                  float right
                  margin 0 1.5rem
                  color #2c3e50
                }
              }
            }
          }
        }
      }
    }
  }
</style>
