<template>
  <transition name="message-board-transition">
    <div class="message-board-root" v-show="show">
      <div class="close-btn" @click="hide">
        <i class="iconfont">&#xe69a;</i>
      </div>
      <div class="comment-container">
        <div id="SOHUCS" sid="homepage_index"></div>
      </div>
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
  },

  mounted () {
    this.initMessageBoard()
  },

  methods: {
    /**
     * 初始化留言板
     */
    initMessageBoard () {
      let script
      const ID = 'changyan-script'
      script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('charset', 'utf-8')
      script.setAttribute('src', 'https://changyan.sohu.com/upload/changyan.js')
      script.setAttribute('id', ID)
      document.body.appendChild(script)
      script.onload = this.messageBoardOnload
    },

    messageBoardOnload () {
      window.changyan.api.config(
        {
          appid: 'cysYtxn7z',
          conf: 'prod_3b9c222885e32e14c78058850a4cc0c5'
        }
      )
    },

    /**
     * 隐藏当前页面
     */
    hide () {
      store.dispatch('hideMessageBoard')
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
  background #fff
  z-index 30
  padding 50px 20px
  box-sizing border-box

  .comment-container
    width 100%
    height 100%
    overflow auto

  .close-btn
    position absolute
    right 10px
    top 10px
    width 50px
    height 50px
    line-height 50px
    text-align center
    cursor pointer
    .iconfont
      color #999
      font-size 30px
      transition color ease 0.3s
    &:hover .iconfont
      color #555



.message-board-transition-enter-active, .message-board-transition-leave-active
  transition all .3s
.message-board-transition-enter, .message-board-transition-leave-to
  top 100%
</style>
