<template>
  <div class="resume-roots">
    <div class="content-container">
      <div class="title" :class="{hide: !isShowTitle}">
        <span>RESUME</span>
      </div>

      <div class="resume-page-container" @mouseenter="restore" @mouseleave="twist">
        <div class="resume-page">
          <div class="resume-page-block">
            <div class="title"><span>基本信息</span></div>
          </div>
          <div class="resume-page-block">
            <span v-for="n in 100">{{n}} </span>
          </div>
          <div class="resume-page-block">
            <span v-for="n in 100">{{n}} </span>
          </div>
          <div class="resume-page-block">
            <span v-for="n in 100">{{n}} </span>
          </div>
        </div>
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
      scale: 30,
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
    background linear-gradient(0, rgba(255,255,255,0.1), rgba(255, 255, 255, 0.4))
    background -moz-linear-gradient(rgba(255, 255, 255, 0.4), rgba(255,255,255,0.1))

    .content-container
      position relative
      width 100%
      &>.title
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
      width 1000px
      overflow hidden
      margin 0 auto
      padding 50px
      box-sizing border-box
      z-index 1
      .resume-page
        position relative
        width 100%
        background #fff
        &:before
        &:after
          content ''
          display block
          position absolute
          left 0
          top 0
          z-index -1
          width 100%
          height 100%
          background #000
          box-shadow 0px 3px 5px 10px rgba(0,0,0,0.5)
        &:before
          transform scale(0.98) rotate(-1deg)
        &:after
          transform scale(0.98) rotate(1deg)
      .resume-page-block
        position relative
        width 100%
        min-height 200px
        background #fff
        color #000
        /*filter url(#filter-test)*/
        background linear-gradient(0, #eaeae8, #fff)
        background -moz-linear-gradient(#fff, #eaeae8)

        .title
          height 50px
          line-height 70px
          font-size 35px
          padding-left 20px
          box-sizing border-box
          text-align left


</style>
