<template>
  <transition name="reward-qr-code-transition">
    <div class="reward-qr-code-root" v-show="show" @click.self="hideQRCode">
      <div class="content-container">
        <div class="title">
          <span>打赏</span>
        </div>
        <div class="nonsense">
          <span>如果觉得我的网站对您有用，请随意打赏。<br>您的支持将鼓励我继续创作！</span>
        </div>
        <div class="qr-code-box">
          <transition name="scale">
            <div class="qr-code alipay" :key="payType" v-if="payType === 'alipay'"></div>
            <div class="qr-code wechat" :key="payType" v-if="payType === 'wechat'"></div>
          </transition>
        </div>
        <div class="toggle-button-box">
          <i class="iconfont wechat">&#xe600;</i>
          <div class="toggle-button" :class="payType" @click="togglePayType">
            <div class="circle">
              <i class="iconfont" v-show="payType==='wechat'">&#xe600;</i>
              <i class="iconfont" v-show="payType==='alipay'">&#xe603;</i>
            </div>
          </div>
          <i class="iconfont alipay">&#xe603;</i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import store from '@/store'

export default {
  name: 'RewardQRCode',

  data () {
    return {
      payType: 'wechat'
    }
  },

  computed: {
    show () {
      return store.state.rewardQRCode.isShow
    }
  },

  mounted () {},

  methods: {
    togglePayType () {
      this.payType = this.payType === 'wechat' ? 'alipay' : 'wechat'
    },
    hideQRCode () {
      store.dispatch('hideQRCode')
    }
  }
}
</script>

<style lang="stylus" scoped>

.reward-qr-code-root
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 20
  .content-container
    position absolute
    top 50%
    left 50%
    width 500px
    height 450px
    margin-left -250px
    margin-top -225px
    background #fff
    text-align center
    border-radius 10px
    box-shadow 5px 5px 10px 4px rgba(0,0,0,0.3)
    padding 20px
    box-sizing border-box

  .title
    padding 15px
    font-size 25px
    color #555
  .nonsense
    width 70%
    margin 0 auto
    color #999
    line-height 30px
  .qr-code-box
    position relative
    margin 15px auto 20px
    width 200px
    height 200px
    .qr-code
      position absolute
      width 100%
      height 100%
      background #fff no-repeat top center / 100%
      transition all ease 0.3

    .wechat
      background-image url('~@/assets/images/wechat.jpg')
    .alipay
      background-image url('~@/assets/images/ali.jpg')

  .toggle-button-box
    user-select none
    .iconfont
      vertical-align middle
      font-size 25px
      &.wechat
        color #22ab39
      &.alipay
        color #019fe8

    .toggle-button
      position relative
      display inline-block
      margin 0 auto
      width 62px
      height 40px
      box-sizing border-box
      border 3px solid #fff
      border-radius 40px
      box-shadow 1px 1px 6px 3px rgba(0,0,0,0.3)
      padding 1px
      vertical-align middle
      cursor pointer
      transition all ease 0.3s
      .circle
        position absolute
        width 32px
        height 32px
        line-height 28px
        border-radius 32px
        background #fff
        transition all ease 0.3s
        .iconfont
          font-size 20px
      &.wechat
        background #22ab39
        .circle
          color #22ab39
          left 1px
      &.alipay
        background #019fe8
        .circle
          color #019fe8
          left 23px





.reward-qr-code-transition-enter-active, .reward-qr-code-transition-leave-active
  transition all .3s
.reward-qr-code-transition-enter, .reward-qr-code-transition-leave-to
  transform scale(1.1)
  opacity 0

.scale-enter-active, .scale-leave-active
  transition all .5s
.scale-enter
  transform scale(0.8)
  opacity 0
.scale-leave-to
  transform scale(1.2)
  opacity 0
</style>
