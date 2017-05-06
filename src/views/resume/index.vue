<template>
  <div class="resume-roots">
    <div class="content-container">
      <div class="title" :class="{hide: !isShowTitle}">
        <span>RESUME</span>
      </div>

      <div class="resume-page-container">
        <div class="pages-container">

          <!-- 第一页 -->
          <div class="page" :style="{
            transform: 'rotateY(0deg)'
            }"
            >
            <div class="front">
              前言
            </div>
          </div>

          <div class="page" v-for="n in pageCount"
           :style="getPageStyle(n)"
            >
            <div class="front" @click="currentShowPageNumber--">
              页码{{n * 2}}
            </div>
            <div class="back" @click="currentShowPageNumber++">
              页码{{n * 2 -1}}
            </div>
          </div>

          <!-- 最后一页 -->
          <div class="page" :style="{
            transform: 'rotateY(180deg)'
            }"
            >
            <div class="back">
              谢谢
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import animationData from '@/utils/animation-data'

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
      currentShowPageNumber: 1,
      pageCount: 10
    }
  },

  mounted () {
    setTimeout(() => {
      this.isShowTitle = true
    }, 200)

    // setInterval(() => {
    //   this.currentShowPageNumber++
    //   if (this.currentShowPageNumber === 4) {
    //     this.currentShowPageNumber = 1
    //   }
    // }, 2000)
  },

  methods: {
    getPageStyle (pageNumber) {
      let transform = ''
      if (pageNumber >= this.currentShowPageNumber) {
        transform = `rotateY(${179 - (this.pageCount - pageNumber) / 10}deg)`
      } else {
        transform = `rotateY(${pageNumber / 10}deg)`
      }
      return { transform }
    }
  }
}
</script>

<style lang="stylus" scoped>

  .resume-roots
    width 200%
    padding-right 100%
    box-sizing border-box
    height 100%
    color #fff
    text-align center
    overflow auto
    background linear-gradient(0, rgba(255,255,255,0.1), rgba(255, 255, 255, 0.4))
    background -moz-linear-gradient(rgba(255, 255, 255, 0.4), rgba(255,255,255,0.1))

    .content-container
      position relative
      width 100%
      &>.title
        margin-top 50px
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
      width 900px
      height 600px
      margin 0 auto
      padding 50px
      box-sizing border-box
      /*z-index 1*/
      background no-repeat url('~@/assets/images/book-bg.png') center / 900px 600px

      .pages-container
        position absolute
        left 42px
        top 24px
        width 801px
        height 498px
        padding 10px
        box-sizing border-box
        border-radius 5px
        transform-style preserve-3d
        perspective 2000px
        .page
          position absolute
          top 0
          left 0
          width 50%
          height 100%
          text-align left
          transform-origin right
          perspective 2000px
          transform-style preserve-3d
          transition all ease 0.4s
          .front
          .back
            position absolute
            top 0
            width 100%
            height 100%
            background #f8f8f3
            color #1f1f1f
            padding 20px
            box-sizing border-box
            overflow hidden
            &:after
              content ''
              position absolute
              top 0
              width 1px
              height 100%
              background none
              box-shadow 0 0 100px 20px rgba(0,0,0,0.4)
          .front
            border-radius 5px 0 0 5px
            &:after
              right -1px

          .back
            border-radius 0 5px 5px 0
            border-left 3px solid rgba(0,0,0,0.3)
            transform translateZ(-1px) rotateY(180deg)
            &:after
              left -1px



</style>
