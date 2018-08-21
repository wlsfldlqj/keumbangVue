<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">현금 KRW 출금하기</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>보유하신 현금(KRW)를 가상계좌로 인출하세요.</p>
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">보유 KRW 금액</label>
                            <div class="col-sm-10">
                                <p class="text-left">{{ formatPrice(wallets) }}</p>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">인출할 금액</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control w-75" id="inputAmounts" placeholder="인출할 KRW 금액 입력" v-model.lazy.number="withdraw">
                            </div>
                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="form-post-get" 
                                id="check_withdraw_fee">
                                KRW 1000원이 수수료로 지불됩니다.
                            </label>
                        </div>
                        <div class="form-group text-center">
                            <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                                <button type="button" @click="submit()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
                                                {{ user.name }}님의 KRW지갑에서 {{ formatPrice(withdraw+fee) }}원(수수료 {{ formatPrice(fee) }}원 포함)이 인출 완료되었습니다.
                                                <hr>
                                                인출 후 KRW 계좌 잔액: ₩{{ formatPrice(total) }}
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
var withdraw, fee, total
var user = [];
var wallets;
var data  = { withdraw: 0, fee : 1000, total: 0, user, wallets: 0 }
export default {
    data() {
        return data
    },
    mounted() {
        if(this.$store.getters.isEstablished){
            this.$store.dispatch('GET_WALLETS')
            .then(()=> {
                this.wallets = sessionStorage.krw
            })
        }
        else
            this.wallets = sessionStorage.krw
        if(this.$store.getters.getInfo == null){
          this.$store.dispatch('LOAD')
          .then(()=> {
              this.user = this.$store.getters.getInfo
          })
        }
        else
            this.user = this.$store.getters.getInfo
        // console.log(this.wallets)
    },
    methods: {
        submit() {
            this.total = parseInt(this.wallets) - parseInt(this.withdraw) - parseInt(this.fee)
            this.$store.dispatch('WITHDRAW_KRW',  (parseInt(this.withdraw) + parseInt(this.fee)) )
            .then(()=> {
                sessionStorage.krw = this.total
                this.wallets = sessionStorage.krw
            })
        }
        ,
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>
