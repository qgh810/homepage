<template>
  <div class="bg-root">
    <div class="background" :style="backgroundStyle">
    </div>
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

  data () {
    return {
      position: {
        x: -2,
        y: -2
      }
    }
  },

  computed: {
    backgroundStyle () {
      let result = {
        left: `${this.position.x}%`,
        top: `${this.position.y}%`
      }
      return result
    },
    maskStyle () {
      let result = {
        opacity: this.opacity
      }
      return result
    }
  },

  mounted () {
    this.addEventListener()
  },

  methods: {
    addEventListener () {
      const time = 100
      var open = true
      let { clientWidth, clientHeight } = document.body
      document.addEventListener('mousemove', (e) => {
        if (!open) return
        let {pageX, pageY} = e
        let left = -2 - (pageX - clientWidth / 2) / clientWidth * 2
        let top = -2 - (pageY - clientHeight / 2) / clientHeight * 2
        this.position.x = left
        this.position.y = top
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
    z-index -1
    width 100%
    height 100%
    filter blur(3px)
    overflow hidden
    .background
      position absolute
      width 104%
      height 104%
      background #000 no-repeat url('~@/assets/images/bg.jpg') top center / auto 100%
      transform scale(1.05)
      transition all ease 0.3s

    .mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background #000
</style>
