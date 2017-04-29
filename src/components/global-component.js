import Vue from 'vue'
import camelcaseToHyphen from '@/utils/string/camel-case-to-hyphen'

class GlobalComponent {
  constructor (sourceComponent) {
    return this.init(sourceComponent)
  }

  init (sourceComponent) {
    const name = camelcaseToHyphen(sourceComponent.name)
    if (!name) return console.warn('组件名字未定义', sourceComponent)
    this.sourceComponent = sourceComponent
    const el = document.createElement('div')
    el.innerHTML = `<${name}></${name}>`
    document.body.appendChild(el)

    const root = new Vue({
      el: el,
      components: { sourceComponent }
    })

    let result = root.$children[0]

    return result
  }
}

export default GlobalComponent
