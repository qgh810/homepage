/**
 * 判断指定元素是否不包含 HTML 内容
 * @param  {DOM} el HTML元素
 * @return Boolean
 */
function hasHTML (el) {
  return el.innerHTML.replace(/[\n\s]/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== ''
}

export default hasHTML
