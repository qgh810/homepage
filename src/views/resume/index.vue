<template>
  <div class="resume-roots">
    <!-- <div class="header-container">
      <div class="menu" v-for="menu in menus"><span>{{menu}}</span></div>
      <div class="title"><span>RESUME</span></div>
    </div> -->
    <div class="content-container">
      <div class="title" :class="{hide: !isShowTitle}">
        <span>RESUME</span>
      </div>

      <div class="resume-page-container" @mouseenter="restore" @mouseleave="twist">
        <div class="resume-page">
          <span v-for="n in 300">{{n}} </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
          <defs>
            <filter id="filter-test">
              <feImage xlink:href="../static/images/svg-test.png" x="0" y="0" width="700" height="1400" result="ripple"></feImage>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" :scale="scale" result="dm" />
              <feComposite operator="in" in2="ripple"></feComposite>
              <!-- <feComposite in2="SourceGraphic"></feComposite> -->
            </filter>
          </defs>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
import animationData from '@/utils/animation-data'

export default {
  name: 'Resume',

  data () {
    return {
      isShowTitle: false,
      menus: [
        '基本信息',
        '专业技能',
        '工作经历',
        '自我评价'
      ],
      scale: 0,
      twisting: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.isShowTitle = true
    }, 200)
    setTimeout(() => {
      this.twist()
    }, 2000)
  },

  methods: {
    async twist () {
      if (this.twisting) return
      if (this.scale !== 0) return
      this.twisting = true
      await animationData.set(this, 'scale', this.scale, 30, 300)
      this.twisting = false
    },
    async restore () {
      if (this.twisting) return
      if (this.scale !== 30) return
      this.twisting = true
      await animationData.set(this, 'scale', this.scale, 0, 300)
      this.twisting = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .svg-filters
    position absolute

  .resume-roots
    width 200%
    padding-right 100%
    box-sizing border-box
    height 100%
    color #fff
    /*color rgba(255,255,255,0.6)*/
    text-align center
    overflow auto

    /*.header-container
      position absolute
      top 0
      left 0
      width 100%
      height 50px
      background rgba(255,255,255,0.05)
      text-align center
      .title
        display inline-block
        height 80px
        line-height 80px
        font-size 40px
        color rgba(255,255,255,0.8)

      .menu
        position absolute
        left 50%
        top 0
        margin-left -50px
        width 100px
        height 50px
        line-height 50px
        cursor pointer
        &:nth-child(1)
          transform translateX(-250%)
        &:nth-child(2)
          transform translateX(-150%)
        &:nth-child(3)
          transform translateX(150%)
        &:nth-child(4)
          transform translateX(250%)*/
    .content-container
      position relative
      width 100%
      .title
        margin-top 100px
        font-size 70px
        color transparent
        text-shadow 0px 0px 0px rgba(255,255,255,0.8), 10px 10px 3px rgba(0,0,0,0.3)
        transition all ease 0.5s
        opacity 1
        &.hide
          transfrom scale(1.2)
          text-shadow 0px 0px 2000px rgba(255,255,255,0.8), 0px 0px 0px rgba(0,0,0,0.3)
          opacity 0

      .resume-page-container
        position relative
        width 700px
        overflow hidden
        margin 0 auto
        filter url(#filter-test)
        padding 20px
        box-sizing border-box
        .resume-page
          width 100%
          background #fff
          color #000
          /*background #fff url(../../../static/images/svg-test.png)*/

</style>
