import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.use(VueI18n)
Vue.config.productionTip = false

// i18n 原理： https://juejin.cn/post/6844904148794621965
// 准备翻译的语言环境信息
const messages = {
  zh: {
    message: {
      hello: '你好 世界'
    }
  },
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'ja', // 设置地区
  messages, // 设置地区信息
})

Object.defineProperties(i18n, messages, {
  get() {
    return '重写 get 方法'
  },
  // set(newValue) {
  //   messages.ja.message.hello = newValue
  // }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
