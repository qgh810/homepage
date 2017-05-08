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
          <div class="qr-code" :class="payType"></div>
        </div>
        <div class="toggle-button">
          按钮
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
    background #000
    .qr-code
      position absolute
      width 100%
      height 100%
      background #fff no-repeat top center / 100%

    .wechat
      background-image url('~@/assets/images/wechat.jpg')
    .alipay
      background-image url('~@/assets/images/ali.jpg')


.reward-qr-code-transition-enter-active, .reward-qr-code-transition-leave-active
  transition all .3s
.reward-qr-code-transition-enter, .reward-qr-code-transition-leave-to
  transform scale(1.1)
  opacity 0
</style>
