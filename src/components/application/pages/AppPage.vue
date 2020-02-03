<template>
	<div>
		<div class="w-full flex justify-end py-1 px-4 no-print">
			<!-- Menu -->
			<button
				@click="addPersonToApplication"
				class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6">
					<path class="primary" d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
					<path
						class="secondary"
						d="M17 9V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2zm-1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
					/>
				</svg>
			</button>
			<button
				@click="addBusinessToApplication"
				class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6">
					<path
						class="primary"
						d="M21 21H3a1 1 0 0 1-1-1.06l1-16A1 1 0 0 1 4 3h2a1 1 0 0 1 1 .94l.39 6.26 2.9-2.9A1 1 0 0 1 12 8v2.59l3.3-3.3A1 1 0 0 1 17 8v2.59l3.3-3.3A1 1 0 0 1 22 8v12a1 1 0 0 1-1 1z"
					/>
					<path
						class="secondary"
						d="M7 13h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2zM7 17h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2z"
					/>
				</svg>
			</button>
		</div>

		<div class="lg:flex lg:justify-around break-after m-4">
			<Person
				class="m-1 lg:w-1/2 mb-12"
				v-for="(person, index) in application.people"
				:key="index"
				:person_index="index"
				:people="application.people"
				:person="person"
			>
				<button
					@click="dropFromArray({array: application.people, object: person, type: 'person', index: index, person: person})"
					class="bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path class="primary" d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
						<path
							class="secondary"
							d="M15 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
						/>
					</svg>
				</button>
			</Person>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import Person from "@/components/application/Person.vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
	name: "AppPage",
	components: {
		Person,

	},
	data(){
		return{

		}
	},
	computed: {
		...mapState(["applications"]),
		...mapGetters(["application"])
	},
	methods: {
		...mapMutations([
			"addPersonToApplication",
			"addBusinessToApplication",
			"removePersonFromApplication"
		]),
		...mapActions(["dropFromArray"])
	}
};
</script>

<style>
</style>