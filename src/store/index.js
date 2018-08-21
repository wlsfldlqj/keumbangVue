import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHostAuth = 'http://localhost:3000/api/auth'
const resourceHostUsers = 'http://localhost:3000/api/users'
const resourceHostWallets = 'http://localhost:3000/api/wallets'

const enhanceAccessToken = () => {
  const {accessToken} = sessionStorage
  if (!accessToken) return axios.defaults.headers.common['x-access-token'] = `${accessToken}`;
}
enhanceAccessToken() 

export default new Vuex.Store({
  state: {
    walletsAddr: null,
    _addr: null,
    // numsOfPayments: null,
    numsOfPayments: 0,
    isEstablished: false, //지금은 true
    accessToken: null,
    _id: null,
    user: null
    
  },
  getters: {
    getNumsOfPayments (state) {
      state.numsOfPayments = state.numsOfPayments || sessionStorage.numsOfPayments
      return state.numsOfPayments
    },
    getInfo (state) {
      return state.user
    },
    isEstablished(state) {
      state.isEstablished = state.isEstablished || sessionStorage.isEstablished
      return state.isEstablished
    },
    isAuthenticated (state) {
      state.accessToken = state.accessToken || sessionStorage.accessToken
      return state.accessToken
    },
    get_id (state) {
      state._id = state._id || sessionStorage._id
      return state._id
    },
    get_addr (state) {
      state._addr = state._addr || sessionStorage._addr
      return state._addr
    },
    getWallets (state) {
      return state.walletsAddr
    }
  },
  mutations: {
    REQUEST_PAYMENT (state, data) {
      if(data == true)
      state.numsOfPayments += 1
      else
      state.numsOfPayments -= 1
      sessionStorage.numsOfPayments = state.numsOfPayments
      
    },
    WITHDRAW_GT (state, data) {
      sessionStorage.gt -= parseInt(data)
    },
    WITHDRAW_KRW (state, data) {
      sessionStorage.krw = data
    },
    DEPOSIT_KRW (state, data) {
      sessionStorage.krw = data
    },
    GET_WALLETS (state, data) {
      state.walletsAddr = data.addr
      sessionStorage.walletsAddr = data.addr
      sessionStorage.krw = data.krw
      sessionStorage.gt = data.gt
      sessionStorage.tx = data.tx
    },
    GET_ACCOUNT (state, data) {
      state._addr = data
      state.isEstablished = true
      sessionStorage._addr = state._addr
      sessionStorage.isEstablished = true
    },
    OPEN_ACCOUNT(state, data) {
      state._addr = data
      state.isEstablished = true
      sessionStorage.isEstablished = true
    },
    CLOSE_ACCOUNT (state, data) {
      state.isEstablished = false
      delete sessionStorage.isEstablished
    },
    LOAD (state, data) {
      state.user = { 
        '_id': data._id, 
        'email': data.email, 
        'name': data.name, 
        'birthday': data.birthday, 
        'created ': data.created, 
        'mobile': data.mobile
      }
    },
    LOGIN (state, data) {
      state._id = data._id
      state.accessToken = data.accessToken
      state.isAuthenticated = true
      sessionStorage.accessToken = data.accessToken
      sessionStorage._id = data._id
    },
    LOGOUT (state) {
      state.user = null
      state.accessToken = null
      state._id = null
      state._addr = null
      state.isAuthenticated = false
      state.isEstablished = false
      delete sessionStorage.accessToken
      delete sessionStorage._id
      delete sessionStorage._addr
      delete sessionStorage.walletsAddr
      delete sessionStorage.isEstablished
      delete sessionStorage.krw
      delete sessionStorage.gt
      delete sessionStorage.tx
    }
  },
  actions: {
    // REQUEST_PAYMENT({commit}, data){
      //   commit('REQUEST_PAYMENT', data)
      // },
    WITHDRAW_GT({commit}, data){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken 
      return commit('WITHDRAW_GT', data)
      // return axios.put(`${resourceHostWallets}/account/krw`, { 'krw': data })
      // .then(res => {
      //   if(res.data.success){
      //     commit('WITHDRAW_KRW', res.data.data.krw)
      //   }
      // })
    },
    WITHDRAW_KRW({commit}, data){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken 
      return axios.put(`${resourceHostWallets}/account/krw`, { 'krw': data })
      .then(res => {
        if(res.data.success){
          commit('WITHDRAW_KRW', res.data.data.krw)
        }
      })
    },
    DEPOSIT_KRW({commit}, data){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken 
      return axios.post(`${resourceHostWallets}/account/krw`, { 'krw': data })
      .then(res => {
        if(res.data.success){
          commit('DEPOSIT_KRW', res.data.data.krw)
        }
      })
    },
    GET_WALLETS({commit}){
      let wallets = {
        "addr": sessionStorage.walletsAddr,
        "krw": sessionStorage.krw,
        "gt": sessionStorage.gt,
        "tx": sessionStorage.tx
      }
      commit('GET_WALLETS', wallets)
      // // axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken 
      // // return axios.get(`${resourceHostWallets}/`+sessionStorage._addr)
      // // .then(res => {
      // //   if(res.data.success){
      // //     let wallets = {
      // //       "addr": res.data.data.addr,
      // //       "krw": res.data.data.krw,
      // //       "gt": res.data.data.gt,
      // //       "tx": res.data.data.tx
      // //     }
      // //     commit('GET_WALLETS', wallets)
      // //   }
      // })
    },
    GET_ACCOUNT({commit}){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken 
      return axios.get(`${resourceHostWallets}`)
      .then(res => {
        if(res.data.success){
          let data = res.data.data
          commit('GET_ACCOUNT', data)
          axios.get(`${resourceHostWallets}/`+data)
          .then(res => {
            if(res.data.success){
              let wallets = {
                "addr": res.data.data.addr,
                "krw": res.data.data.krw,
                "gt": res.data.data.gt,
                "tx": res.data.data.tx
              }
              commit('GET_WALLETS', wallets)
            }
          })
        }
      })
      .catch((error) => {
          console.log('error 3 ' + error);
      })
    },
    OPEN_ACCOUNT({commit}){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken
      console.log(this.getters.isAuthenticated)
      return axios.post(`${resourceHostWallets}`)
      .then(res => {
        console.log(res)
        if(res.data.success){
          let data = res.data.data
          console.log(data)
          // commit('OPEN_ACCOUNT', data)
          commit('OPEN_ACCOUNT', true)
          
        }
      })
    },
    CLOSE_ACCOUNT({commit}){
      commit('CLOSE_ACCOUNT', false)
    },
    LOAD ({commit}){
      axios.defaults.headers.common['x-access-token'] = sessionStorage.accessToken
      return axios.get(`${resourceHostUsers}/`+sessionStorage._id)
      .then(res => {
        if(res.data.success)
          commit('LOAD', res.data.data)
      })
      .catch((error) => {
          console.log('error 3 ' + error);
      })
    },
    LOGIN ({commit}, {email, password}) {
      enhanceAccessToken() 
      return axios.post(`${resourceHostAuth}/login`, {email, password})
        .then(({data}) => {
          if(data.success){
            commit('LOGIN', data.data)
            axios.defaults.headers.common['x-access-token'] = `${data.data.accessToken}`;
          }        
        })
    },
    LOGOUT ({commit}) {
      axios.defaults.headers.common['x-access-token'] = undefined
      commit('LOGOUT')
    }
  }
})
