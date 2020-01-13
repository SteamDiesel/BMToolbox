<template>
	<div class="mt-6">
			<h2 class="text-xl">Other Loans</h2>
			<OtherLoan
				class="mb-4"
				v-for="(other_loan, index) in person.other_loans"
				:key="index"
				:other_loan="other_loan"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.other_loans, object: other_loan, type: 'other_loan', index: index, person: person})"
				>
										<svg viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"/><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"/></svg>

					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>

				</button>
				<!-- Link to next person  -->
				<button
					v-show="!other_loan.shared"
					:class="{ 'bg-blue-400': other_loan.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'other_loan', 
						object: other_loan}
						)"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>

				<button
					v-show="other_loan.shared"
					:class="{ 'bg-blue-400': other_loan.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>
			</OtherLoan>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="pushToArray({person: person, type: 'other_loan', array: person.other_loans})"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"/><path class="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"/></svg>
					
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

import OtherLoan from "@/components/application/OtherLoan.vue";

export default {
	name: "OtherLoans",
	components: {
		OtherLoan
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