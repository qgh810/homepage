import { SHOW_REWARD_QR_CODE, HIDE_REWARD_QR_CODE } from '../mutation-types'
/**
 * 显示打赏二维码
 */
export const showQRCode = ({ commit }) => {
  commit(SHOW_REWARD_QR_CODE)
}

/**
 * 隐藏打赏二维码
 */
export const hideQRCode = ({ commit }) => {
  commit(HIDE_REWARD_QR_CODE)
}
