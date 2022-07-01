import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import mixins from './mixins'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(less)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.mixin(mixins)

window.alex = new Vue({
  render: h => h(App)
}).$mount('#app')
