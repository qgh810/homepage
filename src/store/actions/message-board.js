import { SHOW_MESSAGE_BOARD, HIDE_MESSAGE_BOARD } from '../mutation-types'
/**
 * 显示留言板
 */
export const showMessageBoard = ({ commit }) => {
  commit(SHOW_MESSAGE_BOARD)
}

/**
 * 显示留言板
 */
export const hideMessageBoard = ({ commit }) => {
  commit(HIDE_MESSAGE_BOARD)
}
