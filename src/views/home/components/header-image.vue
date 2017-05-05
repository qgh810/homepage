<template>
  <div class="header-image-root">
    <transition name="header-image-transition">
      <div class="header-image" v-show="show" @mouseenter="showSvgRipple" @mousedown="showSvgRipple">
        <img src="~@/assets/images/header-image.jpeg" alt="" width="100%" height="100%">
      </div>
    </transition>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
			<defs>
				<filter id="filter-ripple">
					<feImage xlink:href="../static/images/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
					<feComposite operator="in" in2="ripple"></feComposite>
					<feComposite in2="SourceGraphic"></feComposite>
				</filter>
			</defs>
		</svg>
  </div>
</template>

<script>
import animationData from '@/utils/animation-data'

export default {
  name: 'HeaderImage',

  data () {
    return {
      show: false,
      showingRipple: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.show = true
    }, 500)
  },

  methods: {
    async showSvgRipple (e) {
      if (this.showingRipple) return
      this.showingRipple = true

      var turb = document.querySelector('#filter-ripple feImage')
      const width = 800
      const height = 800

      let oldX = e.offsetX
      let oldY = e.offsetY
      let time = 1200
      let setX = animationData.set(turb.attributes.x, 'value', oldX, oldX - width / 2, time)
      let setY = animationData.set(turb.attributes.y, 'value', oldY, oldY - height / 2, time)
      let setW = animationData.set(turb.attributes.width, 'value', 0, width, time)
      let setH = animationData.set(turb.attributes.height, 'value', 0, height, time)

      await setX
      await setY
      await setW
      await setH

      this.showingRipple = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-image-root
  margin 0 auto
  width 25vh
  height 25vh
  filter url(#filter-ripple)
  overflow visible
.header-image
  width 100%
  height 100%
  border 5px solid rgba(255,255,255,1)
  border-radius 50%
  box-shadow 2px 2px 5px 5px rgba(0,0,0,0.1)
  overflow hidden
  box-sizing border-box

.svg-filters
  position absolute
  opacity 0
.header-image-transition-enter-active, .header-image-transition-leave-active
  transition all .5s
.header-image-transition-enter, .header-image-transition-leave-to
  transform translateY(-10px)
  opacity 0
</style>
