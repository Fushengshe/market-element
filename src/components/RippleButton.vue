<template>
    <div class="g-button-ripple" @click="rippleClick">
        <slot></slot>
        <span class="g-ripple" :class="{animate: ripple_button.animate}"></span>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          ripple_button: {
            animate: false,
            toggle: false
          }
        }
      },
      methods: {
        rippleClick (e) {
          this.ripple_button.animate = true
          let button = e.target
          let ripple = button.querySelector('.g-ripple')
          if (ripple) {
            let d = Math.max(button.offsetHeight, button.offsetWidth)
            let x = e.layerX - ripple.offsetWidth / 2
            let y = e.layerY - ripple.offsetHeight / 2
            ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d +
                        'px; top: ' + y + 'px; left: ' + x + 'px;')
          }
          this.$nextTick(() => {
            setTimeout(() => {
              this.ripple_button.animate = false
            }, 600)
          })
        }
      }
    }
</script>

<style>
  .g-button-ripple {
    position: relative;
    height: 100%;
    width:100%;
    color: #000;
    overflow: hidden;
    text-align: center;
    background: #20A0FF;
    border-bottom:22px solid transparent;
  }
  .g-button-ripple:hover {
    background-color: #20A0FF;
    border-bottom:22px solid #1D8CE0;
  }
  .g-ripple {
    display: block;
    position: absolute;
    background: #58B7FF;
    border-radius: 100%;
    transform: scale3d(0,0,1);
  }

  .g-ripple.animate {
    animation: ripple 0.65s ease;
  }

  @keyframes ripple {
    100% {
      opacity: 0;
      transform: scale3d(2.5,2.5,1);
    }
  }
</style>
