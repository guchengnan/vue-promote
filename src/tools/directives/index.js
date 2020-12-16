import copy from './copy'
import focus from './focus'
// 自定义指令
const directives = {
  copy,
  focus
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}