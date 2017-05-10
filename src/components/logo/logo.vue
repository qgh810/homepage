<template>
  <div class="logo-root">
    <img src="~@/assets/images/logo.png" alt="logo" width="100%" height="100%">
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="stylus" scoped>
.logo-root
  width 160px
  height 120px
  margin 50px auto 20px
  overflow hidden
  text-align center
  text-shadow 3px 3px 3px rgba(0,0,0,0.6)
  opacity 0.6
</style>
