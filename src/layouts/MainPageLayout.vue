<template>
    <div>
		<app-header v-if="isAuthenticated" />
		<slot/>
	</div>    
</template>
<script>
import store from '@/store/'
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: { AppHeader },
	computed: {
      isAuthenticated() {
        return store.getters.isAuthenticated
      }
    }
}
</script>
