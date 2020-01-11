<template>
	<button @click="activate" class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2">
		<svg viewBox="0 0 24 24" class="h-6 w-6">
			<path
				class="primary"
				d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm8.12 7.47A5 5 0 1 0 17 14V9a1 1 0 0 0-1.7-.7l-1.18 1.17z"
			/>
			<path
				class="secondary"
				d="M12 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6-11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 6h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z"
			/>
		</svg>
		<span v-if="unsaved_changes">UNSAVED</span>
	</button>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	name: "SaveApplicationsButton",
	computed:{
		...mapState(['unsaved_changes'])
	},
	methods: {
		activate() {
			this.saveApplicationsToLocal();
		},
		...mapMutations(["saveApplicationsToLocal"])
	}
};
</script>

<style>
</style>