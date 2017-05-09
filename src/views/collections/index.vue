<template>
  <div class="collections-roots">
    <x-title/>
    <navs/>
    <router-view></router-view>
  </div>
</template>

<script>
import XTitle from './components/title'
import Navs from './components/navs'
export default {
  name: 'Collections',

  components: {
    XTitle,
    Navs
  },

  data () {
    return {
      title: 'Collections'
    }
  },

  methods: {
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




</style>
