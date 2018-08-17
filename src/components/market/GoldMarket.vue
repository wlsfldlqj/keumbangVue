<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">금방 마켓</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>금방에서 그 어디보다 빠르고 쉽게 구매하실 수 있습니다.</p>
            <div>
                <market-chart/>
            </div>
            <div class="card border-warning text-center w-80">
                <div class="card-title">
                    <div class="row">
                        <label for="ownedKRW" class="col-sm-2 col-form-label text-warning">보유 KRW/현금</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ wallets.krw }}</p>
                        </div>
                        <label for="ownedGT" class="col-sm-2 col-form-label text-warning">보유 Gold 토큰</label>
                        <div class="col-sm-2 row">
                            <p class="w-75 my-auto text-left">{{ wallets.gt }}</p>
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
                            <label for="inputAmounts" class="col-sm-2 col-form-label">구매할 금화</label>
                            <div class="col-sm-10">
                                <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="구매할 금화 입력">
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-sm-2 col-form-label pt-0" for="checkPayment">구매 수수료</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="checkPayment" id="payinKrw" value="krw" checked>
                                            현금 결제
                                        </label>
                                    </div>
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="checkPayment" id="payinTxFee" value="txfee">
                                            수수료 토큰 결제
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group text-center">
                            <!-- <button type="submit" class="btn btn-primary">보내기</button> -->
                            <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    보내기
                                </button>
                        </div>
                    </form>
                    <!-- Transaction contents END -->
                </div>
            </div>
            <div class="container row px-0 mx-auto">
                <table class="table text-center col table-hover">
                    <thead>
                        <tr>
                            <th colspan="2" class="bg-danger text-light">매도</th>
                        </tr>
                        <tr>
                            <th class="">호가</th>
                            <th class="">매도량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="" >
                            <td class="text-danger">43333</td>
                            <td class="text-danger">20</td>
                            
                        </tr>
                        <tr>
                            <td class="text-danger">44500</td>
                            <td class="text-danger">18</td>
                            
                        </tr>
                        <tr>
                            <td class="text-danger">44550</td>
                            <td class="text-danger">12</td>
                           
                        </tr>
                    </tbody>
                </table>
                <table class="table text-center col table-hover">
                    <thead>
                        <tr>
                            <th colspan="2" class="bg-info text-light">매수</th>
                        </tr>
                        <tr>
                            <th class="">호가</th>
                            <th class="">매수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-info">38000</td>
                            <td class="text-info">10</td>
                        </tr>
                        <tr>
                            <td class="text-info">37280</td>
                            <td class="text-info">18</td>
                        </tr>
                        <tr>
                            <td class="text-info">37080</td>
                            <td class="text-info">17</td>
                        </tr>
                    </tbody>
                </table>
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
                        <div class="modal-body text-center">
                            <b class="text-warning">{{ user.name }}님</b>의 금화 계좌로 
                            <b class="text-warning">금화 {{ tokens }}개</b> 입금이 완료되었습니다.
                            <hr>
                            <p class="mute">(구매 수수료: {{ fee }}{{ payment }})</p>
                            <p class="mute">총 결제금액: ₩ {{ formatPrice(total) }}</p>
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
</template>

<script>
import Chart from '@/components/market/components/MarketChart'
import store from '@/store/'
var tokens, receiver, payment, fee, krw, gt, tx
var wallets = { krw, gt, tx }
var data  = { wallets, tokens, receiver, payment, fee, user: { addr: 'RDUpHlh1P1EuQnJXkUWn', name : '금방 관리자', krw : '250000', gt : '50', tx : '50' } }
export default {
    components: {
        'market-chart': Chart
    },
    data(){
        return data
    },
    computed: {
        total : function() {
            return this.tokens * 4200
        }
    },
    created() {
        if(this.$store.getters.isEstablished){
            this.wallets.krw = sessionStorage.krw,
            this.wallets.gt = sessionStorage.gt,
            this.wallets.tx = sessionStorage.tx
        }
    },
    methods: {
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        submit(){
            if(this.payment == 'krw')
                this.fee = this.tokens * 42000 * 0.01
            else if(this.payment == 'tx')
                this.fee = this.tokens * 42000 * 0.00001
        }
    }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>
