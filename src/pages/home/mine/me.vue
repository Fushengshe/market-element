<template>
  <div class="me">
    <div class="header">
      <span @click="dialogVisible = true"><img src="http://temp.im/45x45" alt="avatar" class="avatar"/></span>
      <div class="header-main">
        <p class="name">{{ this.$store.state.username }}</p>
      </div>
      <span><img src="../../../assets/message.png" alt="message" class="message"/></span>

      <el-dialog title="更换头像" :visible.sync="dialogVisible" size="large">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div class="advertisement">
      <img src="http://temp.im/300x200" alt="advertisement" class="advertisement-img"/>
    </div>

    <div class="selects">
      <el-row :gutter="20" v-for="(item, key) in items" :key="key">
        <el-col :span="8" v-for="(i, key) in item.item" :key="key">
          <router-link :to="{ path: i.i[1].router }" class="router">
            <div class="grid-content bg-purple">
              <img src="http://temp.im/45x45" alt="me-icon" class="me-icon"/>
              {{ i.i[0].id }}
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>

    <div class="footer">
      <p class="slogan">2017 乐易购 Present</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Row, Col, Dialog} from 'element-ui'
  export default {
    name: 'me',
    data () {
      return {
        dialogVisible: false,
        items: [
          {
            item: [
              {i: [{id: '我的订单'}, {router: '/order'}]},
              {i: [{id: '我的收藏'}, {router: '/collection'}]},
              {i: [{id: '我的足迹'}, {router: '/history'}]}
            ]
          },
          {
            item: [
              {i: [{id: '我的卡券'}, {router: '/card'}]},
              {i: [{id: '设置'}, {router: '/setting'}]},
              {i: [{id: '关于'}, {router: '/about'}]}
            ]
          }
        ]
      }
    },
    components: {
      'el-row': Row,
      'el-col': Col,
      'el-dialog': Dialog
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header {
    height 3rem
    width calc(100% - 1rem)
    padding 0.5rem
    margin-bottom 1.3rem
    .avatar {
      width 2.8rem
      height 2.8rem
      margin-right 0.5rem
      border-radius 1.4rem
      float left
    }
    .header-main {
      width calc(100% - 6.6rem)
      margin-top 0.3rem
      padding-bottom 0.3rem
      border-bottom 1px solid #222
      display inline-block
      text-align center
      float left
      .name {
        margin 0 auto
      }
    }
    .message {
      width 2.8rem
      height 2.8rem
      margin-left 0.5rem
      float left
    }
  }

  .advertisement {
    text-align center
    margin-bottom 2rem
    .advertisement-img {
      width 85%
    }
  }

  .selects {
    width 85%
    margin 0 auto
    .el-row {
      margin-bottom 20px
      &:last-child {
        margin-bottom 0
      }
      .el-col {
        border-radius 4px
        .router {
          text-decoration none
          color #000
        }
        .bg-purple-dark {
          background #99a9bf
        }
        .bg-purple {
          background #d3dce6
        }
        .bg-purple-light {
          background #e5e9f2
        }
        .grid-content {
          font-size 13px
          text-align center
          padding 0.5rem 0 0.5rem 0
          border-radius 4px
          width 100%
          overflow hidden
          .me-icon {
            display block
            margin 0.4rem auto
          }
        }
        /*.grid-content:after{  自适应正方形
          content ''
          display block
          margin-top 100%
        }*/
      }
    }
  }

  .footer {
    width 100%
    text-align center
    position absolute
    bottom 8.5vh
    .slogan {
      font-size 12px
      margin 0
    }
  }
</style>
