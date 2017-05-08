<template>
  <div class="topbar-root">
    <!-- 菜单按钮 -->
    <div class="menu-btn-box" @mouseenter="enterMenuBtn = true" @mouseleave="enterMenuBtn = false">
      <menu-button :open="isOpenMenu" @changed="toggleMenuState"/>
    </div>
    <!-- 导航列表 -->
    <transition name="menu-container-transition">
      <div class="menu-container" v-show="isOpenMenu" :class="{open: isOpenMenu}" @mouseleave="onMenuMouseLeave">
        <div class="menus">
          <transition-group name="menu-transition" tag="nav">
            <div
              class="menu"
              :class="`filter-${moveFilterStyle}`"
              v-for="menu in orderMenus"
              :key="menu.name"
              >
              <router-link :to="menu.url">
                <!-- <i class="iconfont" v-html="menu.icon"></i> -->
                {{menu.name}}
              </router-link>
            </div>
          </transition-group>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { NAVS } from '@/config'
import browser from '@/utils/browser'

export default {
  name: 'Topbar',

  data () {
    return {
      // 导航展开状态标志位
      isOpenMenu: false,
      enterMenuBtn: false,
      // 滤镜类型
      moveFilterStyle: browser.versions.chrome ? 'x' : '',
      // 导航列表
      menus: []
    }
  },

  computed: {
    // 当前路径
    currentPath () {
      return this.$route.path
    },

    // 导航列表排序
    orderMenus () {
      let menus = this.menus
      let result = []
      menus.forEach(menu => {
        let isCurrentMenu = this.currentPath.indexOf(menu.url) === 0
        isCurrentMenu ? result.unshift(menu) : result.push(menu)
      })
      return result
    }
  },

  watch: {
    // 监听路径变化 (跳转页面后关闭导航栏)
    currentPath () {
      // window.clearTimeout(this.tid)
      // this.tid = setTimeout(() => {
      //   this.toggleMenuState(false)
      // }, 1000)
    }
  },

  mounted () {
    this.toggleMenuState(true)
  },

  methods: {
    /**
     * 切换菜单状态
     * state: 开启或关闭(Boolean)
     */
    toggleMenuState (state) {
      this.isOpenMenu = state
      // 重置导航 延时一个一个插入 做出动画效果
      this.menus = []
      let currentMenus = []
      window.clearInterval(this.intervalId)
      if (this.isOpenMenu) {
        this.intervalId = setInterval(() => {
          let newMenu = NAVS[currentMenus.length]
          if (!newMenu) return window.clearInterval(this.intervalId)
          currentMenus.push(NAVS[currentMenus.length])
          this.menus = currentMenus
        }, 100)
      }

      // 如果是webkit内核的浏览器才添加模糊效果
      // if (browser.versions.webKit) {
      //   this.moveFilterStyle = 'x'
      //   window.clearTimeout(this.moveFilterStyleTimeId)
      //   this.moveFilterStyleTimeId = setTimeout(() => {
      //     this.moveFilterStyle = 'y'
      //   }, 1000)
      // }
    },

    onMenuMouseLeave () {
      setTimeout(() => {
        if (this.enterMenuBtn) return
        this.toggleMenuState(false)
      }, 50)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .topbar-root
    position fixed
    top 0
    left 0
    width 55px
    height 55px
    /*background rgba(0,0,0,0.2)*/
    color rgba(255,255,255,0.5)
    z-index 20

    .menu-btn-box
      position absolute
      top 15px
      left 15px
      width 30px
      height 30px
      z-index 10

    .menu-container
      position fixed
      left -200px
      top 0
      width 500px
      padding-left 200px
      padding-top 80px
      height 100%
      box-sizing border-box
      /*background #323232*/
      background rgba(50,50,50,0.9)
      box-shadow 5px 0 8px 2px rgba(0,0,0,0.1)
      overflow hidden
      /*filter blur(10px)*/

    .menus
      width 300px
      height 100%
      overflow auto
      color rgba(255,255,255,0.8)
      overflow hidden
      .menu
        box-sizing border-box
        padding-left 30px
        width 100%
        height 60px
        line-height 60px
        font-size 20px
        text-align left
        text-shadow 2px 2px 1px rgba(0,0,0,0.3)
        transition all ease 0.3s
        overflow hidden
        /*filter blur(3px)
        transform scale(1.2, 0.7)*/
        &:hover
          /*background rgba(255,255,255,0.1)*/
          color rgba(255,255,255,0.9)
          padding-left 33px

        &>a
          text-decoration none
          color inherit
          transition all ease 0.3s
        .router-link-active
          opacity 0.5
    /*.open
      .menu
        filter blur(0)
        transform scale(1)*/

    .iconfont
      font-size 25px
      margin-right 15px

  .menu-container-transition-enter-active
    animation menu-container-transition-in .5s

  .menu-container-transition-leave-active
    animation menu-container-transition-out .5s

  @keyframes menu-container-transition-in
    0%
      transform translateX(-500px)
    60%
      transform translateX(30px)
    100%
      transform translateX(0)

  @keyframes menu-container-transition-out
    0%
      transform translateX(0)
    100%
      transform translateX(-500px)

  .menu-transition-enter-active
    animation menu-transition-in .4s
  /*.menu-transition-leave-active
    filter url("#filter-blur-x")*/

  .menu-transition-move
    transition transform 0.3s
  /*.filter-x.menu-transition-move
    filter url("#filter-blur-x")
  .filter-y.menu-transition-move
    filter url("#filter-blur-y")*/

  @keyframes menu-transition-in
    0%
      transform translateX(-500px)
    60%
      transform translateX(30px)

    100%
      transform translateX(0)

  /*@keyframes menu-transition-out
    0%
      transform translateX(0)
    100%
      transform translateX(-500px)*/
</style>
