<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">금방 토큰 마켓</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>금방에서 그 어디보다 빠르고 쉽게 구매하실 수 있습니다.</p>
            <div>
                <market-chart/>
            </div>
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">구매할 TxFee 토큰</label>
                            <div class="col-sm-10">
                                <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="구매할 수수료 토큰 수량 입력">
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-sm-2 col-form-label pt-0">결제 수수료 지불 수단</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="cash" checked>
                                            원화 결제
                                        </label>
                                    </div>
                                    <!-- <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled>
                                            금 토큰 결제
                                        </label>
                                    </div>
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled>
                                            수수료 토큰 결제
                                        </label>
                                    </div> -->
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group text-center">
                            <!-- <button type="submit" class="btn btn-primary">보내기</button> -->
                            <!-- 버튼-모달 이벤트 : 확인 메세지 -->
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    보내기
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
                                                <b class="text-warning">{{ user.name }}님</b>의 TxFee 계좌로 
                                                <b class="text-warning">TxFee 토큰 {{ tokens }}개</b> 입금이 완료되었습니다.
                                                <hr>
                                                <p class="mute">(구매 수수료: {{ fee }}, 결제 수단: {{ payment }})</p>
                                                <p class="mute">총 결제금액: ₩{{ formatPrice(total) }}</p>
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
import Chart from '@/components/market/components/MarketChart'
var tokens, user, payment, fee, total
var data  = { tokens, user: { id: 'test#14', name : '홍길동', account : '#abc' }, payment: 'KRW', fee:100 }
export default {
    name: 'TokenMarket',
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
    methods: {
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>

<style>
</style>
