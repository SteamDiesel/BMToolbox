<template>
	<button @click="activate" class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2">
		<svg viewBox="0 0 24 24" class="h-6 w-6">
			<g>
				<path class="primary" d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z" />
				<rect width="20" height="12" x="2" y="8" class="secondary" rx="2" />
				<path
					class="primary"
					d="M13 13h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z"
				/>
			</g>
		</svg>
	</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "NewApplicationButton",
	methods: {
		activate(){
			this.createNewApplication()
			this.$router.push('application')
		},
		...mapActions([
			"createNewApplication"
		])
	}
};
</script>

<style>
</style>