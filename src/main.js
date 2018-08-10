// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import PageLayoutWithSubmenu from './layouts/PageLayoutWithSubmenu.vue'
import MainPageLayout from './layouts/MainPageLayout.vue'
import MainPageLayout_Login from './layouts/MainPageLayout_Login'
import MyPageLayout from './layouts/MyPageLayout.vue'
import WalletLayout from './layouts/WalletLayout.vue'

Vue.component('main-page-layout-login', MainPageLayout_Login)
Vue.component('main-page-layout-submenu', PageLayoutWithSubmenu)
Vue.component('main-page-layout', MainPageLayout)
Vue.component('my-page-layout', MyPageLayout)
Vue.component('wallet-layout', WalletLayout)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
