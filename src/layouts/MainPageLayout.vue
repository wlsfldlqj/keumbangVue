<template>
  <div>
		<app-header/>
		<slot/>
	</div>    
</template>
<script>
import store from '@/store/'
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: { AppHeader }
}
</script>
