import * as types from '../mutation-types'

/**
 * 显示留言板
 */
export const showMessageBoard = ({ commit }) => {
  commit(types.SHOW_MESSAGE_BOARD)
}

/**
 * 显示留言板
 */
export const hideMessageBoard = ({ commit }) => {
  commit(types.HIDE_MESSAGE_BOARD)
}
