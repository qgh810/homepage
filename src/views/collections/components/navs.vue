<template>
  <nav class="navs">
    <div class="nav" :class="{selected: selectedNav === nav}" v-for="nav in navs" @click="onSelectNav(nav)">
      <span class="text">{{nav.label}}</span>
      <span class="line top"></span>
      <span class="line bottom"></span>
    </div>
  </nav>
</template>

<script>

const NAVS = [
  {
    label: '干货',
    name: 'article'
  },
  {
    label: '文档',
    name: 'docs'
  },
  {
    label: '工具库',
    name: 'tool'
  },
  {
    label: '鉴赏',
    name: 'appreciation'
  }
]

export default {
  name: 'Navs',

  data () {
    return {
      navs: NAVS
    }
  },

  computed: {
    type () {
      return this.$route.params.type
    },

    selectedNav () {
      let result = {}
      this.navs.forEach(nav => {
        nav.name === this.type && (result = nav)
      })
      return result
    }
  },

  methods: {
    onSelectNav (nav) {
      this.$router.push(nav.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
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
