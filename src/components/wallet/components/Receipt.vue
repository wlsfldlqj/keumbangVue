<template>
    <div class="container">
        <div class="jumbotron bg-white">
            <h2 class="display-4 text-warning">금방 결제 영수증</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <div class="card border-warning text-center w-80">
                <div class="card-body">
                    <!-- receipt contents -->
                    <div class="form-group row">
                        <label for="inputAmounts" class="col-sm-2 col-form-label">구매한 토큰</label>
                        <div class="col-sm-10">
                            <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="'{{ fee }}'(지불 수단: '{{ payment }}')">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputAmounts" class="col-sm-2 col-form-label">결제 수수료</label>
                        <div class="col-sm-10">
                            <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="'{{ fee }}'(지불 수단: '{{ payment }}')">
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label for="inputAmounts" class="col-sm-2 col-form-label">총 결제 금액</label>
                        <div class="col-sm-10">
                            <input v-model="tokens" type="text" class="form-control w-75" id="inputAmounts" placeholder="'{{ total }}'">
                        </div>
                    </div>
                    <!-- receipt contents END -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var token, tokens, user, payment, fee, total
var data  = { token, tokens, user: { id: 'test#14', name : '홍길동', account : '#abc' }, payment, fee:100 }
export default {
    data(){
        data.token = '금화';
        data.tokens = '50';
        data.payment = 'KRW';
        data.fee = '4295';
        return data;
    }
}
</script>

<style>
</style>
