<template>
  <div class="svg-filters-root">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters-root">
      <defs>
        <filter id="filter-blur-x" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12,0"></feGaussianBlur>
        </filter>
        <filter id="filter-blur-y" x="0" y="20%" width="100%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0,20"></feGaussianBlur>
        </filter>
        <!-- <filter id="blur1" x="-80%" y="0" width="240%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
        </filter>
        <filter id="blur2" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
        </filter>
        <filter id="blur3" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
        </filter>
        <filter id="blur4" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
        </filter>
        <filter id="blur5" x="-20%" y="0" width="140%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1,0"></feGaussianBlur>
        </filter> -->
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgFilter'
}
</script>

<style lang="stylus" scoped>
.svg-filters-root
  display none
</style>
