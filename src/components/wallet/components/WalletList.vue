<template>
    <div>
        <h5 class="card-header">현금(KRW) 자산</h5>
        <div class="card-body text-center">
            <table class="table table-hover table-borderless align-middle">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">KRW자산</th>
                        <th scope="col">총 보유 금액</th>
                        <th scope="col">미체결 금액</th>
                        <th scope="col">거래 가능 금액</th>
                        <th scope="col"><button class="btn btn-outline-dark text-white">입출금 계좌 관리</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">대한민국 원<p class="display-10">KRW</p></th>
                        <td>{{ formatPrice(wallets.krw) }}</td>
                        <td>0</td>
                        <td>{{ formatPrice(wallets.krw) }}</td>
                        <td>
                            <button class="btn btn-link"><router-link :to="'deposit-krw'">입금</router-link></button>
                            <button class="btn btn-link"><router-link :to="'withdraw-krw'">출금</router-link></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h5 class="card-header">토큰Token 자산</h5>
        <div class="card-body text-center">
            <table class="table table-hover table-borderless">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">이름</th>
                        <th scope="col">총 보유 수량</th>
                        <th scope="col">미체결 수량</th>
                        <th scope="col">거래 가능 수량</th>
                        <th scope="col">계좌 관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Gold Token<p class="display-10">GT</p></th>
                        <td>{{ formatPrice(wallets.gt) }}</td>
                        <td>0</td>
                        <td>{{ formatPrice(wallets.gt) }}</td>
                        <td>
                            <button class="btn btn-link"><router-link :to="'transfer'">송금</router-link></button>
                            <button class="btn btn-link"><router-link :to="'gold-market'">구매</router-link></button>
                            <button class="btn btn-link"><router-link :to="'withdraw-gold'">인출</router-link></button>
                            <!-- <button class="btn btn-link" href="#">자세히</button> -->
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">TxFee<p class="display-10">TF</p></th>
                        <td>{{ formatPrice(wallets.tx) }}</td>
                        <td>0</td>
                        <td>{{ formatPrice(wallets.tx) }}</td>
                        <td>
                            <button class="btn btn-link"><router-link :to="'transfer-txfee'">송금</router-link></button>
                            <button class="btn btn-link"><router-link :to="'token-market'">구매</router-link></button>
                            <!-- <button class="btn btn-link" href="#">자세히</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import store from '@/store/'
import axios from 'axios'
export default {
  data() {
      return {
          wallets : []
      }
  },

  mounted() {
      if(this.$store.getters.isEstablished){
          this.$store.dispatch('GET_WALLETS')
          .then(()=> {
              this.wallets = {
                  "addr": sessionStorage.walletsAddr,
                  "krw": sessionStorage.krw,
                  "gt": sessionStorage.gt,
                  "tx": sessionStorage.tx
              }
          })
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
