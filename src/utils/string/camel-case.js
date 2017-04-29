const SPECIAL_CHARS_REGEXP = /([:-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

/**
 * 将指定名称转换为驼峰命名
 * @param  {String} name 指定名称
 * @return {String}      转换后的名称
 */
function camelCase (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export default camelCase
