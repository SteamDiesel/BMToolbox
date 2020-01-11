<template>
	<div class="pb-12 container mx-auto">
		<div class="w-full h-full flex justify-start py-1 items-center">
			<!-- Menu -->
			<NewApplicationButton/>
			Excuse the mess... this page is under construction...
		</div>
		<div class="">
			<AppCard class="mb-6 shadow-md hover:shadow-xl" v-for="(app, index) in applications" 
			:key="index" 
			:app="app">
				<div>
					<button
				
				class="relative flex items-center bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
			>
				<svg viewBox="0 0 24 24" class="h-10 w-10"><g><path class="primary" d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z"/><rect width="20" height="12" x="2" y="8" class="secondary" rx="2"/></g></svg>
				<span class="absolute ml-1 text-primary font-semibold text-xs">Open</span>
			</button>
				</div>
			</AppCard>
		</div>

		<div class="lg:flex xl:justify-around">
			<!-- {{applications}} -->
		</div>
		
	</div>
</template>

<script>
// @ is an alias to /src
import AppCard from "@/components/application/AppCard.vue";
import NewApplicationButton from "@/components/buttons/NewApplicationButton.vue";

import { mapState, mapMutations } from "vuex";
export default {
	name: "home",
	components: {
		AppCard,
		NewApplicationButton
	},
	computed: {
		...mapState(["applications"])
	},
	methods: {
		
		...mapMutations([
			"selectApplication",
		])
	}
};
</script>
