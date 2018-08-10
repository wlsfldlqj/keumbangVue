<template>
    <div class="container bg-black w-80">
        <div class="text-center align-self-center">
            <div class="jumbotron bg-white">
                <router-link :to="'/about'"><h2 class="display-8 text-warning">About Keumbang</h2></router-link>
                <div>
                    <h2>Home</h2>
                    {{greeting}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Login from './Login'
import axios from 'axios'
import store from '@/store'
export default {
    components: {
        Login
    },
    computed: {
        // isAuthenticated() {
        //     var auth = store.getters.isAuthenticated;
        //     console.log(auth)
        //     return false;
        // } 
    },
    data() {
        return {
        greeting: ''
        }
    },
    created() {
        axios.get('http://localhost:3000/home')
        .then(result => this.greeting = result.data.greeting)
    }
}
</script>
