<template>
  <div class="card">
    <div class = "header">
      <span><img src = "../../../assets/search.png" alt = "search" class = "search"/></span>
      <div class = "header-main">
        <p class = "name">我的卡券</p>
      </div>
      <span><img src = "../../../assets/sort.png" alt = "sorting" class = "sorting"/></span>
    </div>

    <div class = "dotted-line-top"></div>

    <div class = "card"></div>

    <div class = "dotted-line"></div>

    <div class = "card"></div>

    <div class = "dotted-line"></div>

    <div class = "card"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'card',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .card{
    width 100%
    .header{
      height 3rem
      width calc(100% - 1rem)
      padding 0.5rem
      margin-bottom -1.5rem
      .search{
        width 2.8rem
        height 2.8rem
        margin-right 0.5rem
        border-radius 1.4rem
        float left
      }
      .header-main{
        width calc(100% - 6.6rem)
        margin-top 0.3rem
        padding-bottom 0.3rem
        border-bottom 1px solid #222
        display inline-block
        text-align center
        float left
        .name{
          margin 0 auto
        }
      }
      .sorting{
        width 2.8rem
        height 2.8rem
        margin-left 0.5rem
        float left
      }
    }

    .dotted-line-top{
      width 50%
      height 4rem
      margin 0 auto
      border-width 2px
      border-style hidden dotted
    }

    .card{
      width 90%
      height 9rem
      margin 0 auto
      border 1px solid #222
    }

    .dotted-line{
      width 50%
      height 1.5rem
      margin 0 auto
      border-width 2px
      border-style hidden dotted
    }
  }
</style>
