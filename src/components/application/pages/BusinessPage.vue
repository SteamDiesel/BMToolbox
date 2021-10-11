<template>
	<div class="bg-gray-100">
		<div class="w-full xl:flex px-4 justify-between bg-gray-200 no-print">
			<div>
				<button
					@click="addBusinessToApplication"
					class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
				>
					<svg viewBox="0 0 24 24" class="h-4 w-4">
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
				<button
					@click="addTrustToApplication"
					class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="w-4"
					>
						<path
							class="primary"
							d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
						/>
						<polygon class="secondary" points="14 2 20 8 14 8" />
					</svg>
				</button>
			</div>
		</div>

		<div class="xl:flex xl:justify-around ml-10">
			<div
				class="w-full mr-10 mb-10 lg:max-w-2xl"
				v-for="(bus, index) in application.businesses"
				:key="'bus' + index"
			>
				<div>
					<h2 class="text-3xl font-semibold">
						{{ bus.business_name }}
					</h2>
					<select
						name="role"
						:id="'app_role' + index"
						v-model="bus.role"
					>
						<option
							v-for="(role, index) in app_roles"
							:key="index"
							value="role"
							>{{ role }}</option
						>
					</select>
					<hr />
				</div>
				<div>
					<Company
						:key="'bus_index' + index"
						:business_index="index"
						:people="application.people"
						:bus="bus"
					>
						<button
							@click="
								dropFromArray({
									array: application.businesses,
									object: bus,
									type: 'business',
									index: index,
								})
							"
							class="bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-lg no-print"
						>
							delete
							<!-- <svg viewBox="0 0 24 24" class="h-5 w-5">
								<path class="primary" d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
								<path
									class="secondary"
									d="M15 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
								/>
								</svg>-->
						</button>
					</Company>
					<div class="mt-8">
						<BusinessAddress
							:address="bus.street_address"
							:id_prefix="'busstr' + index"
							header="Street Address"
						/>
					</div>
					<div class="mt-8">
						<BusinessAddress
							:address="bus.registered_address"
							:id_prefix="'busreg' + index"
							header="Registered Address"
						/>
					</div>
				</div>
			</div>
			<div
				class="w-full mr-10 mb-10 lg:max-w-2xl"
				v-for="(trust, index) in application.trusts"
				:key="'tst' + index"
			>
				<div>
					<h2 class="text-3xl font-semibold">
						{{ trust.trust_name }}
					</h2>
					<select
						name="role"
						:id="'app_role' + index"
						v-model="trust.role"
					>
						<option
							v-for="(role, index) in app_roles"
							:key="index"
							value="role"
							>{{ role }}</option
						>
					</select>
					<hr />
				</div>
				<div>
					<Trust
						:key="'trust_index' + index"
						:trust_index="index"
						:people="application.people"
						:trust="trust"
						:businesses="application.businesses"
					>
						<button
							@click="
								dropFromArray({
									array: application.trusts,
									object: trust,
									type: 'trust',
									index: index,
								})
							"
							class="bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-lg no-print"
						>
							delete
						</button>
					</Trust>
					<!-- <BusinessAddress
						:address="trust.street_address"
						:id_prefix="'tststr' + index"
						header="Street Address"
					/>
					<BusinessAddress
						:address="trust.registered_address"
						:id_prefix="'tstreg' + index"
						header="Registered Address"
					/> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
	import BusinessAddress from "../BusinessAddress.vue";
	import Company from "../sections/Company.vue";
	import Trust from "../sections/Trust.vue";
	export default {
		name: "AppPage",
		components: { Company, BusinessAddress, Trust },
		data() {
			return {};
		},
		computed: {
			...mapState(["applications", "app_roles"]),
			...mapGetters(["application"]),
		},

		methods: {
			...mapMutations([
				"addBusinessToApplication",
				"addTrustToApplication",
				"removeBusinessFromApplication",
				"removeTrustFromApplication",
			]),
			...mapActions(["dropFromArray"]),
		},
	};
</script>

<style>
	@media print {
		.for-printing {
			display: flex !important;
		}
	}
</style>
