<template>
    <div class="col-10">
        <div class="row">
            <div class="col-3">Email.</div>
            <div class="col-auto">{{ email }}</div>
        </div>
        <div class="row">
            <div class="col-3">Name.</div>
            <div class="col-auto">{{ nameFirst }} {{ nameLast }}
            </div>
        </div>
        <div class="row">
            <div class="col-3">Birthdate.</div>
            <div class="col-auto">{{ birthdate }}</div>
        </div>
        <div class="row">
            <div class="col-3">Mobile Number.</div>
            <div class="col-auto">{{ mobile }}</div>
        </div>
        <div class="row">
            <div class="col-3">Password.</div>
            <div class="col-auto">{{ passwd }}</div>
        </div>
        <div class="row">
            <div class="col-3">assword Check</div>
            <div class="col-auto">{{ passwd_check }}</div>
        </div>
        <div class="row">
            <div class="col-3">Address.</div>
            <div class="col-auto">{{ address }}</div>
        </div>
    </div>
</template>

<script>
var user = {
    email: 'test@gmail.com',
    nameFirst: 'Test',
    nameLast: 'User',
    name: 'Test User',
    birthdate: '2000-01-31',
    mobile: '10-0000-0000',
    passwd: '.',
    passwd_check: '.',
    address: '.'
}
export default {
  name: 'userProfile',
  data(){
      return user
  }
}
</script>

<style>

</style>
