<template>
	<div class="container">
		<app-header></app-header>
		<side-bar></side-bar>    
		<slot/>
	</div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';
import SideBar from '@/components/mypage/SideBar.vue';
export default {
	name: 'MyPageLayout',
	components: { AppHeader, SideBar }
}
</script>
