import {
  SHOW_MESSAGE_BOARD,
  HIDE_MESSAGE_BOARD
} from '../mutation-types'
import * as actions from '../actions/message-board'

// 状态初始化
var state = {
  isShow: false
}

// 状态变化
const mutations = {
  [SHOW_MESSAGE_BOARD] (state) {
    state.isShow = true
  },

  [HIDE_MESSAGE_BOARD] (state) {
    state.isShow = false
  }
}

export default {
  state,
  mutations,
  actions
}
