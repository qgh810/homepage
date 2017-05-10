<template>
  <div class="list-root">
    <div class="list-box">
      <div class="list" v-for="{title, content} in lists">
        <div class="title"><span>{{title}}</span></div>
        <div class="content"><p>{{content}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',

  data () {
    return {
      lists: [
        {
          title: '标题标题标题标题标题标题标题标题',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        },
        {
          title: '标题标题标题标题标题标题标题标题',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        }
      ]
    }
  },

  computed: {
    type () {
      return this.$route.params.type
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-root
  width 100%
  height 100%
  padding 20px 20px
  margin 50px 0
  box-sizing border-box
  .list-box
    margin 0 auto
    width 100%
    max-width 800px
    padding 50px
    /*border 1px solid #d94f5c*/
    /*box-shadow 0 0 10px 5px rgba(217, 79, 92, 0.1)*/
    .list
      position relative
      margin-bottom 80px
      .title
        position relative
        color #fff
        font-size 30px
        padding-left 20px
        box-sizing border-box
        font-weight 100
        margin 20px 0 30px
        &:before
          content ''
          display block
          position absolute
          top 0
          left 0
          width 5px
          height 100%
          border-radius 5px
          background #d94f5c
          box-shadow inset 0 1px 1px rgba(0,0,0,0.5), 0 1px 1px rgba(255,255,255,0.3)
      .content
        color #ccc
        font-size 16px
        font-weight 100
        padding-left 20px
        box-sizing border-box
</style>
