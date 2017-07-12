<template>
  <div class="card">
    <div class="header">
      <span class = "search-menu" @click="dialogVisible = true">
        <img src="../../../assets/search.png" alt="search" class="search"/>
      </span>

      <div class="header-main">
        <p class="name">我的卡券</p>
      </div>

      <span class="sorting-menu" v-clickOutside="closeEvent">
        <img src="../../../assets/sort.png" alt="sorting" class="sorting-btn" @click="handleMenuDisplay()"/>

        <div class="menu-warpper" v-if="menuVisible">
          <p class="menu-text" @click="sortByFirstLetter()">按店铺首字母排序</p>
          <p class="menu-text" @click="sortByDenomination()">按面额排序</p>
        </div>
      </span>
    </div>

    <div class = "search-panel">
      <el-dialog title="输入店铺名搜索卡券" :visible.sync="dialogVisible" size="large" :before-close="handleClose">
        <el-input class = "search-input" placeholder="请输入店铺名" icon="search" v-model="searchInput" :on-icon-click="handleIconClick"></el-input>

        <div class="card" v-if="searchCardVisible">
          <h2>店铺名称：{{ card[id].name }}</h2>
          <p>面值：{{ card[id].denomination }}</p>
          <router-link to="store">
            <el-button type="primary" class = "to-store-button">前往店铺</el-button>
          </router-link>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">返 回</el-button>
        </span>
      </el-dialog>
    </div>


    <div class="dotted-line-top"></div>

    <div class="card">
      <h2>店铺名称：{{ card[0].name }}</h2>
      <p>面值：{{ card[0].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>

    <div class="dotted-line"></div>

    <div class="card">
      <h2>店铺名称：{{ card[1].name }}</h2>
      <p>面值：{{ card[1].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>

    <div class="dotted-line"></div>

    <div class="card">
      <h2>店铺名称：{{ card[2].name }}</h2>
      <p>面值：{{ card[2].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>

    <div class="dotted-line"></div>

    <div class="card">
      <h2>店铺名称：{{ card[3].name }}</h2>
      <p>面值：{{ card[3].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>

    <div class="dotted-line"></div>

    <div class="card">
      <h2>店铺名称：{{ card[4].name }}</h2>
      <p>面值：{{ card[4].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>

    <div class="dotted-line"></div>

    <div class="card">
      <h2>店铺名称：{{ card[5].name }}</h2>
      <p>面值：{{ card[5].denomination }}</p>
      <router-link to="store">
        <el-button type="primary" class = "to-store-button">前往店铺</el-button>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Dialog, Input, Button } from 'element-ui'
  export default {
    name: 'card',
    data () {
      return {
        menuVisible: false,
        searchCardVisible: false,
        dialogVisible: false,
        id: 0,
        searchInput: '',
        chineseName: [],
        card: [
          {
            name: '小米',
            denomination: 10,
            status: 'true'
          },
          {
            name: '魅族',
            denomination: 8,
            status: 'true'
          },
          {
            name: 'vivo',
            denomination: 40,
            status: 'true'
          },
          {
            name: 'sony',
            denomination: 20,
            status: 'true'
          },
          {
            name: '1345',
            denomination: 30,
            status: 'true'
          },
          {
            name: '14',
            denomination: 30,
            status: 'true'
          }
        ]
      }
    },
    components: {
      'el-dialog': Dialog,
      'el-input': Input,
      'el-button': Button
    },
    directives: {
      clickOutside: {
        // 自定义指令，监听事件，没搞懂以后遇到了回来看
        priority: 700,
        bind: (el, binding, vNode) => {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            let compName = vNode.context.name
            let warn = '[Vue-clickOutside:] provided expression ' + binding.expression + ' is not a function, but has to be'
            if (compName) {
              warn += 'Found in component ' + compName
            }
            console.warn(warn)
          }
          // Define Handler and cache it on the element
          let handler = (e) => {
            if (!el.contains(e.target) && el !== e.target) {
              binding.value(e)
            }
          }
          console.log('binding')
          el.__vueClickOutside__ = handler
          // add Event Listeners
          document.body.addEventListener('click', handler)
        },
        unbind: (el, binding) => {
          // Remove Event Listeners
          // 监听移除不起作用，不知道是哪里出了问题
          console.log('unbind')
          el.__vueClickOutside__ = null
          document.body.removeEventListener('click', el.__vueClickOutside__)
        }
      }
    },
    methods: {
      handleMenuDisplay () {
        this.menuVisible = !this.menuVisible
        console.log(this.menuVisible)
      },
      hide () {
        this.menuVisible = false
      },
      closeEvent () {
        console.log('close event called')
        this.hide()
      },
      handleIconClick (ev) {
        if (!this.searchInput) {
          this.$message.error('请输入店铺名称！')
          return
        }
        let storeName = this.searchInput
        let len = this.card.length
        let flag = -1

        for (let i = 0; i < len; i++) {
          if (this.card[i].name === storeName) {
            flag = i
          }
        }

        if (flag !== -1) {
          this.id = flag
          this.searchCardVisible = true
        }
      },
      handleClose (done) {
        this.searchCardVisible = false
        this.searchInput = ''
        done()
      },
      sortByFirstLetter () {
        let chineseReg = /^[\u4e00-\u9fa5]{0,}$/
        let len = this.card.length

        this.card.sort((a, b) => a.name.localeCompare(b.name))

        for (let j = 0; j < len; j++) {
          if (chineseReg.test(this.card[j].name)) {
            this.chineseName.push(this.card[j])
            this.card.splice(j, 1)
            // 划重点，这两个长度一定要减，以为card数组中的项目减少了
            j--
            len--
          }
        }
        this.card = this.card.concat(this.chineseName)
        this.hide()
      },
      sortByDenomination () {
        this.card.sort((a, b) => {
          return b.denomination - a.denomination
        })
        this.hide()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .card {
    width 100%
    .header {
      height 3rem
      width calc(100% - 1rem)
      padding 0.5rem
      margin-bottom -1.5rem
      .search {
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
      .sorting-btn {
        width 2.8rem
        height 2.8rem
        margin-left 0.5rem
        float left
      }
      .sorting:hover {

      }
      .menu-warpper {
        border 1px solid #222
        background #fff
        text-align center
        position absolute
        right 1rem
        top 3.4rem
        .menu-text {
          height 1.9rem
          width 8rem
          font-size 14px
          line-height 1.9rem
          margin 0
        }
      }
      .menu-text:active {
        background #20A0FF
      }
      .menu-warpper:before {
        position absolute
        top -7px
        left 90%
        width 0
        height 0
        margin-left -10px
        content ""
        border-bottom 6px solid #000
        border-left 6px solid transparent
        border-right 6px solid transparent
      }
      .menu-warpper:after {
        position absolute
        top -6px
        left 90%
        width 0
        height 0
        margin-left -10px
        content ""
        border-bottom 6px solid #fff
        border-left 6px solid transparent
        border-right 6px solid transparent
      }
    }

    .search-panel{
      .search-input{
        margin-bottom 2.5rem
      }
    }

    .dotted-line-top {
      width 50%
      height 4rem
      margin 0 auto
      border-width 2px
      border-style hidden dotted
    }

    .card {
      width 90%
      height 9rem
      text-align center
      margin 0 auto
      border 1px solid #222
      border-radius 12px
      .to-store-button{
        float right
        margin -1rem 1.5rem
        // 这里为什么要是负值没搞懂
      }
    }

    .dotted-line {
      width 50%
      height 1.5rem
      margin 0 auto
      border-width 2px
      border-style hidden dotted
    }
  }
</style>
