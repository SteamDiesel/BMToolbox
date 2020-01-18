<template>
	<div class="p-2">
		<div class="flex w-full">
			
				<slot/>
				<!-- <textarea
					:id="'#'+notes"
					v-model="notes"
					@change="saveApplicationsToLocal"
					
					type="text"
					class="form-input text-left w-full h-24 hover:bg-blue-200"
				/> -->
			
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	name: "Notes",
	props: {
		// notes: String
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
		
	}
};
</script>

<style>
</style>