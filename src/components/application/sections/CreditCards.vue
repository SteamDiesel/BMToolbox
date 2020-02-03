<template>
	<Section >
		<Header title="Credit Cards">
			<button
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
				@click="pushToArray({person: person, type: 'credit_card', array: person.credit_cards})"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="primary"
						d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"
					/>
					<rect width="20" height="4" x="2" y="7" class="secondary" />
				</svg>

				<!-- plus icon -->
				<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 right-0">
					<path
						class="secondary"
						fill-rule="evenodd"
						d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
					/>
				</svg>
			</button>
		</Header>
		
		<CreditCard
			class="mb-4"
			v-for="(credit_card, index) in person.credit_cards"
			:key="index"
			:credit_card="credit_card"
		>
			<button
				class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.credit_cards, type: 'credit_card', index: index, person: person, object: credit_card})"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="primary"
						d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"
					/>
					<rect width="20" height="4" x="2" y="7" class="secondary" />
				</svg>
				<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
					<path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z" />
				</svg>
			</button>
			<!-- Link to next person  -->
			<button
				v-show="!credit_card.shared"
				:class="{ 'bg-blue-400': credit_card.shared}"
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'credit_card', 
						object: credit_card}
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
				v-show="credit_card.shared"
				:class="{ 'bg-blue-400': credit_card.shared}"
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
		</CreditCard>
		
	</Section>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import CreditCard from "@/components/application/CreditCard.vue";
import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";


export default {
	name: "Vehicles",
	components: {
		CreditCard,
		Header,
		Section
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
		...mapActions(["pushToArray", "dropFromArray", "linkObjectToNextPerson"])
	}
};
</script>

<style>
</style>