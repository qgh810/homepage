<template>
  <div class="collections-title-box">
    <animate-text v-if="isShowTitle" class="title" time="1000" :value="title" spanClassName="collections-title"/>
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
  },

  data () {
    return {
      isShowTitle: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.isShowTitle = true
    }, 500)
  }
}
</script>

<style lang="stylus">
.collections-title-box
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
    font-family 'Avenir Next', 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'
    /*font-family 'Raleway', 'Arial', 'sans-serif'*/
    color #d94f5c
    /*text-shadow 0 0 10px #d94f5c*/
    text-shadow 0 2px #000, 0 3px #d94f5c, 10px 10px 3px #000
    padding 5px 20px
    background rgba(255,255,255,0.1)
    box-shadow 0 0 50px 50px rgba(255, 255, 255, 0.1)
    border-radius 50%

  .collections-title
    display inline-block
  .collections-title:nth-child(2n-1)
    animation title-animation 0.5s
  .collections-title:nth-child(2n)
    animation title-animation2 0.5s

  @keyframes title-animation
    from
      opacity 0
      transform translate(0, -30px)
    to
      opacity 1
      transform translate(0, 0)
  @keyframes title-animation2
    from
      transform translate(0, 30px)
      opacity 0
    to
      transform translate(0, 0)
      opacity 1
</style>
