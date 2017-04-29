<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/topbar/topbar'
export default {
  name: 'app',

  components: {
    Topbar
  }
}
</script>

<style lang="stylus">
// 引入公共样式
@import '~@/assets/styles/base'

#app
  width 100%
  height 100%
</style>
