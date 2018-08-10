<template>
    <div class="card text-center" style="max-width: 370px; margin: 0 auto;">
        <h2 class="card-title display-6 text-warning">KEUMBANG Login</h2>
        <div class="card-body">
            <img src="@/assets/img/logo.png"/>
            <form @submit.prevent="onSubmit(email, password)">
                <input type="text" v-model="email" placeholder="Email Address">
                <input type="password" v-model="password" placeholder="Password">
                <br>
                <input class="btn btn-warning" type="submit" value="Login">
            </form>
            <p><i>{{msg}}</i></p>
            <!-- <router-link :to="'/login'"><button class="btn btn-warning">로그인</button></router-link> -->
            <!-- <pre>{{user}}</pre>
            <div v-for="log in accessLog">{{log.userId}}, {{log.createdAt}}</div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
      return {
        email: '',
        password: '',
        msg: ''
      }
    },
  methods: {
    onSubmit(email, password) {
      // LOGIN 액션 실행 
      this.$store.dispatch('LOGIN', {email, password})
        .then(() => this.redirect())
        .catch(({message}) => this.msg = message)
    },
    redirect() {
      const {search} = window.location
      const tokens = search.replace(/^\?/, '').split('&')
      const {returnPath} = tokens.reduce((qs, tkn) => {
        const pair = tkn.split('=')
        qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
      }, {})

      // 리다이렉트 처리
      this.$router.push(returnPath)
    }
  }
}
</script>

<style>

</style>
