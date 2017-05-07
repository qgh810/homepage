<template>
  <div class="page-root">
    <div class="message-box">
      <div class="message" v-for="message in messages">
        <div class="icon-box">
          <i class="iconfont" v-html="message.icon"></i>
        </div>
        <div class="title">
          <span>{{message.title}}</span>
        </div>
        <div class="content">
          <span>{{message.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MESSAGES } from './data'
export default {
  name: 'Page2',

  data () {
    return {
      messages: MESSAGES
    }
  }
}
</script>

<style lang="stylus" scoped>

.page-root
  position relative
  width 100%
  height 100%
  padding 20px 0 20px 50px
  box-sizing border-box
  color #413c38
  .message-box
    width 100%
    height 100%
  .message
    position relative
    height 50px
    padding-left 65px
    box-sizing border-box
    margin-bottom 20px
    .icon-box
      position absolute
      left 0
      top 0
      width 50px
      height 50px
      line-height 50px
      border-radius 100px
      background #925b4b
      text-align center
      .iconfont
        font-size 30px
        color #fff

    .title
      height 25px
      color #555
    .content
      height 25px
      line-height 25px
      font-size 13px
      color #925b4b
</style>
