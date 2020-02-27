<template>
	<button v-if="user.name" @click="toggleMenu" class="h-full flex items-center px-4 hover:bg-blue-800 font-semibold text-gray-100">
		<div>
			{{user.name}}		
		</div>
		<div>
			<img :src="user.photo_url" alt="" class="h-10 w-10 ml-3 rounded-full border-2 border-white">
		</div>
	</button>
</template>


<script>

import { mapMutations, mapState } from 'vuex'

export default {
	name: "UserButton",
	computed: {
		...mapState({
			user: state => state.auth.user
		})
	},
	methods: {
		...mapMutations(["toggleMenu"])
	}
};
</script>
