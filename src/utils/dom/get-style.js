import camelCase from '../string/camel-case'

/**
 * 获取指定DOM元素的某个样式
 * @param  {HTML DOM Element} element 指定DOM元素
 * @param  {String} styleName 样式名称
 * @return {String|Null} 样式
 */
function getStyle (element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

export default getStyle
