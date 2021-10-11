<template>
	<div class="w-full mt-8">
		<div class="flex justify-between">
			<Header title="Business Details"> </Header>
			<slot />
		</div>

		<div class="flex flex-wrap">
			<FormField class="w-2/5" @copy="copyClipboard('#busabn' + bus.abn)">
				<template v-slot:label>A.B.N. </template>
				<input
					:id="'#busabn' + bus.abn"
					v-model="bus.abn"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-2/5" @copy="copyClipboard('#busacn' + bus.acn)">
				<template v-slot:label>A.C.N.</template>
				<input
					:id="'#busacn' + bus.acn"
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
					<circle cx="10" cy="10" r="7" class="primary" />
					<path
						class="secondary"
						d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
					/>
				</svg>
			</a>

			<FormField
				class="w-1/2"
				@copy="copyClipboard('#busnm' + bus.business_name)"
			>
				<template v-slot:label>Business/Trading Name</template>
				<input
					:id="'#busnm' + bus.business_name"
					v-model="bus.business_name"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/2"
				@copy="copyClipboard('#busent' + bus.entity_name)"
			>
				<template v-slot:label>Legal Entity Name</template>
				<input
					:id="'#busent' + bus.entity_name"
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
				@copy="copyClipboard('#busreg' + bus.registration_date)"
			>
				<template v-slot:label>Registration Date</template>
				<input
					:id="'#busreg' + bus.registration_date"
					v-model="bus.registration_date"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField :no_copy="true" class="w-1/5">
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
				@copy="copyClipboard('#busgst' + bus.gst_date)"
			>
				<template v-slot:label>Date of GST registration</template>
				<input
					:id="'#busgst' + bus.gst_date"
					v-model="bus.gst_date"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="mt-8">
			<Header title="Directors"> </Header>
		</div>

		<div class="flex flex-wrap">
			<div class="w-1/2 pl-2">
				<h3 class="font-semibold">People</h3>
				<div class="p-4 border border-grey-300">
					<div
						class="flex justify-between px-4 py-2 w-full bg-white mb-1"
						v-for="(person, index) in people"
						:key="'b' + index"
					>
						<div>
							{{ person.first_name + " " + person.surname }}
						</div>

						<button
							class=""
							@click="
								addDirector({
									name:
										person.first_name +
										' ' +
										person.surname,
								})
							"
						>
							add
						</button>
					</div>
				</div>
			</div>
			<div class="w-1/2 pl-2">
				<h3 class="font-semibold">Directors</h3>
				<ListName
					v-for="(dir, index) in bus.directors"
					:key="'dir' + index"
					:ben="dir"
				>
					<button class="" @click="dropDirector(index)">
						delete
					</button>
				</ListName>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	import { mapMutations, mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";
	import Header from "@/components/application/sections/SectionHeader.vue";
	import CheckBox from "../../buttons/CheckBox.vue";
	import ListName from "./Business/ListName.vue";

	export default {
		name: "Company",
		components: {
			FormField,
			Header,
			CheckBox,
			ListName,
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
			addDirector(director) {
				if (director.name) {
					this.bus.directors.push(director);
					this.updateField();
				} else {
					window.console.log("empty field rejected.");
				}
			},
			dropDirector(index) {
				this.bus.directors.splice(index, 1);
				this.updateField();
			},
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
