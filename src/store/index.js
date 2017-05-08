import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import messageBoard from './modules/message-board'
import rewardQRCode from './modules/reward-qr-code'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    messageBoard,
    rewardQRCode
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
