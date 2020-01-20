<template>
	<!-- Employer Section  -->
		<div class="mt-6">
			<h2 class="text-xl">Employment History</h2>
			<Employer
				class="mb-4"
				v-for="(employer, index) in person.employers"
				:key="index"
				:employer="employer"
				:employers="person.employers"
				:this_index="index"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					
					@click="dropFromArray({array: person.employers, object: employer, type: 'employer', index: index, person: person})"

				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="secondary"
							d="M5 9h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm12 2v3h3v-3h-3zm0 5v3h3v-3h-3zm-5 0v3h3v-3h-3zm0-5v3h3v-3h-3z"
						/>
						<path
							class="primary"
							d="M9 4h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9v-6H5v6H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 1 1 4 0z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>
				</button>
			</Employer>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="pushToArray({person: person, type: 'employer', array: person.employers})"

				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="secondary"
							d="M5 9h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm12 2v3h3v-3h-3zm0 5v3h3v-3h-3zm-5 0v3h3v-3h-3zm0-5v3h3v-3h-3z"
						/>
						<path
							class="primary"
							d="M9 4h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9v-6H5v6H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 1 1 4 0z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 right-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
						/>
					</svg>
				</button>
			</div>
		</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import Employer from "@/components/application/Employer.vue";

export default {
	name: "Employers",
	components: {
		Employer
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
		...mapActions([
			"pushToArray",
			"dropFromArray",
			"linkObjectToNextPerson"
		])
	}
};
</script>

<style>
</style>