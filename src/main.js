// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MainPageLayout from './layouts/MainPageLayout.vue'
import MyPageLayout from './layouts/MyPageLayout.vue'
import WalletLayout from './layouts/WalletLayout.vue'

Vue.component('main-page-layout', MainPageLayout)
Vue.component('my-page-layout', MyPageLayout)
Vue.component('wallet-layout', WalletLayout)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
