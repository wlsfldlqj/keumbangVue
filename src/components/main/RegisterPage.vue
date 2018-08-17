<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">금방 회원가입</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <form @submit.prevent="onSubmit(email, passwd, passwd_check, name, mobile, birthday, kyc)">
                        <div class="form-group row">
                            <label for="inputEmail" class="col-sm-2 col-form-label">이메일</label>
                            <div class="col-sm-10">
                                <input v-model="email" type="email" class="form-control w-75" id="inputEmail" placeholder="회원 이메일 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">비밀번호</label>
                            <div class="col-sm-10">
                                <input v-model="passwd" type="password" class="form-control w-75" id="inputPassword" placeholder="비밀번호 입력(9자리 이상)">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPasswordCheck" class="col-sm-2 col-form-label">비밀번호 확인</label>
                            <div class="col-sm-10">
                                <input v-model="passwd_check" type="password" class="form-control w-75" id="inputPasswordCheck" placeholder="비밀번호 확인 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-2 col-form-label">성명</label>
                            <div class="col-sm-10">
                                <input v-model="name" type="text" class="form-control w-75" id="inputName" placeholder="회원 성명 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputMobile" class="col-sm-2 col-form-label">연락처</label>
                            <div class="col-sm-10">
                                <input v-model="mobile" type="text" class="form-control w-75" id="inputMobile" placeholder="휴대전화 연락처 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputBirthday" class="col-sm-2 col-form-label">생년월일</label>
                            <div class="col-sm-10">
                                <input v-model="birthday" type="text" class="form-control w-75" id="datepicker" placeholder="생년월일 입력">
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend for="checkKYC" class="col-sm-2 col-form-label pt-0">실명 인증</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" v-model="kyc" @click="checkKYC()" type="checkbox" name="checkKYC">
                                            KYC 인증 확인(임시)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary">가입</button>
                    </form>
                    <!-- Transaction contents END -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
      return {
        email: '',
        passwd: '',
        passwd_check: '',
        name: '',
        mobile: '',
        birthday: '',
        kyc: ''
      }
    },
  methods: {
    checkKYC(){
        alert('확인되었습니다.');
    },
    onSubmit(email,passwd,passwd_check,name,mobile,birthday,kyc) {
      // 액션 적 실행:  빈 데이터 확인, kyc인증 체크 했는지 확인
        if(passwd == passwd_check){
            var password = passwd
        }
      // CREATE 액션 실행 
        axios.post('http://localhost:3000/api/users', {email, password, name, mobile, birthday})
        .then(() => this.redirect())
    },
    redirect() {
        // 리다이렉트 처리
        this.$router.go(-1)
    }
  }
}
// $(function() {
//   $( '#datepicker' ).datepicker({
//       dateFormat: 'yy-mm-dd'
//   });
// });
</script>

<style>

</style>
