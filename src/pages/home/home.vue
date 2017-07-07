<template>
  <div class="home">
    <div class="top-bar">
      <div class="location-select">
        <el-select v-model="location" placeholder="请选择">
          <el-option-group
            v-for="group in hotOptions"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
      <div class="msg-find">
        <el-input placeholder="请输入内容" v-model="find">
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="20vh">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="ad" v-for="item in adItems">
      {{item.msg}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home',
    data () {
      return {
        hotOptions: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        location: '',
        find: '',
        adItems: [{
          msg: '测试1'
        }, {
          msg: '测试2'
        }, {
          msg: '测试3'
        }, {
          msg: '测试4'
        }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home {
    margin 0 auto
    width 90vw
    .top-bar {
      display flex
      justify-content space-between
      margin 15px auto 0 auto
      .location-select {
        flex 0 0 30%
        width 30%
      }
      .msg-find {
        flex 0 0 60%
        width 60%
      }
    }
    .banner {
      margin-top 15px
    }
    .ad{
      margin 0.5em auto
      width 100%
      height 16vh
      border 1px solid #555
      border-radius 5px
    }
  }

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
</style>
