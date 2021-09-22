<template>
	<button
		@click="toggleAuthMenu"
		class="h-full flex items-center px-4 hover:bg-blue-800 font-semibold text-gray-100"
	>
		<div>
			<span v-if="user_preferences.user_name">{{
				user_preferences.user_name
			}}</span>
			|
			<span v-if="user_preferences.user_business_name">{{
				user_preferences.user_business_name
			}}</span>
		</div>
		<div v-if="user_preferences.user_brand_image_url">
			<img
				:src="user_preferences.user_brand_image_url"
				alt=""
				class="h-10 w-10 ml-3 rounded-full border-2 border-white"
			/>
		</div>
	</button>
</template>

<script>
	import { mapMutations, mapState } from "vuex";

	export default {
		name: "UserButton",
		computed: {
			...mapState({
				// user: (state) => state.auth.user,
				user_preferences: (state) => state.user_preferences,
			}),
		},
		methods: {
			...mapMutations(["toggleAuthMenu"]),
		},
	};
</script>
