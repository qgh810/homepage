import * as types from '../mutation-types'

/**
 * 显示留言板
 */
export const showMessageBoard = ({ dispatch, state }) => {
  dispatch(types.SHOW_MESSAGE_BOARD)
}

/**
 * 显示留言板
 */
export const hideMessageBoard = ({ dispatch, state }) => {
  dispatch(types.HIDE_MESSAGE_BOARD)
}
