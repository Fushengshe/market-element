<template>
  <div class="home">
    <div class = "header">
      <span class = "city">秦皇岛</span>
      <el-input placeholder="" icon="search" class = "search" v-model="search" :on-icon-click="handleIconClick"> </el-input>
    </div>

    <!-- <div class = "carousel">      需求错误，不要轮播，先留一下
      <el-carousel :interval="4000" type="card" height="12rem">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->

    <div class = "display">
      <el-row :gutter="15">
        <el-col  :span="8" v-for="(o, index) in 3" :key="o">
          <img src="http://temp.im/112x100" alt="display of stores" class = "display-img">
        </el-col>
      </el-row>
    </div>

    <div class = "card-items"  v-for="(o, index) in 2" :key="o">
      <div class = "card-item">
        <el-card :body-style="{ padding: '0px'}">
          <img src="http://temp.im/300x150" class="image">
          <div style="padding: 14px;">
            <span>占位字符</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Row, Col, Card} from 'element-ui'
  export default {
    name: 'home',
    data () {
      return {
        search: '',
        currentDate: new Date(),
        index: 0
      }
    },
    components: {
      'el-row': Row,
      'el-col': Col,
      'el-card': Card
      // 'el-carousel': Carousel,
      // 'el-carousel-item': CarouselItem
    },
    methods: {
      handleIconClick (ev) {
        console.log(ev)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home{
    width 100%
    .header{
      height 6vh
      padding-top 2vh
      margin-bottom 2vh
      .city{
        display inline-block
        min-height 36px
        line-height 36px
        width 20%
        text-align center
      }
      .search{
        display inline-block
        width 77%
        margin-right 3%
        float right
        border none
      }
    }

    .display{
      width 90%
      margin 1.2rem auto
      .display-img{
        width 100%
        border-radius 5px
      }
    }

    /*.carousel{
      height 13.2rem
      margin-bottom 4vh
      .el-carousel__item h3 {
        color #475669
        font-size 14px
        opacity 0.75
        line-height 200px
        margin 0
      }
      .el-carousel__item:nth-child(2n) {
        background-color #99a9bf
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color #d3dce6
      }
    }*/

    .card-items{
      width 100%
      display flex
      align-items center
      justify-content center
      .card-item{
        display block
        width 90%
        margin-bottom 4vh
        .image {
          width 100%
          display block
        }
        .bottom {
          margin-top 13px
          line-height 12px
          .time {
            font-size 13px
            color #999
          }
          .button {
            padding 0
            float right
          }
        }
        .clearfix:before,
        .clearfix:after {
            display table
            content ""
        }
        .clearfix:after {
            clear both
        }
      }
    }
  }

</style>
