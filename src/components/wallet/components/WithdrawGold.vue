<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">금 인출하기</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>보유하신 금화를 금으로 인출하세요.</p>
            <div class="card border-warning text-center w-80">
                <div class="card-title">
                    <div class="row">
                        <label for="ownedKRW" class="col-sm-2 col-form-label text-warning">보유 KRW/현금</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left" id="myKrw">{{ formatPrice(wallets.krw) }}</p>
                        </div>
                        <label for="ownedGT" class="col-sm-2 col-form-label text-warning">보유 Gold 토큰</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left" id="myGt">{{ wallets.gt }}</p>
                        </div>
                        <label for="ownedTxFee" class="col-sm-2 col-form-label text-warning">보유 TxFee 토큰</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ wallets.tx }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">인출할 금화</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control w-75" id="inputAmounts" placeholder="인출할 금 토큰 개수 입력" v-model.lazy.number="tokens">
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row form-group">
                                <legend class="col-sm-2 col-form-label pt-0">이체 수수료</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm row">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="form-payments" id="radio_payments_cash" value="payments_cash" checked>
                                            현금 결제
                                        </label>
                                    </div>
                                    <div class="form-check col-sm row">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="form-payments" id="radio_payments_token" value="payments_token">
                                            수수료 토큰 결제
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="form-group">
                            <div class="row form-group" >
                                <legend class="col-sm-2 col-form-label pt-0">수령 방법</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm row">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="form-post-get" id="radio_receive_take" value="drop_by" checked>
                                            방문 수령
                                        </label>
                                    </div>
                                    <div class="form-check col-sm row">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="form-post-get" 
                                            id="radio_receive_send" value="package"
                                            data-toggle="collapse" data-target="#check-address" aria-expanded="false">
                                            보안 택배 배송
                                        </label>
                                        <div class="col-sm collapse" id="check-address" >
                                            <label class="col-form-label">배송지(내 기본 주소)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group text-center">
                            <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                                <button type="submit" @click="submit()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    신청하기
                                </button>
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
                                                금화 {{ tokens }}개가 인출 신청이 완료되었습니다.
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <!-- 버튼-모달 이벤트 : 확인 메세지 END -->
                        </div>
                    </form>
                    <!-- Transaction contents END -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store/'
var tokens, payments, fee
var wallets = { krw:0, gt:0, tx:0 }
var data  = { wallets, tokens:0, payments }
export default {
    data(){
    return data
  },
  computed: {
        fee : function() {
            if(this.payment == 'krw')
                return this.fee = this.tokens * 42000 * 0.01
            else if(this.payment == 'tx')
                return this.fee = this.tokens * 42000 * 0.00001
        }
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
  },
  methods: {
    submit(){
        alert('거래 승인이 완료 되었습니다.')
        sessionStorage.gt = parseInt(sessionStorage.gt) - parseInt(this.tokens)
        if(this.payment == 'krw'){
            sessionStorage.krw = parseInt(sessionStorage.krw) - parseInt(this.fee)
        }
        else if(this.payment == 'tx')  
           sessionStorage.tx = parseInt(sessionStorage.tx) - parseInt(this.fee)
        this.wallets.krw = sessionStorage.krw,
        this.wallets.gt = sessionStorage.gt,
        this.wallets.tx = sessionStorage.tx
    },
    formatPrice(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}
</script>
