<template>
  <div class="comment-root">
    <div class="comment-container">
      <div id="SOHUCS"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  mounted () {
    this.getChangYanScript()
  },

  methods: {
    getChangYanScript () {
      let script
      const ID = 'changyan-script'
      if (!window.changyan) {
        script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('charset', 'utf-8')
        script.setAttribute('src', 'https://changyan.sohu.com/upload/changyan.js')
        script.setAttribute('id', ID)
        document.body.appendChild(script)
        script.onload = this.changeyanPluginOnload
      } else {
        this.initChangeyanPlugin()
      }
    },

    changeyanPluginOnload () {
      window.changyan.api.config(
        {
          appid: 'cysYtxn7z',
          conf: 'prod_3b9c222885e32e14c78058850a4cc0c5'
        }
      )
    },

    initChangeyanPlugin () {
      console.log(window.changyan.ready())
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

  .comment-container
    width 100%
    height 100%
    overflow auto


</style>
