<template>
	<div class="pb-12 container mx-auto">
		<div class="w-full h-full flex justify-between py-1 items-center">
			<!-- Menu -->
			<NewApplicationButton />Excuse the mess... this page is under construction...
			<!-- <SaveApplicationsButton /> -->
		</div>
		<div class>
			<AppCard
				class="mb-6 shadow-md hover:shadow-xl"
				v-for="(app, index) in applications"
				:key="index"
				:app="app"
			>
				<template v-slot:open>
					<div>
						<button
							@click="openApp(index)"
							class="relative flex items-center bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
						>
							<svg viewBox="0 0 24 24" class="h-10 w-10">
								<g>
									<path class="primary" d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z" />
									<rect width="20" height="12" x="2" y="8" class="secondary" rx="2" />
								</g>
							</svg>
							<span class="absolute ml-1 text-primary font-semibold text-xs">Open</span>
						</button>
					</div>
				</template>
				<template v-slot:actions>
					
					<button
						@click="deleteApplication(index)"
						class="relative flex items-center hover:bg-red-200 p-2 rounded-full mx-2"
					>
						<svg viewBox="0 0 24 24" class="h-6 w-6"><path class="danger-primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="danger-secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>
						<span class=" ml-1 text-red-600 font-semibold text-xs">Delete</span>
					</button>
				</template>
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
// import SaveApplicationsButton from "@/components/buttons/SaveApplicationsButton.vue";

import { mapState, mapMutations, mapActions } from "vuex";
export default {
	name: "home",
	components: {
		AppCard,
		NewApplicationButton
		// SaveApplicationsButton
	},
	computed: {
		...mapState(["applications"])
	},
	methods: {
		openApp(index) {
			this.selectApplication(index);
			this.$router.push("application");
		},
		...mapMutations(["selectApplication"]),
		...mapActions(["deleteApplication"])
	}
};
</script>
