<template>
  <div class="header-image-root">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters" v-if="isShowRipple">
			<defs>
				<filter id="filter-ripple">
					<feImage xlink:href="../static/images/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
					<feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
					<feComposite operator="in" in2="ripple"></feComposite>
					<feComposite in2="SourceGraphic"></feComposite>
				</filter>
			</defs>
		</svg>
    <transition name="header-image-transition">
      <div class="header-image" v-show="show" @mouseenter="showSvgRipple" @mousedown="showSvgRipple">
        <img src="~@/assets/images/header-image2.jpg" alt="头像" width="100%" height="100%">
      </div>
    </transition>

  </div>
</template>

<script>
import browser from '@/utils/browser'
import store from '@/store'
import animationData from '@/utils/animation-data'

export default {
  name: 'HeaderImage',

  data () {
    return {
      show: false,
      showingRipple: false
    }
  },

  computed: {
    isShowRipple () {
      let result = !store.state.messageBoard.isShow && !browser.versions.mobile
      return result
    }
  },

  mounted () {
    // 延时显示头像
    setTimeout(() => {
      this.show = true
    }, 500)
    // 触发涟漪
    setTimeout(() => {
      this.showSvgRipple({offsetX: 0, offsetY: 0})
    }, 3000)
    // 每10秒显示涟漪
    this.rippleTimeId = setInterval(() => {
      this.showSvgRipple({offsetX: 0, offsetY: 0})
    }, 10000)
  },

  beforeDestroy () {
    // 定时器
    window.clearInterval(this.rippleTimeId)
  },

  methods: {
    /**
     * 显示涟漪动画
     */
    async showSvgRipple (e) {
      if (!this.isShowRipple) return
      if (this.showingRipple) return
      this.showingRipple = true

      var turb = document.querySelector('#filter-ripple feImage')
      const width = 800
      const height = 800

      let oldX = e.offsetX
      let oldY = e.offsetY
      let time = 1200
      // 执行动画
      let setX = animationData.set(turb.attributes.x, 'value', oldX, oldX - width / 2, time)
      let setY = animationData.set(turb.attributes.y, 'value', oldY, oldY - height / 2, time)
      let setW = animationData.set(turb.attributes.width, 'value', 0, width, time)
      let setH = animationData.set(turb.attributes.height, 'value', 0, height, time)
      // 等待动画执行完毕
      await setX
      await setY
      await setW
      await setH

      // 延时还原
      setTimeout(() => {
        turb.attributes.x.value = oldX
        turb.attributes.y.value = oldY
        turb.attributes.width.value = 0
        turb.attributes.height.value = 0
        this.showingRipple = false
      }, 300)
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
  z-index -1
.header-image-transition-enter-active, .header-image-transition-leave-active
  transition all .5s
.header-image-transition-enter, .header-image-transition-leave-to
  transform translateY(-10px)
  opacity 0
</style>
