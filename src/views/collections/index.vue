<template>
  <div class="collections-roots">
    <div class="title-box">
      <span class="title">{{title}}</span>
    </div>
    <nav class="navs">
      <div class="nav" :class="{selected: selectedNav === nav}" v-for="nav in navs" @click="selectedNav = nav">
        <span class="text">{{nav}}</span>
        <span class="line top"></span>
        <span class="line bottom"></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Collections',

  data () {
    return {
      title: 'collection',
      navs: [
        '干货',
        '文档',
        '工具库',
        '鉴赏'
      ],
      selectedNav: '干货'
    }
  }
}
</script>

<style lang="stylus">
  .collections-roots
    width 100%
    height 100%
    background url('~@/assets/images/black_denim.jpg')
    /*background linear-gradient(0, rgba(255,255,255,0.1), rgba(255, 255, 255, 0.2))
    background -moz-linear-gradient(rgba(255, 255, 255, 0.2), rgba(255,255,255,0.1))*/
    overflow auto


    .title-box
      position relative
      width 100%
      height 120px
      line-height 120px
      display inline-block
      margin 50px auto
      .title
        position absolute
        left 50%
        transform translate(-50%)
        font-size 100px
        font-weight bold
        /*font-family 'Raleway', 'Arial', 'sans-serif'*/
        color #d94f5c
        /*text-shadow 0 0 10px #d94f5c*/

    .navs
      width 100%
      height 50px
      overflow hidden
      display flex
      justify-content center
      /*flex-d*/
      .nav
        position relative
        height 50px
        line-height 50px
        font-size 20px
        /*color #6Cf*/
        color #929292
        text-align center
        cursor pointer
        overflow hidden
        margin 0 40px
        transition all ease 0.2s
        &>.text
          padding 0 20px

        .line
          position absolute
          width 0
          height 0
          border-top 2px solid
          transition all ease 0.2s
          color #6Cf
          &.top
            top 0
            right 0
          &.bottom
            bottom 0
            left 0
      .nav.selected
        color #d94f5c
        .line
          color #d94f5c
          width 100%
      .nav:hover
        color #d94f5c


</style>
