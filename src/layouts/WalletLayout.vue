<template>
	<div class="container">
		<app-header></app-header>
		<side-bar></side-bar>    
		<slot/>
	</div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';
import SideBar from '@/components/wallet/SideBar.vue';
export default {
	name: "MyWalletLayout",
	components: { AppHeader, SideBar }
}
</script>
