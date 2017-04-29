
export function addClass (dom, className) {
  let classNames = dom.className.split(' ')
  if (classNames.indexOf(className) >= 0) return dom
  classNames.push(className)
  dom.className = classNames.join(' ')
  return dom
}

export function removeClass (dom, className) {
  let classNames = dom.className.split(' ')
  let index = classNames.indexOf(className)
  if (index === -1) return dom
  classNames.splice(index, 1)
  dom.className = classNames.join(' ')
  return dom
}
