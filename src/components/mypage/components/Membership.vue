<template>
    <div>
        회원 등급: 인증회원(level: 1~5)/비인증회원
        <hr>
        인증 레벨: { 
          1: 회원가입(이메일/폰번호), 
          2: 본인 인증(폰 인증/실명 인증), 
          3: OTP 인증(구글OTP등록), 
          4: 계좌 인증(본인 계좌 인증 및 등록), 
          5: KYC인증(신분증+본인 사진 촬영) 
        }
    </div>
</template>

<script>
export default {
  name: 'membership'
}
</script>

<style>

</style>
