<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
// 引入公共样式
@import '~@/assets/styles/base'

#app
  width 100%
  height 100%
</style>
