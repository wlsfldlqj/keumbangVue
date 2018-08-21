<template>
    <div class="">
        <div class="jumbotron bg-white p-s">
            <h2 class="display-4 text-warning">My Wallets</h2>
            <p class="text-right"><button class="btn text-warning btn-link" @click="$router.go(-1)">Back</button></p>
            <hr class="my-4">
            <p>
                보유하신 지갑별 자산 현황과 거래 내역을 확인하실 수 있습니다.
                <span v-if="isEstablished">
                    <!-- <button type="button" @click="closeAccounts()" class="btn btn-outline-secondary btn-sm"> -->
                    <button type="button" @click="checkAccounts()" class="btn btn-outline-secondary btn-sm">
                        지갑 계좌 조회
                    </button>
                </span>
            </p>
            <div class="card" id="card-wallet-krw" v-if="isEstablished">
                <wallet-list />
            </div>
             <div class="card mx-auto" id="card-open-accounts" v-else style="width: 800px">
                <button type="button" @click="openAccounts()" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                    지갑 개설
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
                            <div class="modal-body text-center">
                                <!-- 계좌가 개설되었습니다.
                                <hr> -->
                                <p>KRW 지갑 생성 성공</p>
                                <p>Gold Token 지갑 생성 성공</p>
                                <p>TxFee Token 지갑 생성 성공</p>
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
</template>

<script>
import store from '@/store/'
import WalletList from '@/components/wallet/components/WalletList'

export default {
    components: {
        WalletList
    },
    computed: {
        isEstablished() {
            return this.$store.getters.isEstablished
            // return false;
        }
    },
    methods: {
        openAccounts: function() {
            this.$store.dispatch('OPEN_ACCOUNT')
            .then(() => {
                isEstablished()
                this.$store.dispatch('GET_ACCOUNT')
            })
            .catch(({message}) => this.msg = message)
        },
        closeAccounts: function() {
            this.$store.dispatch('CLOSE_ACCOUNT')
            .then(() => isEstablished())
            .catch(({message}) => this.msg = message)
        },
        checkAccounts: function() {
            this.$store.dispatch('GET_ACCOUNT')
            .then(() => alert(this.$store.getters.getWallets))
            .catch(({message}) => this.msg = message)
        }
    }
}
</script>
