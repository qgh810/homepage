<template>
  <div class="title-box">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',

  props: {
    title: {
      type: String,
      default: 'Collections'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title-box
  position relative
  width 100%
  height 120px
  line-height 120px
  display inline-block
  margin 50px auto 100px
  .title
    position absolute
    left 50%
    transform translate(-50%)
    font-size 100px
    font-weight bold
    /*font-family 'Raleway', 'Arial', 'sans-serif'*/
    color #d94f5c
    /*text-shadow 0 0 10px #d94f5c*/
    text-shadow 0 2px #000, 0 3px #d94f5c, 10px 10px 3px #000
    padding 5px 20px
    background rgba(255,255,255,0.1)
    box-shadow 0 0 50px 50px rgba(255, 255, 255, 0.1)
    border-radius 50%
</style>
