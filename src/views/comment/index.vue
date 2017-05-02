<template>
  <div class="comment-root">
    <!-- <div id="SOHUCS"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Comment',

  mounted () {
    setTimeout(() => {
      // this.initChangeyanPlugin()
    }, 1000)
  },

  methods: {
    initChangeyanPlugin () {
      let script
      const ID = 'changyan-script'
      script = document.getElementById(ID)
      if (script) return
      script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('charset', 'utf-8')
      script.setAttribute('src', 'https://changyan.sohu.com/upload/changyan.js')
      script.setAttribute('id', ID)
      document.body.appendChild(script)
    }
  }
}
</script>

<style lang="stylus">
</style>
