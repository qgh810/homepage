<template>
  <div class="page-root">
    <div class="container-box logo-box">
      <div class="logo" :class="logoClassName"></div>
    </div>
    <div class="container-box name-box"> <span>{{selectLabel}}</span> </div>
    <div class="container-box text-box">
      <animate-text v-if="isShowText" :value="currentLabelMessage.message"/>
    </div>
  </div>
</template>

<script>
import { LABEL_DETAILS } from './data'
const PAGE_NUMBER = 4
export default {
  name: 'Page' + PAGE_NUMBER,

  data () {
    return {
      isShowText: false
    }
  },

  computed: {
    // 当前书本打开的页码
    currentShowPageNumbers () {
      let currentPageNumber = this.$parent.currentShowPageCount * 2
      return [currentPageNumber - 1, currentPageNumber]
    },
    // 当前页面是否已经打开
    currentPageShowwing () {
      return this.currentShowPageNumbers.indexOf(PAGE_NUMBER) >= 0
    },
    // 获取page3里面选中的标签
    selectLabel () {
      let result = this.$parent.$slots.page3[0].componentInstance.currentLabel.name
      return result
    },
    currentLabelMessage () {
      return LABEL_DETAILS[this.selectLabel]
    },
    logoClassName () {
      return this.selectLabel.split('/')[0].split('.')[0]
    }
  },

  watch: {
    // 监听当前页面是否可见
    currentPageShowwing (val) {
      val && this.playTextAnimation(1000)
    },
    // 监听第三页选择的标签变化
    selectLabel () {
      this.playTextAnimation(1000)
    }
  },

  mounted () {
  },

  methods: {
    /**
     * 播放文字动画
     * @type {[type]}
     */
    playTextAnimation (time = 0) {
      this.isShowText = false
      window.clearTimeout(this.playTextAnimationTid)
      this.playTextAnimationTid = setTimeout(() => {
        this.isShowText = true
      }, time)
    }
  }
}
</script>

<style lang="stylus" scoped>

.page-root
  position relative
  width 100%
  height 100%
  box-sizing border-box
  color #413c38
  .message-box
    width 100%
    height 100%

  .container-box
    margin 10px auto
  .logo-box
    width 160px
    height 160px
    /*background red*/

    .logo
      width 100%
      height 100%
      background no-repeat center top / 100%
  .name-box
    line-height 30px
    font-size 25px
    text-align center
  .text-box
    width 100%
    height 120px
    line-height 32px
    padding-top 20px
    padding-left 30px
    box-sizing border-box
    color #999
    font-size 15px

  .logo.vue
    background-image url('~@/assets/images/logos/vue.png')
  .logo.html
    background-image url('~@/assets/images/logos/html.png')
  .logo.html5
    background-image url('~@/assets/images/logos/html5.png')
  .logo.javascript
    background-image url('~@/assets/images/logos/javascript.png')
  .logo.css
    background-image url('~@/assets/images/logos/css.png')
  .logo.css3
    background-image url('~@/assets/images/logos/css3.png')
  .logo.photoshop
    background-image url('~@/assets/images/logos/photoshop.png')
  .logo.stylus
    background-image url('~@/assets/images/logos/stylus.png')
  .logo.es6
    background-image url('~@/assets/images/logos/es6.png')
  .logo.zepto
    background-image url('~@/assets/images/logos/zepto.png')
  .logo.react-native
    background-image url('~@/assets/images/logos/react-native.png')
  .logo.echarts
    background-image url('~@/assets/images/logos/echarts.png')
  .logo.node
    background-image url('~@/assets/images/logos/node.png')
  .logo.github
    background-image url('~@/assets/images/logos/github.png')
  .logo.webpack
    background-image url('~@/assets/images/logos/webpack.png')
</style>
