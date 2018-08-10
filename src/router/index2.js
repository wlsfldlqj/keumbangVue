import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/about/About'
import UserInfo from '@/components/mypage/UserInfo'
import WalletsList from '@/components/wallet/WalletsList'
import WalletsHistory from '@/components/wallet/WalletsHistory'
import Transfer from '@/components/wallet/Transfer'
import Market from '@/components/market/GoldMarket'
import Withdraw from '@/components/market/GoldWithdraw'
import MainPage from '@/components/main/MainPage'

import Login from '@/components/main/Login'

Vue.use(Router)
const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login?returnPath=mypage')
}
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: { layout: 'main-page-layout' }
    }, 
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: UserInfo,
      beforeEnter: requireAuth
    }
  ]
})
export default router
