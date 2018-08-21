<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">KRW 입금하기</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>등록하신 가상계좌로 고객님의 KRW지갑에 현금을 입금하실 수 있습니다.</p>
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="ownedKRW" class="col-sm-2 col-form-label text-warning">보유 KRW/현금</label>
                            <div class="col-sm-10">
                                <div class="col-sm-2 row ">
                                    <p class="w-75 my-auto text-left">{{ formatPrice(wallets) }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">입금할 금액</label>
                            <div class="col-sm-10">
                                <input v-model="deposit" type="text" class="form-control w-75" id="inputAmounts" placeholder="입금할 금액 입력">
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" @click="submit()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                입금하기
                            </button>
                        </div>
                    </form>
                    <!-- Transaction contents END -->
                    <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body text-center">
                                    {{ user.name }}님의 KRW지갑으로 {{ formatPrice(deposit) }}원 입금 완료되었습니다.
                                    <hr>
                                    입금 후 KRW 계좌 잔액: ₩{{ formatPrice(total) }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 버튼-모달 이벤트 : 확인 메세지 END -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var deposit, payment, total
var user = [];
var wallets;
var data  = { deposit:0, user, payment, wallets, total:0}
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
            this.total = parseInt(this.wallets.krw) + parseInt(this.deposit)
            this.$store.dispatch('DEPOSIT_KRW', this.deposit)
            .then(() => 
                this.wallets.krw = sessionStorage.krw
            )
            this.wallets.krw = sessionStorage.krw
        },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

    }
}
</script>

<style>

</style>
