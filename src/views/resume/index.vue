<template>
  <div class="resume-roots">
    <div class="content-container">
      <div class="title" :class="{hide: !isShowTitle}">
        <span>RESUME</span>
      </div>

      <book>
        <first-page slot="first"/>
        <div class="first" slot="page1">111</div>
        <div class="first" slot="page2">222</div>
        <div class="first" slot="page3">333</div>
        <div class="first" slot="page4">444</div>
        <div class="first" slot="page5">555</div>
        <div class="first" slot="page6">666</div>
        <div class="first" slot="last">...</div>
      </book>


    </div>
  </div>
</template>

<script>
import FirstPage from './components/first-page'
// import animationData from '@/utils/animation-data'

export default {
  name: 'Resume',

  components: {
    FirstPage
  },

  data () {
    return {
      isShowTitle: false,
      menus: [
        '基本信息',
        '专业技能',
        '工作经历',
        '自我评价'
      ]
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




</style>
