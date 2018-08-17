<template>
	<div>
		<app-header/>
		<slot/>
	</div>    
</template>

<script src="www.amcharts.com/lib/3/amcharts.js"></script>
<script src="www.amcharts.com/lib/3/serial.js"></script>
<script src="www.amcharts.com/lib/3/themes/light.js"></script>
<script src="www.amcharts.com/lib/3/plugins/dataloader/dataloader.min.js"></script>
<script src="www.amcharts.com/lib/3/maps/js/worldLow.js"></script>
<script>
import store from '@/store/'
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: { AppHeader }
}
</script>
