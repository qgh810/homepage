<template>
  <div class="book-root">
    <div class="pages-container">

      <!-- 第一页 -->
      <div class="page" :style="{ transform: 'rotateY(0deg)' }">
        <div class="front">
          <slot name="page1">
            首页
          </slot>
        </div>
      </div>

      <!-- 中间页面 -->
      <div class="page" v-for="n in pageCount"
       :style="getPageStyle(n)"
        >
        <div class="front">
          <slot :name="`page${n * 2 + 1}`">
            页码{{n * 2}}
          </slot>
          <div class="control" @click="currentShowPageCount--">
            <span>prev</span>
          </div>
        </div>
        <div class="back">
          <slot :name="`page${n * 2}`">
            页码{{n * 2 -1}}
          </slot>
          <div class="control" @click="currentShowPageCount++">
            <span>next</span>
          </div>
        </div>
      </div>

      <!-- 最后一页 -->
      <div class="page" :style="{ transform: 'rotateY(180deg)' }">
        <div class="back">
          <slot :name="`page${pageSlotCount}`">
            尾页
          </slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',

  props: {
    // 默认页面页码
    defaultPageNumber: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      // 当前显示的纸张次数
      currentShowPageCount: 1
    }
  },

  computed: {
    // page的slot数量
    pageSlotCount () {
      let pageNames = Object.keys(this.$slots).filter(slotName => slotName.indexOf('page') === 0)
      let pageSlotCount = pageNames.length
      if (pageSlotCount % 2 !== 0) {
        console.warn('slot="pageXXX"的数量必须是双数, 否则最后一个将被自动丢弃')
      }
      return pageSlotCount
    },
    // 纸张数 - 1
    pageCount () {
      return parseInt((this.pageSlotCount - 2) / 2)
    }
  },

  mounted () {
    this.initPageNumber()
  },

  methods: {
    /**
     * 初始化默认页面
     */
    initPageNumber () {
      // let currentShowPageCount
      if (this.defaultPageNumber > this.pageSlotCount) {
        return console.warn(`默认页码${this.defaultPageNumber}不合法, 超过页面总数`)
      }
      if (this.defaultPageNumber < 1) {
        return console.warn(`默认页码${this.defaultPageNumber}不合法, 超过页面总数`)
      }
      this.currentShowPageCount = parseInt((this.defaultPageNumber + 1) / 2)
    },
    /**
     * 获取页面样式
     */
    getPageStyle (pageNumber) {
      let transform = ''
      if (pageNumber >= this.currentShowPageCount) {
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
.book-root
  position relative
  width 900px
  height 600px
  margin 0 auto
  padding 50px
  box-sizing border-box
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
        padding 30px
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
        .control
          position absolute
          top 0
          width 80px
          height 80px
          line-height 130px
          text-align center
          background #925b4b
          font-size 12px
          color #fff
          cursor pointer
          user-select none
      .front
        border-radius 5px 0 0 5px
        &:after
          right -1px
        .control
          transform translate(-50%, -50%) rotate(-45deg)
          left 0

      .back
        border-radius 0 5px 5px 0
        border-left 3px solid rgba(0,0,0,0.3)
        transform translateZ(-1px) rotateY(180deg)
        &:after
          left -1px
        .control
          transform translate(50%, -50%) rotate(45deg)
          right 0


</style>
