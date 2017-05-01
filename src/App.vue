<template>
  <div id="app">
    <!-- 头部 -->
    <topbar />
    <!-- 主路由挂载点 -->
    <router-view />
    <!-- svg样式定义, 不在页面显示内容 -->
    <svg-filter/>
  </div>
</template>

<script>
import Topbar from '@/components/topbar/topbar'
import SvgFilter from '@/components/svg-filter/svg-filter'

export default {
  name: 'app',

  components: {
    Topbar,
    SvgFilter
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
