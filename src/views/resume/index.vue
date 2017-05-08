<template>
  <div class="resume-roots">
    <div class="content-container">
      <!-- 标题 -->
      <div class="title" :class="{hide: !isShowTitle}">
        <span>RESUME</span>
      </div>
      <!-- 书本组件 -->
      <book v-if="isShowBook" :defaultPageNumber="3">
        <page1 slot="page1"/>
        <page2 slot="page2"/>
        <page3 slot="page3"/>
        <page4 slot="page4"/>
        <div class="first" slot="page5">555</div>
        <div class="first" slot="page6">666</div>
        <div class="first" slot="page7">777</div>
        <div class="first" slot="page8">...</div>
        <div slot="page9"></div>
        <div slot="page10"></div>
      </book>

    </div>
  </div>
</template>

<script>
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
// import animationData from '@/utils/animation-data'

export default {
  name: 'Resume',

  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },

  data () {
    return {
      isShowTitle: false,
      isShowBook: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.isShowTitle = true
    }, 200)
    setTimeout(() => {
      this.isShowBook = true
    }, 1000)
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
