<template>
  <div class="float-buttons-root">
    <div class="icon-box message" @click="onMessageButtonClick">
      <i class="iconfont">&#xe6a7;</i>
    </div>
    <div class="icon-box reward" @click="onRewardButtonClick">
      <i class="iconfont">&#xe66e;</i>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'FloatButtons',

  data () {
    return {
      buttons: [
        {
          name: 'message',
          label: '留言'
        }
      ]
    }
  },

  methods: {
    onMessageButtonClick () {
      store.dispatch('showMessageBoard')
    },

    onRewardButtonClick () {
      // store.dispatch('showMessageBoard')
    }
  }
}
</script>

<style lang="stylus" scoped>

icon-size = 40px

.float-buttons-root
  position absolute
  right 40px
  bottom 50px
  /*width 50px*/
  height auto
  /*min-height 50px*/
  /*background rgba(0,0,0,0.3)*/

  .icon-box
    width 40px
    height 40px
    border-radius 40px
    background rgba(255,255,255,0.1)
    text-align center
    cursor pointer
    margin-top 10px

    .iconfont
      font-size 20px
      line-height 40px
      color rgba(255,255,255,0.7)
    &.message
      line-height 45px
</style>
