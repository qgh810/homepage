<template>
  <div class="svg-filters-root">
    <svg v-if="show" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters-root">
      <defs>
        <filter id="filter-blur-x" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12,0"></feGaussianBlur>
        </filter>
        <filter id="filter-blur-y" x="0" y="20%" width="100%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0,20"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import browser from '@/utils/browser'

export default {
  name: 'SvgFilter',

  data () {
    return {
      show: browser.versions.aaa
    }
  }
}
</script>

<style lang="stylus" scoped>
.svg-filters-root
  display none
</style>
