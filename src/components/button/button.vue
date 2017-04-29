<template>
  <button class="button-root" :class="rootClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'ghost'
    }
  },

  computed: {
    rootClass () {
      return this.type
    }
  }
}
</script>

<style lang="stylus">

.ghost
  background none
  border 1px solid #fff
  color #fff
</style>
