<template>
	<Section>
		<Header title="Address History">
			<button
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
				@click="pushToArray({person: person, type: 'address', array: person.addresses})"
			>
				<!-- object icon -->
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="primary"
						d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
					/>
					<path
						class="secondary"
						d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
					/>
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
		
		<Address
			class="mb-4"
			v-for="(address, index) in person.addresses"
			:key="index"
			:index="index"
			:address="address"
		>
			<button
				class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="dropFromArray({array: person.addresses, type: 'address', index: index, person: person, object: address})"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5">
					<path
						class="primary"
						d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
					/>
					<path
						class="secondary"
						d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
					/>
				</svg>
				<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
					<path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z" />
				</svg>
			</button>
			<!-- link to next person  -->
			<button
				v-show="!address.shared"
				:class="{ 'bg-blue-400': address.shared}"
				class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'address', 
						object: address}
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
				v-show="address.shared"
				:class="{ 'bg-blue-400': address.shared}"
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
		</Address>
	</Section>
</template>

<script>
import { mapActions } from "vuex";

import Address from "@/components/application/Address.vue";
import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";

export default {
	name: "Addresses",
	components: {
		Address,
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