/**
 * 将驼峰变量转换为中划线连接
 * @param  {String} str 目标字符串
 * @return {String}     中划线连接的字符串
 */
function camelcaseToHyphen (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export default camelcaseToHyphen
