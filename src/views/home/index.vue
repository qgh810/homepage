<template>
  <div class="home-root">
    <background></background>
    <div class="content-container">
      <div class="header-image">
        <img src="~@/assets/images/header-image.jpeg" alt="" width="100%" height="100%">
      </div>
      <div class="text-box">
        <span class="name">{{message.name}}</span>
        <div class="description">
          <div>{{message.descriptions}}</div>
          <p>
            <a class="link" target="_blank" href="https://github.com/qgh810">
              <animate-text value="github: https://github.com/qgh810"></animate-text>
            </a>
          </p>
          <!-- <animate-text v-for="description in descriptions" class="description" :value="description"></animate-text> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from './components/bj'
export default {
  name: 'Home',

  components: {
    Background
  },

  data () {
    return {
      message: {
        name: '邱国辉',
        descriptions: '爱生活, 爱家人, 爱编程, 爱自己',
        github: 'github: https://github.com/qgh810'
      }
    }
  },

  computed: {
    workTime () {
      const START_WORK_DATE = '2015/2/18'
      return new Date() - new Date(START_WORK_DATE)
    }
  }
}
</script>

<style lang="stylus">

text-color = rgba(255,255,255,0.5)
.home-root
  width 100%
  height 100%
  position relative
  padding 25vh 10vw
  box-sizing border-box
  color text-color

  .content-container
    width 100%
    height 100%

  .header-image
    margin 0 auto
    width 25vh
    height 25vh
    border 5px solid rgba(255,255,255,0.7)
    border-radius 50%
    overflow hidden

  .text-box
    text-align center

    .name
      display block
      height 60px
      line-height 60px
      font-size 18px

    .description
      font-size 12px

      .link
        color text-color
        transition color ease 0.3s
        &:hover
          color rgba(255,255,255,0.8)
</style>
