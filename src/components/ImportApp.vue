<template>
	<div class="h-full flex flex-col justify-between">
		<div>
			<h2 class=" italic ">Paste the JSON here:</h2>
			<textarea
				@change="check"
				class="w-full h-32"
				v-model="app_import_field"
				placeholder="Remember to include the curly braces at both ends '{}'"
			></textarea>
		</div>

		<div>
			<div
				class="flex justify-around my-4"
				v-if="import_staging.loan_calculator"
			>
				NAF: {{ import_staging.loan_calculator.full_naf | toCurrency }}
			</div>

			<div class="flex justify-around my-4" v-if="import_staging.vehicle">
				Vehicle:
				{{ import_staging.vehicle.year }}
				{{ import_staging.vehicle.make }}
				{{ import_staging.vehicle.model }}
				{{ import_staging.vehicle.series }}
				{{ import_staging.vehicle.badge }}
			</div>

			<div class="flex justify-around my-4">
				<div
					v-for="(person, index) in import_staging.people"
					:key="index"
				>
					<p>{{ person.first_name }} {{ person.surname }}</p>
					<p>{{ person.mobile_phone }}</p>
					<p>{{ person.email_address }}</p>
				</div>
			</div>
			<div v-if="show_button" class="flex justify-center my-4">
				<button @click="triggerImport" class="btn-primary">
					Import
				</button>
			</div>
		</div>
		<div class="flex justify-end items-end">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { mapMutations, mapActions } from "vuex";

	export default {
		name: "AppImporter",
		components: {},
		data() {
			return {
				app_import_field: "",
				import_staging: "",
				show_button: false,
			};
		},
		computed: {},
		methods: {
			check() {
				var drp = JSON.parse(this.app_import_field);
				this.import_staging = drp;
				if (this.import_staging) {
					this.show_button = true;
				}
			},
			triggerImport() {
				this.importApplication(this.app_import_field);
				this.app_import_field = "";
				this.import_staging = "";
				this.show_button = false;
			},
			...mapMutations(["importApplication"]),
			...mapActions([]),
		},
	};
</script>
