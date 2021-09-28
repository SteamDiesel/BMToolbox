<template>
	<div class="w-full">
		<div class="flex justify-between">
			<SectionHeader :title="header" />

			<slot />
		</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-4/5"
				@copy="copyClipboard('#' + id_prefix + address.address)"
			>
				<template v-slot:label>
					Full Address
				</template>
				<input
					:id="'#' + id_prefix + address.address"
					v-model="address.address"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>
		</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#' + id_prefix + address.years)"
			>
				<template v-slot:label>
					Years
				</template>
				<input
					:id="'#' + id_prefix + address.years"
					v-model="address.years"
					@change="updateField"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#' + id_prefix + address.months)"
			>
				<template v-slot:label>
					Months
				</template>
				<input
					:id="'#' + id_prefix + id_prefix + address.months"
					v-model="address.months"
					@change="updateField"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/4" :no_copy="true">
				<template v-slot:label>
					Status
				</template>
				<select v-model="address.status" class="form-input text-center">
					<!-- inline object literal -->
					<option :value="'Lease'">Lease</option>
					<option :value="'Mortgage'">Mortgage</option>
					<option :value="'Owner'">Owner</option>
				</select>
			</FormField>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";
	import SectionHeader from "./sections/SectionHeader.vue";
	// import DropdownMenu from '@/components/buttons/DropdownMenu.vue'
	export default {
		name: "Address",
		components: {
			FormField,
			SectionHeader,
			// DropdownMenu
		},
		props: {
			address: Object,
			index: Number,
			id_prefix: String,
			header: String,
		},
		methods: {
			...mapActions(["updateField"]),
			copyClipboard(id) {
				let valueToCopy = document.getElementById(id);
				valueToCopy.setAttribute("type", "text");
				valueToCopy.select();
				try {
					document.execCommand("copy");
				} catch (err) {
					alert("Oops, unable to copy");
				}
			},
		},
	};
</script>

<style></style>
