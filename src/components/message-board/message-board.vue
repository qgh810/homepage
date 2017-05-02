<template>
  <transition name="message-board">
    <div class="message-board-root" v-show="show">
      留言板
    </div>
  </transition>
</template>

<script>
import store from '@/store'

export default {
  name: 'MessageBoard',

  computed: {
    show () {
      return store.state.messageBoard.isShow
    }
  }
}
</script>

<style lang="stylus" scoped>
.message-board-root
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background red
  z-index 30

.page-transition-enter-active, .page-transition-leave-active
  transition all .5s
.page-transition-enter, .page-transition-leave-to
  top 100%
</style>
