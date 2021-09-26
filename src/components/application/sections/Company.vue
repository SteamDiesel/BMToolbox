<template>
	<div class="w-full mt-8">
		<div class="flex justify-between">
			<Header title="Business Details"> </Header>
			<slot />
		</div>

		<div class="flex flex-wrap">
			<FormField class="w-2/5" @copy="copyClipboard('#' + bus.abn)">
				<template v-slot:label>A.B.N. </template>
				<input
					:id="'#' + bus.abn"
					v-model="bus.abn"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-2/5" @copy="copyClipboard('#' + bus.acn)">
				<template v-slot:label>A.C.N.</template>
				<input
					:id="'#' + bus.acn"
					v-model="bus.acn"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<a
				:href="
					'https://abr.business.gov.au/Search/ResultsActive?SearchText=' +
						bus.abn
				"
				target="blank"
				class="w-1/5 flex h-full mt-6 items-center justify-center"
			>
				Search ABR
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-6"
				>
					<path
						class="primary"
						d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"
					/>
					<path
						class="secondary"
						d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"
					/>
				</svg>
			</a>

			<FormField
				class="w-1/2"
				@copy="copyClipboard('#' + bus.business_name)"
			>
				<template v-slot:label>Business/Trading Name</template>
				<input
					:id="'#' + bus.business_name"
					v-model="bus.business_name"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/2"
				@copy="copyClipboard('#' + bus.entity_name)"
			>
				<template v-slot:label>Legal Entity Name</template>
				<input
					:id="'#' + bus.entity_name"
					v-model="bus.entity_name"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-2/5"
				@copy="copyClipboard('#' + bus.registration_date)"
			>
				<template v-slot:label>Registration Date</template>
				<input
					:id="'#' + bus.registration_date"
					v-model="bus.registration_date"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/5">
				<template v-slot:label>
					GST Registered
				</template>
				<div class="flex justify-center">
					<CheckBox
						:value="bus.is_gst"
						@toggle="bus.is_gst = !bus.is_gst"
					/>
				</div>
			</FormField>
			<FormField
				v-if="bus.is_gst"
				class="w-2/5"
				@copy="copyClipboard('#' + bus.gst_date)"
			>
				<template v-slot:label>Date of GST registration</template>
				<input
					:id="'#' + bus.gst_date"
					v-model="bus.gst_date"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	import { mapMutations, mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";

	import Header from "@/components/application/sections/SectionHeader.vue";
	import CheckBox from "../../buttons/CheckBox.vue";

	export default {
		name: "Person",
		components: {
			FormField,
			Header,
			CheckBox,
		},
		props: {
			people: Array,
			bus: Object,
			business_index: Number,
		},
		computed: {
			age() {
				return moment().diff(
					this.bus.registration_date,
					"years months",
					false
				);
			},
		},
		methods: {
			...mapMutations([]),
			...mapActions([
				"pushToArray",
				"dropFromArray",
				"linkObjectToNextPerson",
				"updateField",
			]),
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
