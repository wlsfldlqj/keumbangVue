import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import About from '@/components/about/About'
import AboutService from '@/components/about/AboutService'
import UserInfo from '@/components/mypage/UserInfo'
import Wallets from '@/components/wallet/Wallets'
import DepositKRW from '@/components/wallet/components/DepositKRW'
import WalletsHistory from '@/components/wallet/WalletsHistory'
import TransferGold from '@/components/wallet/components/TransferGold'
import TransferTxFee from '@/components/wallet/components/TransferTxFee'
import GoldMarket from '@/components/market/GoldMarket'
import TokenMarket from '@/components/market/TokenMarket'
import WithdrawGold from '@/components/wallet/components/WithdrawGold'
import WithdrawKRW from '@/components/wallet/components/WithdrawKRW'
import MainPage from '@/components/main/MainPage'
import Login from '@/components/main/Login'
import Register from '@/components/main/RegisterPage'



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
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/register',
      name: 'Register',
      alias: '/',
      component: Register,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/about-service',
      name: 'about-service',
      component: AboutService,
      meta: { layout: 'main-page-layout' }
    }, {
      path: '/gold-market',
      name: 'gold-market',
      component: GoldMarket,
      meta: { layout: 'main-page-layout-chart' },
      beforeEnter: requireAuth('gold-market')
    }, {
      path: '/token-market',
      name: 'token-market',
      component: TokenMarket,
      meta: { layout: 'main-page-layout-chart' },
      beforeEnter: requireAuth('token-market')
    }, {
      path: '/wallets',
      name: 'wallets',
      component: Wallets,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('wallets')
    }, {
      path: '/wallets-history',
      name: 'wallets-history',
      component: WalletsHistory,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('wallets-history')
    }, {
      path: '/deposit-krw',
      name: 'deposit-KRW',
      component: DepositKRW,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('deposit-krw')
    }, {
      path: '/withdraw-krw',
      name: 'withdraw-KRW',
      component: WithdrawKRW,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('deposit-krw')
    }, {
      path: '/transfer',
      name: 'transferGold',
      component: TransferGold,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('transfer')
    }, {
      path: '/withdraw-gold',
      name: 'withdraw-gold',
      component: WithdrawGold,
      meta: { layout: 'main-page-layout' },
      beforeEnter: requireAuth('withdraw-gold')
    }, {
      path: '/transfer-txfee',
      name: 'transfer-TxFee',
      component: TransferTxFee,
      meta: { layout: 'wallet-layout' },
      beforeEnter: requireAuth('transfer-txfee')
    }, {
      path: '/mypage',
      name: 'mypage',
      component: UserInfo,
      meta: { layout: 'my-page-layout' },
      beforeEnter: requireAuth('mypage')
    }
  ]
})
export default router
