// import GlobalComponent from './global-component'

import AnimateText from './animate-text/animate-text'

const components = {
  AnimateText
}

const install = function (Vue, opts = {}) {
  if (install.installed) return

  // 注册全局指令

  // 注册全局过滤器

  // 注册全局组件
  for (let name in components) {
    Vue.component(name, components[name])
  }

  // 注册全局方法和变量
  // Vue.prototype.$LoadingBar = new GlobalComponent(LoadingBar)
}

export default {
  install
}
