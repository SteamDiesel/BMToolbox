<template>
	<Section>
		<Header title="Real Estate">
			<button
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
				@click="pushToArray({person: person, type: 'property', array: person.properties})"

			>
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="primary"
						d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"
					/>
					<polygon class="secondary" points="21 6 12 10 12 22 21 18" />
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
			
			<Property
				class="mb-4"
				v-for="(property, index) in person.properties"
				:key="index"
				:property="property"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.properties, type: 'property', index: index, person: person, object: property})"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="primary"
							d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"
						/>
						<polygon class="secondary" points="21 6 12 10 12 22 21 18" />
					</svg>
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
					v-show="!property.shared"
					:class="{ 'bg-blue-400': property.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'property', 
						object: property}
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
					v-show="property.shared"
					:class="{ 'bg-blue-400': property.shared}"
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
			</Property>
		</Section>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import Property from "@/components/application/Property.vue";
import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";


export default {
	name: "Properties",
	components: {
		Property,
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