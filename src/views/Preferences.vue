<template>
	<div  class="py-12 container mx-auto">
		<UserProfile/>
	</div>
</template>

<script>

import UserProfile from '@/components/UserProfile.vue'

export default {
	name: 'home',
	components: {
		UserProfile
	}
}
</script>