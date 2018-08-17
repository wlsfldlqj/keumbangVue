<template>
    <div class="container bg-black d-flex justify-content-center ">
        <div id="loginCardBox" class="text-center" style="max-width: 370px;">
            <h2 class="card-title display-6 text-warning">KEUMBANG Login</h2>
            <div class="card-body">
                <img src="@/assets/img/logo.png"/>
                <form @submit.prevent="onSubmit(email, password)">
                  <div class="form-group">
                    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-warning">Login</button>
                </form>
                <p><i>{{msg}}</i></p>
                <!-- <pre>{{user}}</pre>
                <div v-for="log in accessLog">{{log.userId}}, {{log.createdAt}}</div> -->
            </div>
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
        .then(() => {
          this.$store.dispatch('GET_ACCOUNT')
          this.redirect()
        })
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
      // console.log('return===' + returnPath)
      if (typeof returnPath == "undefined") {
        this.$router.push('/')
      }
      else {
        // 리다이렉트 처리
        this.$router.push(returnPath)
      }
    }
  }
}
</script>

<style>
</style>
