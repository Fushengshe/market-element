<template>
  <div class="history">
    <p>{{msg}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'history',
    data () {
      return {
        msg: 'this is the history component!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
