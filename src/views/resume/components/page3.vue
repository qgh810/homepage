<template>
  <div class="page-root">
    <div class="message-box">
      <span>技术栈</span>
      <p>已经掌握或者基本掌握的技术名称</p>
    </div>
    <div class="label-wall" @click="shuffle">
      <div class="center-box">
        <div
          class="label"
          v-for="(label, index) in labels"
          :key="label"
          :style="getLabelStyle(label, index)"
          @click="onSelectLabel(label)">
          <span>{{label.name}}</span>
        </div>
        <div class="selected-icon">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { LABELS, POSITIONS } from './data'

const PAGE_NUMBER = 3
export default {
  name: `Page${PAGE_NUMBER}`,

  data () {
    return {
      selectedLabel: null,
      labels: LABELS,
      positions: POSITIONS
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

    currentLabel () {
      return this.selectedLabel || this.labels[0]
    },
    currentLabelIndex () {
      return this.labels.indexOf(this.currentLabel)
    }
  },

  watch: {
    currentPageShowwing (val) {
      if (val) {
        this.initAnimationTid = setTimeout(() => {
          this.shuffle()
        }, 300)
      } else {
        window.clearInterval(this.initAnimationTid)
      }
    }
  },

  methods: {
    /**
     * 监听选择某个标签
     */
    onSelectLabel (label) {
      this.selectedLabel = label
    },

    /**
     * 乱序重排
     */
    shuffle () {
      let [...positions] = POSITIONS
      positions.sort((a, b) => { return Math.random() > 0.5 ? -1 : 1 })
      this.positions = positions
    },

    /**
     * 计算当前label的style
     */
    getLabelStyle (label, index) {
      let isCurrentLabel = this.currentLabel === label
      let style = {
        color: label.style.color,
        fontSize: label.style.fontSize,
        left: isCurrentLabel ? '0' : this.positions[index].left,
        top: isCurrentLabel ? '0' : this.positions[index].top
      }
      return style
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-root
  position relative
  width 100%
  height 100%
  overflow hidden
  text-align center
  color #413c38
  user-select none
  padding-top 80px
  box-sizing border-box

  .message-box
    position absolute
    top 0
    left 0
    width 100%
    height 80px
    &>span
      font-size 30px
      color #925b4b
    &>p
      font-size 15px
      color #999

  .label-wall
    position relative
    width 100%
    height 100%
    text-align center

    .center-box
      position absolute
      top 50%
      left 50%
      transform translate(0, -50%)
      width 30px
      height 30px
      border-radius 50%
      transition all ease 1s
      text-align center
      .selected-icon
        position absolute
        top 35px
        left -6px
        width 0px
        height 0px
        border-left 6px solid transparent
        border-right 6px solid transparent
        border-bottom 6px solid #925b4b
    .label
      position absolute
      display inline-block
      width 120px
      height 30px
      margin-left -60px
      line-height 30px
      transition all ease 0.8s
      &>span
        cursor pointer
      &:hover
        text-decoration underline
        /*font-weight bold*/
</style>
