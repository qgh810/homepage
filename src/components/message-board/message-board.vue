<template>
  <div class="message-board-root">
    留言板
  </div>
</template>

<script>
export default {
  name: 'MessageBoard',

  computed: {}
}
</script>

<style lang="stylus" scoped>
.message-board-root
  position fixed
  top 100%
  left 0
  width 100%
  height 100%
  background red
  z-index 30
</style>
