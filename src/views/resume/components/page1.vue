<template>
  <div class="page-root">
    <div class="message-box">
      <div class="message" v-for="message in messages">
        <div class="icon-box">
          <i class="iconfont" v-html="message.icon"></i>
          <!-- <i class="iconfont">
            &#xf010f;
          </i> -->
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
export default {
  name: 'Page1',

  data () {
    return {
      messages: [
        {
          title: '出生年月',
          content: '1991.12',
          icon: '&#xf010f;'
        },
        {
          title: '最高学历',
          content: '大学本科',
          icon: '&#xe607;'
        },
        {
          title: '籍贯',
          content: '广东汕头',
          icon: '&#xe619;'
        },
        {
          title: '目前所在地',
          content: '广东广州',
          icon: '&#xe617;'
        },
        {
          title: '电子邮箱',
          content: '530784837@qq.com',
          icon: '&#xe640;'
        },
        {
          title: 'github',
          content: 'https://github.com/qgh810',
          icon: '&#xe735;'
        }
      ]
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
    padding-left 60px
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
