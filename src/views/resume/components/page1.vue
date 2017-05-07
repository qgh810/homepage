<template>
  <div class="page-root">
    <div class="image-box">
      <div class="header-image"></div>
    </div>
    <div class="name-box">
      <span>邱国辉</span>
    </div>
    <div class="message-box">
      <p>
        <span>WEB前端工程师</span>
      </p>
      <p>
        <span>530784837@qq.com</span>
      </p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.page-root
  position relative
  width 100%
  height 100%
  overflow hidden
  text-align center
  color #413c38
  .image-box
    padding 20px
    margin 50px auto 0px
    overflow hidden
    height 160px

    .header-image
      margin 0 auto
      height 160px
      width 160px
      border-radius 200px
      border 5px solid #fff
      box-shadow 3px 3px 10px 1px rgba(0,0,0,0.3)
      background url('~@/assets/images/header-image.jpeg') center center / 100%

  .name-box
    margin 20px auto
    font-size 20px

  .message-box
    .number
      font-weight bold
      display inline

</style>
