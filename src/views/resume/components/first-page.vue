<template>
  <div class="first-page-root">
    <div class="image-box">
      <header-image></header-image>
    </div>
    <div class="name-box">
      <span>邱国辉</span>
    </div>
    <div class="message-box">
      <p>
        <span>WEB前端工程师</span>
      </p>
      <p>
        <!-- <span>从事前端工作至今<animate-text class="number" :value="workLength" :is-number="true" />天</span> -->
        <span>530784837@qq.com</span>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderImage from '../../home/components/header-image'
export default {
  name: 'FirstPage',

  components: {
    HeaderImage
  },

  data () {
    return {
    }
  },

  computed: {
    workLength () {
      const firstWorkDate = new Date('2014/8/2')
      let result = new Date() - firstWorkDate
      result = result / 1000 / 3600 / 24
      return parseInt(result)
    }
  },

  mounted () {
  }
}
</script>

<style lang="stylus">
.inline
  display inline
.first-page-root
  position relative
  width 100%
  height 100%
  overflow hidden
  text-align center
  color #413c38
  .image-box
    padding 20px
    margin 50px auto 10px
    overflow hidden

  .name-box
    margin 20px auto
    font-size 20px

  .message-box
    .number
      font-weight bold
      display inline

</style>
