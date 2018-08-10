<template>
	<div class="">
		<app-header></app-header>
		<side-bar></side-bar>    
		<slot/>
	</div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';
import SideBar from '@/components/mypage/SideBar.vue';
export default {
	name: 'MyPageLayoutWithSubmenu',
	components: { AppHeader, SideBar }
}
</script>
