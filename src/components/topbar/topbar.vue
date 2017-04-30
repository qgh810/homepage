<template>
  <div class="topbar-root">
    <div class="menu-btn-box"><menu-button @changed="toggleMenuState"/></div>
    <transition name="menu-container-transition">
      <div class="menu-container" v-show="isOpenMenu" :class="{open: isOpenMenu}">
        <div class="menus">
          <transition-group
            name="menu-transition"
            >
            <div
              class="menu"
              v-for="menu in menus"
              :key="menu.name"
              >
              {{menu.name}}
            </div>
          </transition-group>
          <!-- <transition
            v-for="menu in menus"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
            >
            <div class="menu">
              {{menu.name}}
            </div>
          </transition> -->
        </div>
      </div>
    </transition>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filters hidden">
  		<defs>
  			<filter id="blur" x="-20%" y="0" width="140%" height="100%">
  				<feGaussianBlur in="SourceGraphic" :stdDeviation="`${blur},0`"></feGaussianBlur>
  			</filter>
    		<!-- <filter id="blur0" x="-20%" y="0" width="140%" height="100%">
    				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter><filter id="blur1" x="-80%" y="0" width="240%" height="100%">
  				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter><filter id="blur2" x="-20%" y="0" width="140%" height="100%">
  				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter><filter id="blur3" x="-20%" y="0" width="140%" height="100%">
  				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter><filter id="blur4" x="-20%" y="0" width="140%" height="100%">
  				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter><filter id="blur5" x="-20%" y="0" width="140%" height="100%">
  				<feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
  			</filter> -->
      </defs>
    	</svg>

  </div>
</template>

<script>
const MENUS = [
  {
    name: 'HOME',
    url: ''
  },
  {
    name: 'WORKS',
    url: ''
  },
  {
    name: 'COLLECTION',
    url: ''
  },
  {
    name: 'RESUME',
    url: ''
  }
]
export default {
  name: 'Topbar',

  data () {
    return {
      isOpenMenu: false,
      blur: 0,

      menus: []
    }
  },

  computed: {
  },

  methods: {
    toggleMenuState (state) {
      this.isOpenMenu = !state
      this.menus = []

      let currentMenus = [MENUS[0]]
      window.clearInterval(this.intervalId)
      if (this.isOpenMenu) {
        this.intervalId = setInterval(() => {
          let newMenu = MENUS[currentMenus.length]
          if (!newMenu) return window.clearInterval(this.intervalId)
          currentMenus.push(MENUS[currentMenus.length])
          this.menus = currentMenus
        }, 50)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .topbar-root
    position fixed
    top 0
    left 0
    width 100%
    height 55px
    /*background rgba(0,0,0,0.2)*/
    color rgba(255,255,255,0.5)
    z-index 10

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
      .menu
        box-sizing border-box
        padding-right 30px
        width 100%
        height 60px
        line-height 60px
        font-size 20px
        text-align right
        text-shadow 2px 2px 1px rgba(0,0,0,0.3)
        cursor pointer
        transition all ease 0.3s
        filter url("#blur")
        /*filter blur(3px)
        transform scale(1.2, 0.7)*/
        &:hover
          background rgba(255,255,255,0.1)
          color rgba(255,255,255,0.9)
    /*.open
      .menu
        filter blur(0)
        transform scale(1)*/




  .menu-container-transition-enter-active
    animation menu-container-transition-in .5s
  .menu-container-transition-leave-active
    animation menu-container-transition-out .5s

  @keyframes menu-container-transition-in
    0%
      transform translateX(-500px)
    50%
      transform translateX(30px)
    100%
      transform translateX(0)

  @keyframes menu-container-transition-out
    0%
      transform translateX(0)
    100%
      transform translateX(-500px)

  .menu-transition-enter-active
    animation menu-transition-in .5s
  .menu-transition-leave-active
    animation menu-transition-out .5s

  @keyframes menu-transition-in
    0%
      transform translateX(-500px)
    50%
      transform translateX(30px)
    100%
      transform translateX(0)

  @keyframes menu-transition-out
    0%
      transform translateX(0)
    100%
      transform translateX(-500px)
</style>
