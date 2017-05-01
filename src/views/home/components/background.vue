<template>
  <div class="bg-root">
    <div class="background" :style="backgroundStyle">
    </div>
    <div class="mask" :style="maskStyle"></div>
  </div>
</template>

<script>
import browser from '@/utils/browser'

export default {
  name: 'Background',

  props: {
    maskOpacity: {
      type: Number,
      default: 0.4
    }
  },

  data () {
    return {
      position: {
        x: 50,
        y: 50
      }
    }
  },

  computed: {
    backgroundStyle () {
      let result = {
        backgroundPositionX: `${this.position.x}%`,
        backgroundPositionY: `${this.position.y}%`
      }
      return result
    },
    maskStyle () {
      let result = {
        opacity: this.maskOpacity
      }
      return result
    }
  },

  mounted () {
    // 只有在webkit内核才使用背景动画
    !browser.versions.mobile && browser.versions.chrome && this.addEventListener()
  },

  beforeDestroy () {
    // 移除鼠标事件
    document.removeEventListener('mousemove', this.mousemoveEvent)
  },

  methods: {
    addEventListener () {
      const time = 100
      var open = true
      let { clientWidth, clientHeight } = document.body
      document.addEventListener('mousemove', this.mousemoveEvent = (e) => {
        if (!open) return
        let {pageX, pageY} = e
        let x = 50 + (pageX - clientWidth / 2) / clientWidth * 10
        let y = 50 + (pageY - clientHeight / 2) / clientHeight * 100
        this.position.x = x
        this.position.y = y
        setTimeout(() => {
          open = true
        }, time)
        open = false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg-root
    position absolute
    top 0
    left 0
    /*z-index -1*/
    width 100%
    height 100%
    filter blur(3px)
    overflow hidden
    .background
      position absolute
      width 100%
      height 100%
      background #000 no-repeat url('~@/assets/images/bg.jpg') 50% 50% / auto 104%
      transition all ease 0.5s

    .mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background #000
</style>
