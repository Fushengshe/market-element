<template>
  <div class="not-found">
    <h1>{{msg}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'not-found',
    data () {
      return {
        msg: 'this pages are not found!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
