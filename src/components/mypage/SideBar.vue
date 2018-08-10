<template>
	<ul class="list-group">
		<li class="list-group-item "><router-link to="/about">Profile</router-link></li>
		<li class="list-group-item "><router-link to="/market">Membership</router-link></li>
		<li class="list-group-item "><router-link to="/remittance">Login History</router-link></li>
		<li class="list-group-item"/>
	</ul>
</template>
<script>
export default {
	name: 'SideBar'
}
</script>
