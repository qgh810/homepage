import { SHOW_REWARD_QR_CODE, HIDE_REWARD_QR_CODE } from '../mutation-types'
import * as actions from '../actions/reward-qr-code'

// 状态初始化
var state = {
  isShow: false
}

// 状态变化
const mutations = {
  [SHOW_REWARD_QR_CODE] (state) {
    state.isShow = true
  },

  [HIDE_REWARD_QR_CODE] (state) {
    state.isShow = false
  }
}

export default {
  state,
  mutations,
  actions
}
