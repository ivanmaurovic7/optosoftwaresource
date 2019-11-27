import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('my-button', () => import('./components/button.vue'))
Vue.component('my-footer', () => import('./components/footer.vue'))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
