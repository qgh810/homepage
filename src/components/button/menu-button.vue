<template>
  <div class="menu-button-root" :class="rootClassName" @click="toggle">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      state: 1
    }
  },

  computed: {
    rootClassName () {
      return this.open ? 'close' : 'open'
    }
  },

  methods: {
    toggle () {
      this.$emit('changed', !this.open)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .menu-button-root
    position relative
    width 100%
    height 100%
    cursor pointer


    .line
      margin 16% auto
      width 100%
      height 20%
      background #fff
      border-radius 200px
      transition all ease 0.3s
      &:first-child
        margin-top 4%

    &.close
      .line1
        transition all ease 0.3s 0.05s
        transform-origin left
        transform rotate(45deg)

      .line2
        transition all ease 0.3s
        transform scale(0, 1)

      .line3
        transition all ease 0.3s 0.15s
        transform-origin left
        transform rotate(-45deg)

</style>
