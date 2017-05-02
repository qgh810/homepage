import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'
import messageBoard from './modules/message-board'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    messageBoard
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
