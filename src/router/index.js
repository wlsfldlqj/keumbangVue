import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import About from '@/components/about/About'
import UserInfo from '@/components/mypage/UserInfo'
import WalletsList from '@/components/wallet/WalletsList'
import WalletsHistory from '@/components/wallet/WalletsHistory'
import Transfer from '@/components/wallet/Transfer'
import Market from '@/components/market/GoldMarket'
import Withdraw from '@/components/market/GoldWithdraw'
import MainPage from '@/components/main/MainPage'

import Login from '@/components/main/Login'

// import About from '@/components/temp/About'
// import Remittance from '@/components/temp/Remittance'
// import Market from '@/components/temp/Market'
// import Wallets from '@/components/temp/Wallets'


const requireAuth = (path) => (to, from, next) => {
  if (store.getters.isAuthenticated){
      return next()
  }
  next('/login?returnPath='+path)
}
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: { layout: 'main-page-layout' }
      
    }, {
      path: '/login',
      name: 'Login',
      alias: '/',
      component: Login,
      meta: { layout: 'main-page-layout-login' }
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: { layout: 'main-page-layout' }
    // }, {
    //   path: '/about2',
    //   name: 'About2',
    //   component: About,
    //   meta: { layout: 'main-page-layout-submenu' }
    // }, {
    //   path: '/remittance',
    //   name: 'Remittance',
    //   component: Remittance,
    //   meta: { layout: 'main-page-layout' }
    }, {
      path: '/market',
      name: 'market',
      component: Market,
      meta: { layout: 'main-page-layout-login' },
      beforeEnter: requireAuth('market')
    }, {
      path: '/withdraw',
      name: 'withdraw',
      component: Withdraw,
      meta: { layout: 'main-page-layout-login' },
      beforeEnter: requireAuth('withdraw')
    // }, {
    //   path: '/wallet',
    //   name: 'wallets',
    //   component: Wallets,
    //   meta: { layout: 'main-page-layout' }
    }, {
      path: '/mypage',
      name: 'mypage',
      component: UserInfo,
      meta: { layout: 'my-page-layout' },
      beforeEnter: requireAuth('mypage')
    }, {
      path: '/wallets',
      name: 'wallets',
      component: WalletsList,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('wallets')
    }, {
      path: '/wallets-history',
      name: 'wallets-history',
      component: WalletsHistory,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('wallets-history')
    }, {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('transfer')
    }
  ]
})
export default router
