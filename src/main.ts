import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/style.scss'
import 'pace-js/themes/white/pace-theme-minimal.css'
import 'es6-promise/auto'

import 'pace-js/pace'
import axios, { AxiosStatic } from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'overlayscrollbars/css/OverlayScrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

library.add(fas)
Vue.prototype.$axios = axios
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}
Vue.component('fa', FontAwesomeIcon)
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
