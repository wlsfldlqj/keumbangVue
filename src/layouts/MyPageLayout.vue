<template>
	<div>
		<app-header></app-header>
		<slot/>
	</div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	name: 'MyPageLayout',
	components: { AppHeader }
}
</script>
