<template>
  <div class="works-roots">
    我的收藏
  </div>
</template>

<script>
export default {
  name: 'Works',

  data () {
    return {
      group: [
        '文档',
        '干货',
        '工具库',
        '鉴赏'
      ]
    }
  }
}
</script>

<style lang="stylus">
  .works-roots
    text-align center
</style>
