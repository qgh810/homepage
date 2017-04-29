<template>
  <div class="topbar-root">
    <div class="menu-btn-box"><menu-button/></div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="stylus" scoped>
  .topbar-root
    position fixed
    top 0
    left 0
    width 100%
    height 55px
    /*background rgba(0,0,0,0.2)*/
    color rgba(255,255,255,0.5)
    z-index 10

    .menu-btn-box
      position absolute
      top 15px
      left 15px
      width 30px
      height 30px

</style>
