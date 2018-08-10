<template>
	<div>
		<app-header></app-header>
		<div class="container-fluid">
			<slot/>	
		</div>
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
