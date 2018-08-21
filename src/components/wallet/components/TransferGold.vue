<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">송금하기</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>금방에서 빠르게 송금하실 수 있습니다.</p>

            <div class="card border-warning text-center w-80">
                <div class="card-header">
                    <!-- <fieldset class="form-group">
                        <div class="row"> -->
                            <div class="text-left">
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label active">
                                        <input v-model="transfer" class="form-check-input" type="radio" name="transferOptions" id="trans4GT" value="Gold " checked>
                                        Gold 송금 (기본선택)
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input v-model="transfer" class="form-check-input" type="radio" name="transferOptions" id="trans4TxFee" value="TxFee" >
                                        TxFee 송금
                                    </label>
                                </div>
                            </div>
                        <!-- </div>
                    </fieldset> -->

                </div>
                <div class="card-title">
                    <div class="row">
                        <label for="ownedKRW" class="col-sm-2 col-form-label text-warning">보유 KRW/현금</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ formatPrice(wallets.krw) }}</p>
                        </div>
                        <label for="ownedGT" class="col-sm-2 col-form-label text-warning">보유 Gold 토큰</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ formatPrice(wallets.gt) }}</p>
                        </div>
                        <label for="ownedTxFee" class="col-sm-2 col-form-label text-warning">보유 TxFee 토큰</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ formatPrice(wallets.tx) }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">보낼 {{ transfer }} 토큰 개수</label>
                            <div class="col-sm-10 row">
                                <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="송금할 토큰 개수 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAddress" class="col-sm-2 col-form-label">받는 분</label>
                            <div class="col-sm-10 row">
                                <input v-model="receiver" type="text" class="form-control w-75" id="inputAddress" placeholder="받는 분(계좌번호 또는 연락처)">
                                <button type="button" class="btn" @click="insertAddr()">QR코드 촬영</button>
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-sm-2 col-form-label pt-0" for="checkPayment">이체 수수료</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input v-model="payment" class="form-check-input" type="radio" name="checkPayment" id="payinKrw" value="krw" checked>
                                            현금 결제
                                        </label>
                                    </div>
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input v-model="payment" class="form-check-input" type="radio" name="checkPayment" id="payinTxFee" value="tx" >
                                            수수료 토큰 결제
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group text-center">
                            <!-- <button type="submit" class="btn btn-primary">보내기</button> -->
                            <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                                <button type="button" @click="submit()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    보내기
                                </button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <b>{{ receiver }}</b>계좌로 <b>Gold 토큰 {{ formatPrice(tokens) }}개</b> 송금합니다.
                                        <p class="mute">
                                            결제 수수료
                                            (<span v-if="payment == 'krw'">KRW/현금</span>
                                            <span v-if="payment == 'tx'">TxFee 토큰</span>
                                            결제): {{ formatPrice(fee) }}
                                        </p>
                                        거래 승인 요청 중입니다.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" @click="submit2()" class="btn btn-secondary" data-dismiss="modal">확인</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 버튼-모달 이벤트 : 확인 메세지 END -->
                    </form>
                    <!-- Transaction contents END -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store/'
var transfer, tokens, receiver, payment, fee, krw, gt, tx
var wallets = { krw, gt, tx }
var data  = { transfer, wallets,  tokens:0, receiver, payment, fee:0 }
export default {
  data() {
    return data
  },
  mounted() {
     if(this.$store.getters.isEstablished){
        //   this.$store.dispatch('GET_WALLETS')
        //   .then(()=> {
        //       this.wallets = this.$store.getters.getWallets
        //   })
        this.wallets.krw = sessionStorage.krw,
        this.wallets.gt = sessionStorage.gt,
        this.wallets.tx = sessionStorage.tx
      }
      console.log(wallets)
  },
  methods: {
      insertAddr() {
          alert('QR코드를 촬영해 주세요')
          this.receiver = '#03jhf821iojljkajf0&ajks39'
      },
      submit(){
          if(this.payment == 'krw')
            this.fee = this.tokens * 42000 * 0.01
          else if(this.payment == 'tx')
            this.fee = this.tokens * 42000 * 0.00001
      },
      submit2(){
        alert('거래 승인이 완료 되었습니다.')
        sessionStorage.gt = parseInt(sessionStorage.gt) - parseInt(this.tokens)
        sessionStorage.krw = parseInt(sessionStorage.krw) + this.tokens * 42000 * 1.1
        if(this.payment == 'krw')
           sessionStorage.krw -= this.fee
        else if(this.payment == 'tx')  
           sessionStorage.tx -= this.fee
      },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
  }
}
</script>