<template>
  <div class = "repple">
    <button @click="ripple" ref="btn" class="vm-btn" >
      <!-- <span class="ripple"></span> -->
        默认按钮
      </button>
  </div>

</template>
<script>
export default {
  data () {
    return {
      timer: '1'
    }
  },
  methods: {
    ripple: function (e) {
      this.createRipple(e)// 创建dom
      this.clearRipple(e)// 清除dom
    },
    createRipple: function (e) {
                // 创建ripple
      const ripple = document.createElement('span')
      ripple.className = 'ripple'
      const btn = this.$refs.btn
                // 获取按钮宽高最大的作为水波纹的宽、高
      const max = Math.max(btn.clientWidth, btn.clientHeight)
      ripple.style.height = ripple.style.width = max + 'px'
                // 水波纹中心位置 = 鼠标的位置 - 水波纹的宽高的一半
      ripple.style.top = e.offsetY - max / 2 + 'px'
      ripple.style.left = e.offsetX - max / 2 + 'px'
                // 添加动画
      ripple.classList.add('show')
      e.target.appendChild(ripple)
      console.log(ripple)
    },
    clearRipple: function (e) { // 清除ripple
                /**
                 * 水波纹标签清除不完全 bug  记录一下
                 */
      if (!this.timer) {
        this.timer = setTimeout(() => {
          e.target.childNodes.forEach(function (self) {
            if (self.style) {
              e.target.removeChild(self)
            }
          })
          this.timer = ''
        }, 1000)
      }
      console.log(timer)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
button{
  position relative
  display inline-block
  white-space nowrap
  cursor pointer
  border none
  outline none
  margin 0
  padding 8px 25px
  font-size 14px
  overflow hidden
  background gray
  color white
}

.ripple
  position: absolute
  border-radius 100%
  transform scale(0)
  pointer-events none
.show
  animation ripple .75s ease-out forwards

@keyframes ripple
  transform scale(2)
  opacity 0

</style>
