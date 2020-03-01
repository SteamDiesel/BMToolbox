<template>
	<Section>
		<Header title="Defaults">
			<button
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
				@click="pushToArray({person: person, type: 'credit_default', array: person.credit_defaults})"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="secondary"
						d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
					/>
					<path
						class="primary"
						d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
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
		</Header>

		<CreditDefault
			class="mb-4"
			v-for="(credit_default, index) in person.credit_defaults"
			:key="'credit_default'+index"
			:credit_default="credit_default"
		>
			<button
				class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.credit_defaults, type: 'credit_default', index: index, person: person, object: credit_default})"
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6">
					<path
						class="secondary"
						d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
					/>
					<path
						class="primary"
						d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
					/>
				</svg>
				<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
					<path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z" />
				</svg>
			</button>
			<!-- Link to next person  -->
			<button
				v-show="!credit_default.shared"
				:class="{ 'bg-blue-400': credit_default.shared }"
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'credit_default', 
						object: credit_default}
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
				v-show="credit_default.shared"
				:class="{ 'bg-blue-400': credit_default.shared}"
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
		</CreditDefault>
	</Section>
</template>

<script>
import { mapActions } from "vuex";

import CreditDefault from "@/components/application/CreditDefault.vue";
import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";

export default {
	name: "Vehicles",
	components: {
		CreditDefault,
		Header,
		Section
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	methods: {

		...mapActions(["pushToArray", "dropFromArray", "linkObjectToNextPerson"])
	}
};
</script>

<style>
</style>