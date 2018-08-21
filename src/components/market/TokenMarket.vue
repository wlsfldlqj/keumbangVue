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
                            <p class="w-75 my-auto text-left" id="myTx">{{ wallets.tx }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">구매할 토큰 수량</label>
                            <div class="col-sm-10">
                                <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="구매할 토큰 수량 입력">
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
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="cal()">
                                    보내기
                                </button>
                        </div>
                    </form>
                    <!-- Transaction contents END -->
                </div>
            </div>
            <div class="container row px-0 mx-auto">
                <table class="table text-center col table-hover" style="width:50%">
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
                        <tr @click="buyGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-danger">333</td>
                            <td class="text-danger">20</td>
                            
                        </tr>
                        <tr @click="buyGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-danger">500</td>
                            <td class="text-danger">18</td>
                            
                        </tr>
                        <tr @click="buyGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-danger">550</td>
                            <td class="text-danger">12</td>
                           
                        </tr>
                    </tbody>
                </table>
                <table class="table text-center col table-hover" style="width:50%">
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
                        <tr @click="sellGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-info">380</td>
                            <td class="text-info">10</td>
                        </tr>
                        <tr @click="sellGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-info">370</td>
                            <td class="text-info">18</td>
                        </tr>
                        <tr @click="sellGold($event)" data-toggle="modal" data-target="#exampleModal">
                            <td class="text-info">360</td>
                            <td class="text-info">17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" id="modalTrue" style="display:none;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            <b class="text-warning">{{ user.name }}님</b>의 토큰 계좌로 
                            <b class="text-warning">토큰 {{ tokens }}개</b> 입금이 완료되었습니다.
                            <hr>
                            <p class="mute">(구매 수수료: {{ fee }}{{ payment }})</p>
                            <p class="mute">총 결제금액: ₩ {{ formatPrice(total) }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">확인</button>
                        </div>
                    </div>
                    <div class="modal-content" id="modalFalse" style="display:none;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            <b class="text-warning">{{ user.name }}님</b>의 보유 현금이 부족합니다.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">확인</button>
                        </div>
                    </div>    
                    <div class="modal-content" id="selModal" style="display:none;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center" id="selModalTrue">
                            수수료 토큰을 판매했습니다.
                        </div>                        
                        <div class="modal-body text-center" id="selModalFalse">
                            보유하고 있는 수수료 토큰이 부족합니다.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">확인</button>
                        </div>
                    </div> 
                    <div class="modal-content" id="buyModal" style="display:none;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">금방</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center" id="buyModalTrue">
                            수수료 토큰을 구입했습니다.
                        </div>                        
                        <div class="modal-body text-center" id="buyModalFalse">
                            보유하고 있는 현금이 부족합니다.
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
var data  = { wallets, tokens:0, receiver, payment, fee, user: { addr: 'RDUpHlh1P1EuQnJXkUWn', name : '금방 관리자', krw : '250000', gt : '50', tx : '50' }, modalPossible: true, modalShow: false }
export default {
    components: {
        'market-chart': Chart
    },
    data(){
        return data
    },
    computed: {
        total : function() {
            return this.tokens * 420
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
        cal(){
            var krw = this.formatNum($("#myKrw").text())
            if(krw < this.tokens * 420){
                $("#modalTrue").hide();
                $("#selModal").hide();
                $("#modalFalse").show();                
            }else{
                sessionStorage.tx = parseInt(sessionStorage.tx) + Number(this.tokens)
                sessionStorage.krw = Number(sessionStorage.krw) - Number(this.tokens) * 420
                $("#myTx").text(this.formatPrice(this.formatNum($("#myTx").text())+this.formatNum(this.tokens)))
                $("#myKrw").text(this.formatPrice(this.formatNum($("#myKrw").text()) - this.formatNum(this.tokens) * 420))
                $("#modalTrue").show();
                $("#modalFalse").hide();
                $("#selModal").hide();
            }            
            
            $("#selModal").hide(); $("#selModalTrue").hide(); $("#selModalFalse").hide(); 
            $("#buyModal").hide(); $("#buyModalTrue").hide(); $("#buyModalFalse").hide(); 
        },
        sellGold(e){
            var price = this.formatNum($(e.currentTarget).find("td").eq(0).text());
            var num = this.formatNum($(e.currentTarget).find("td").eq(1).text());

            if(this.formatNum($("#myTx").text()) < this.formatNum(num)){
                $("#modalTrue").hide();
                $("#modalFalse").hide();
                $("#buyModal").hide();
                $("#selModal").show(); $("#selModalTrue").hide(); $("#selModalFalse").show(); 
            }else{
                sessionStorage.tx = Number(sessionStorage.tx) - num
                sessionStorage.krw = Number(sessionStorage.krw) + num * price
                $("#myKrw").text(this.formatPrice(this.formatNum($("#myKrw").text())+(num*price)))
                $("#myTx").text(this.formatPrice(this.formatNum($("#myTx").text())-(num)))
                $(e.currentTarget).remove()

                $("#modalTrue").hide();
                $("#modalFalse").hide();
                $("#buyModal").hide();
                $("#selModal").show(); $("#selModalTrue").show(); $("#selModalFalse").hide(); 
            }
        },
        buyGold(e){
            var price = this.formatNum($(e.currentTarget).find("td").eq(0).text());
            var num = this.formatNum($(e.currentTarget).find("td").eq(1).text());

            console.log(this.formatNum($("#myKrw").text()) , this.formatNum(price*num))
            if(this.formatNum($("#myKrw").text()) < this.formatNum(price*num)){
                $("#modalTrue").hide();
                $("#modalFalse").hide();
                $("#selModal").hide();
                $("#buyModal").show(); $("#buyModalTrue").hide(); $("#buyModalFalse").show(); 
            }else{
                sessionStorage.tx = Number(sessionStorage.tx) + num
                sessionStorage.krw = Number(sessionStorage.krw) - num * price
                $("#myKrw").text(this.formatPrice(this.formatNum($("#myKrw").text())-(num*price)))
                $("#myTx").text(this.formatPrice(this.formatNum($("#myTx").text())+(num)))
                $(e.currentTarget).remove()

                $("#modalTrue").hide();
                $("#modalFalse").hide();
                $("#selModal").hide();
                $("#buyModal").show(); $("#buyModalTrue").show(); $("#buyModalFalse").hide(); 
            }
        },        
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        formatNum(value){
            return Number(value.toString().replace(/,/gi,""))
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
