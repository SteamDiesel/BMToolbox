<template>
	<Section>
		<Header title="Dependents">
			<button
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
				
				@click="pushToArray({person: person, type: 'kid', array: person.kids})"
			>

			<!-- object icon -->
				<svg viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M12 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zM7 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/><path class="secondary" d="M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-3 1h6a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3z"/></svg>


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
		
		<Kid
			class="mb-4"
			v-for="(kid, index) in person.kids"
			:key="index"
			:index="index"
			:kid="kid"
		>
			<button
				class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.kids, type: 'kid', index: index, person: person, object: kid})"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M12 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zM7 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/><path class="secondary" d="M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-3 1h6a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3z"/></svg>
				<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
					<path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z" />
				</svg>
			</button>
			<!-- link to next person  -->
			<button
					v-show="!kid.shared"
					:class="{ 'bg-blue-400': kid.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'kid', 
						object: kid}
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
					v-show="kid.shared"
					:class="{ 'bg-blue-400': kid.shared}"
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
		</Kid>
		
	</Section>
</template>

<script>
import { mapActions } from "vuex";

import Kid from "@/components/application/Kid.vue";
import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";


export default {
	name: "Kids",
	components: {
		Kid,
		Header,
		Section
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	methods: {

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