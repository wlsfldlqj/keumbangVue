<template>
    <div class="">
        <div class="jumbotron bg-white p-s">
            <h2 class="display-4 text-warning">My Wallets</h2>
            <p class="text-right"><router-link to="/login">Back</router-link></p>
            <hr class="my-4">
            <p>보유하신 지갑별 자산 현황과 거래 내역을 확인하실 수 있습니다.</p>
            <div class="card" id="card-wallet-krw">
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
                                <td>10000</td>
                                <td>0</td>
                                <td>10000</td>
                                <td>
                                    <button class="btn btn-outline-dark" href="#">입금</button>
                                    <button class="btn btn-outline-dark" href="#">출금</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <!-- </div> -->
            <!-- <div class="card" id="card-wallet-gold"> -->
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
                                <td>10000</td>
                                <td>0</td>
                                <td>10000</td>
                                <td>
                                    <button class="btn btn-outline-dark" href="#">인출</button>
                                    <button class="btn btn-outline-dark" href="#">구매</button>
                                    <button class="btn btn-outline-dark" href="#">이체</button>
                                    <button class="btn btn-outline-dark" href="#">자세히</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">TxFee<p class="display-10">TF</p></th>
                                <td>30</td>
                                <td>0</td>
                                <td>30</td>
                                <td>
                                    <button class="btn btn-outline-dark" href="#">이체</button>
                                    <button class="btn btn-outline-dark" href="#">자세히</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WalletsHistory"
}
</script>
