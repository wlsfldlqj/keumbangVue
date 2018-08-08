import Vue from 'vue'
import Router from 'vue-router'

import UserInfo from '@/components/mypage/UserInfo'
import WalletsList from '@/components/wallet/WalletsList'

import MainPage from '@/components/main/MainPage'
import About from '@/components/temp/About'
import Remittance from '@/components/temp/Remittance'
import Market from '@/components/temp/Market'
import Wallets from '@/components/temp/Wallets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/about',
      name: 'About',
      component: About,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/remittance',
      name: 'Remittance',
      component: Remittance,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/market',
      name: 'Market',
      component: Market,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/wallets',
      name: 'Wallets',
      component: Wallets,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/mypage',
      name: 'UserInfo',
      component: UserInfo,
      meta: { layout: 'my-page-layout' }
    }, {
      path: '/wallets',
      name: 'WalletsList',
      component: WalletsList,
      meta: { layout: 'wallet-layout' }
    }
  ]
})
