<template>
  <div class="page-root">
    <div class="label-wall" @click="shuffle">
      <transition-group name="labels-transition">
        <div class="label" v-for="(label, index) in labels" :key="label.name" :style="getLabelStyle(label, index)">
          <span>{{label.name}}</span>
        </div>
      </transition-group>
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
      labels: LABELS
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
    }
  },

  mounted () {
    console.log(POSITIONS)
  },

  methods: {
    shuffle () {
      this.labels.sort((a, b) => { return Math.random() > 0.5 ? -1 : 1 })
      console.log(this.labels)
    },
    /**
     * 计算当前label的style
     */
    getLabelStyle (label, index) {
      let style = {
        color: label.style.color,
        fontSize: index === 0 ? '30px' : label.style.fontSize
        // transform: `translate(${POSITIONS[index].left}, ${POSITIONS[index].top})`
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

  .label-wall
    position relative
    width 100%
    height 100%
    text-align center
    /*.center-box
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 120px
      height 120px
      line-height 120px
      border-radius 50%
      border 1px solid #000
      transition all ease 1s*/
    .label
      /*position absolute*/
      /*left 50%
      top 50%*/
      width 120px
      height 30px
      line-height 30px
      /*margin-left -60px
      margin-top -15px*/
      transition all ease 1s


/*.labels-transition-move
  transition all 1s*/
.labels-transition-enter, .labels-transition-leave-to
  opacity 0.5
.labels-transition-leave-active
  transition all 2s

</style>
