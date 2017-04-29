<template>
  <div class="bg-root">
    <div class="mask" :style="maskStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'Background',

  props: {
    opacity: {
      type: Number,
      default: 0.4
    }
  },

  computed: {
    maskStyle () {
      let result = {
        opacity: this.opacity
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg-root
    position absolute
    top 0
    left 0
    z-index -1
    width 100%
    height 100%
    background #000 no-repeat url('~@/assets/images/bg.jpg') top center / auto 100%
    filter blur(3px)
    overflow hidden
    .mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background #000
</style>
