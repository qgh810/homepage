<template>
  <div class="home-root">
    <background></background>
    <div class="content-container">
      <div class="header-image">
        <img src="~@/assets/images/header-image.jpeg" alt="" width="100%" height="100%">
      </div>
      <div class="text-box">
        <p class="name">{{message.name}}</p>
        <div class="description">
          <p>
            <animate-text :value="message.descriptions" :time="1000" />
          </p>
          <!-- <p>
            从事前端工作
              <animate-text class="work-time-number" is-number :value="workTime" :time="1000" />
            天<br>
          </p> -->
          <p>
            <h-button class="link" @click.native="goGitbug(message.github)">github</h-button>
          </p>
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
        descriptions: 'It is not because of being great that brings you dreams. It is because of dream, you become a great man.',
        github: 'https://github.com/qgh810'
      }
    }
  },

  computed: {
    workTime () {
      const START_WORK_DATE = '2014/8/2'
      let result = parseInt((new Date() - new Date(START_WORK_DATE)) / (1000 * 3600 * 24))
      return result
    }
  },

  methods: {
    goGitbug (url) {
      window.open(url)
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
  padding 22vh 10vw
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
    box-shadow 2px 2px 5px 5px rgba(0,0,0,0.2)

  .text-box
    text-align center

    .name
      display block
      margin-top 20px
      font-size 18px
      text-shadow 2px 2px 2px rgba(0,0,0,0.5)

    .description
      font-size 12px
      text-shadow 2px 2px 2px rgba(0,0,0,0.5)

      .work-time-number
        display inline
        font-size 15px

      .link
        margin-top 10px
        padding 5px 20px
        border-radius 3px
        font-size 15px
        opacity 0.5
        transition all ease 0.3s
        outline none
        &:hover
          opacity 0.7
</style>
