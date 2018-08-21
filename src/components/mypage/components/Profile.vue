<template>
    <div class="col-10">
        <div class="row">
            <div class="col-3">Email.</div>
            <div class="col-auto">{{ user.email }}</div>
        </div>
        <div class="row">
            <div class="col-3">Name.</div>
            <div class="col-auto">{{ user.name }}
            </div>
        </div>
        <div class="row">
            <div class="col-3">Mobile Number.</div>
            <div class="col-auto">{{ user.mobile }}</div>
        </div>
        <div class="row">
            <div class="col-3">Birthdate.</div>
            <div class="col-auto">{{ user.birthday }}</div>
        </div>
         <!-- <div class="row">
            <div class="col-3">Join Date.</div>
            <div class="col-auto">{{ user.created }}</div>
        </div> -->
    </div>
</template>

<script>
import store from '@/store/'
var user = { email: '', name: '', mobile: '', birthday: '', created: ''}
export default {
  name: 'userProfile',
  data() {
    return {
      user,
      accessLog: []
    }
  },
  mounted() {
      console.log(this.$store.getters.getInfo)
      if(this.$store.getters.getInfo == null){
          this.$store.dispatch('LOAD')
          .then(()=> {
              return this.user = this.$store.getters.getInfo
          })
      }
      else
          return this.user = this.$store.getters.getInfo
  },
  method: {

  }

}
</script>

<style>

</style>
