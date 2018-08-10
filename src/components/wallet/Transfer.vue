<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">송금하기</h2>
            <p class="text-right"><router-link to="/login">Back</router-link></p>
            <hr class="my-4">
            <p>금방에서 빠르게 송금하실 수 있습니다.</p>
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <!-- Transaction contents -->
                    <form class="">
                        <div class="form-group row">
                            <label for="inputAmounts" class="col-sm-2 col-form-label">보낼 금액</label>
                            <div class="col-sm-10">
                                <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="송금할 금액 입력">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAddress" class="col-sm-2 col-form-label">받는 분</label>
                            <div class="col-sm-10">
                                <input v-model="receiver" type="text" class="form-control w-75" id="inputAddress" placeholder="받는 분(계좌번호 또는 연락처)">
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-sm-2 col-form-label pt-0">이체 수수료</legend>
                                <div class="col-sm-10 text-left">
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                            현금 결제
                                        </label>
                                    </div>
                                    <div class="form-check col-sm">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" disabled>
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
                                                {{ receiver }}계좌로 금화 {{ tokens }}개 입금이 완료되었습니다.
                                                <p class="mute">(결제 수수료: {{ fee }}{{ payment }})</p>
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
var tokens, receiver, payment, fee
var data  = { tokens, receiver, payment, fee:100 }
export default {
    data(){
    return data
  }
}
</script>
