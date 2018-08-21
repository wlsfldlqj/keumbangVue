<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
		<a class="navbar-brand" href="/">금방</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item mx-2">
					<button class="btn btn-link" type="button" data-toggle="collapse" 
						data-target="#sub-about" aria-expanded="false" aria-controls="collapseOne">
						About Keumbang
					</button>
					<div id="sub-about" class="collapse">
						<ul class="nav flex-column">
							<li class="nav-link"><router-link :to="'about'">About Keumbang</router-link></li>
							<li class="nav-link"><router-link :to="'about-service'">Services</router-link></li>
							<!-- <li class="nav-link">Contacts</li> -->
							<li class="nav-link"></li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<button class="btn btn-link" type="button" data-toggle="collapse" 
						data-target="#sub-market" aria-expanded="false" aria-controls="collapseOne">
						금방 거래소
					</button>
					<div id="sub-market" class="collapse">
						<ul class="nav flex-column">
							<li class="nav-link"><router-link :to="'gold-market'">금화 구매</router-link></li>
							<li class="nav-link"><router-link :to="'withdraw-gold'">금화 인출</router-link></li>
							<li class="nav-link"><router-link :to="'token-market'">(수수료) 토큰 구매</router-link></li>
							<li class="nav-link" disabled>금방 장터(준비중)</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<button class="btn btn-link" type="button" data-toggle="collapse" 
						data-target="#sub-accounts" aria-expanded="false" aria-controls="collapseOne">
						지갑관리
					</button>
					<div id="sub-accounts" class="collapse">
						<ul class="nav flex-column">
							<li class="nav-link"><router-link :to="'wallets'">계좌 관리</router-link></li>
							<li class="nav-link"><router-link :to="'wallets-history'">거래 내역</router-link></li>
						</ul>
					</div>
				</li>
				<li class="nav-item" v-if="isAuthenticated">
					<router-link :to="'mypage'"><button class="btn btn-link my-2 my-sm-0">마이페이지</button></router-link>
				</li>
				<li class="nav-item">
					<button class="btn btn-link my-2 my-sm-0 text-dark" href="" v-if="isAuthenticated" @click.prevent="onClickLogout">로그아웃</button>
					<button class="btn btn-link my-2 my-sm-0 text-dark" v-else><router-link :to ="'login'">로그인</router-link>/<router-link :to ="'register'">회원가입</router-link></button>
				</li>
				<li class="nav-item">
					<router-link :to="'transfer'"><button class="btn btn-outline-success my-2 my-sm-0">송금하기</button></router-link>
				</li>
				<li class="nav-item" v-if="isRequested">
					<router-link :to="'list-payments'">
						<button class="btn btn-outline-success my-2 my-sm-0">
							결제하기
							<span class="badge badge-success">{{ requests }}</span>
						</button>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
import store from '@/store/'
var requests
export default {
	name:'AppHeader',
	data() {
		return {
			requests : 3
		}
	},
	computed: {
	  isRequested() {
		this.requests = store.getters.getNumsOfPayments
	    return store.getters.getNumsOfPayments
	  },
      isAuthenticated() {
        return store.getters.isAuthenticated
	  }
    },
    methods: {
      onClickLogout() {
        // LOGOUT 변이 실행 후 리다이렉트 
        store.dispatch('LOGOUT').then(() => this.$router.push('/'))
	  }
    }
}
</script>
