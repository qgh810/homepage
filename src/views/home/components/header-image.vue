<template>
  <div class="header-image-root">
    <transition name="header-image-transition">
      <div class="header-image" v-show="show">
        <img src="~@/assets/images/header-image.jpeg" alt="" width="100%" height="100%">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderImage',

  data () {
    return {
      show: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.show = true
    }, 500)
  }
}
</script>

<style lang="stylus" scoped>
.header-image-root
  margin 0 auto
  width 25vh
  height 25vh
.header-image
  width 100%
  height 100%
  border 5px solid rgba(255,255,255,0.7)
  border-radius 50%
  box-shadow 2px 2px 5px 5px rgba(0,0,0,0.2)
  overflow hidden
  box-sizing border-box

.header-image-transition-enter-active, .header-image-transition-leave-active
  transition all .5s
.header-image-transition-enter, .header-image-transition-leave-to
  transform translateY(-10px)
  opacity 0
</style>
