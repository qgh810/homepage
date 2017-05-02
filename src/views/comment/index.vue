<template>
  <div class="comment-root">
    <div class="comment-container" id="SOHUCS"></div>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  mounted () {
    this.initChangeyanPlugin()
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
      script.onload = function () {
        window.changyan.api.config(
          {
            appid: 'cysYtxn7z',
            conf: 'prod_3b9c222885e32e14c78058850a4cc0c5'
          }
        )
      }
    }
  }
}
</script>

<style lang="stylus">
.comment-root
  width 100%
  height 100%
  position relative
  padding 100px 30px 30px
  box-sizing border-box


</style>
