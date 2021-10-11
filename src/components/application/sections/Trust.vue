<template>
	<div class="w-full mt-8">
		<div class="flex justify-between">
			<Header title="Trust Details"> </Header>
			<slot />
		</div>

		<div class="flex flex-wrap">
			<FormField
				class="w-2/5"
				@copy="copyClipboard('#tr' + trust_index + trust.abn)"
			>
				<template v-slot:label>A.B.N. </template>
				<input
					:id="'#tr' + trust_index + trust.abn"
					v-model="trust.abn"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-2/5"
				@copy="copyClipboard('#tr' + trust_index + trust.acn)"
			>
				<template v-slot:label>A.C.N.</template>
				<input
					:id="'#tr' + trust_index + trust.acn"
					v-model="trust.acn"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<a
				:href="
					'https://abr.business.gov.au/Search/ResultsActive?SearchText=' +
						trust.abn
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
				@copy="copyClipboard('#tr' + trust_index + trust.business_name)"
			>
				<template v-slot:label>Trading Name</template>
				<input
					:id="'#tr' + trust_index + trust.business_name"
					v-model="trust.business_name"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/2"
				@copy="copyClipboard('#tr' + trust_index + trust.trust_name)"
			>
				<template v-slot:label>Trust Name</template>
				<input
					:id="'#tr' + trust_index + trust.trust_name"
					v-model="trust.trust_name"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>

		<div class="flex flex-wrap">
			<FormField :no_copy="true" class="w-1/2">
				<template v-slot:label>Type of Trust</template>
				<select @change="updateField" name="role" v-model="trust.type">
					<option value="Discretionary">Discretionary</option>
					<option value="Fixed/Unit">Fixed/Unit</option>
				</select>
			</FormField>
			<FormField :no_copy="true" class="w-1/2">
				<template v-slot:label>Trustee</template>
				<select
					@change="updateField"
					name="role"
					v-model="trust.trustee"
				>
					<option
						v-for="(person, index) in people"
						:key="'p' + index"
						:value="{
							name: person.first_name + ' ' + person.surname,
						}"
						>{{ person.first_name + " " + person.surname }}</option
					>
					<option
						v-for="(bus, index) in businesses"
						:key="'c' + index"
						:value="{
							name: bus.entity_name,
						}"
						>{{ bus.entity_name }}</option
					>
					<option :value="{ name: 'Other' }">Other</option>
				</select>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-2/5"
				@copy="
					copyClipboard('#tr' + trust_index + trust.registration_date)
				"
			>
				<template v-slot:label>Registration Date</template>
				<input
					:id="'#tr' + trust_index + trust.registration_date"
					v-model="trust.registration_date"
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
						:value="trust.is_gst"
						@toggle="trust.is_gst = !trust.is_gst"
					/>
				</div>
			</FormField>
			<FormField
				v-if="trust.is_gst"
				class="w-2/5"
				@copy="copyClipboard('#tr' + trust_index + trust.gst_date)"
			>
				<template v-slot:label>Date of GST registration</template>
				<input
					:id="'#trgst' + trust_index + trust.gst_date"
					v-model="trust.gst_date"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="mt-8">
			<Header title="Beneficiaries"> </Header>
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
								addBenny({
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
					<div
						class="flex justify-between px-4 py-2 w-full bg-white mb-1"
					>
						<div>
							<input
								type="text"
								placeholder="Other Name"
								v-model="ben_custom"
								name="custom_beneficiary"
								id=""
							/>
						</div>

						<button
							class=""
							@click="
								addBenny({ name: ben_custom }),
									(ben_custom = '')
							"
						>
							add
						</button>
					</div>
				</div>
			</div>
			<div class="w-1/2 pl-2">
				<h3 class="font-semibold">Named Beneficiaries</h3>
				<ListName
					v-for="(benny, index) in trust.beneficiaries"
					:key="'benny' + index"
					:ben="benny"
				>
					<button class="" @click="dropBenny(index)">
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
		name: "Trust",
		components: {
			FormField,
			Header,
			CheckBox,
			ListName,
		},
		props: {
			people: Array,
			trust: Object,
			trust_index: Number,
			businesses: Array,
		},
		data() {
			return {
				ben_custom: "",
			};
		},
		computed: {
			age() {
				return moment().diff(
					this.trust.registration_date,
					"years months",
					false
				);
			},
		},
		methods: {
			showOption(id) {
				document.getElementById(id).style.display = "block";
			},
			addBenny(benny) {
				if (benny.name) {
					this.trust.beneficiaries.push(benny);
					this.updateField();
				} else {
					window.console.log("empty field rejected.");
				}
			},
			dropBenny(index) {
				this.trust.beneficiaries.splice(index, 1);
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
