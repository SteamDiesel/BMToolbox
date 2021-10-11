<template>
	<div class="flex w-full">
		<div
			class="w-100 body-internal hidden md:block flex flex-col justify-start pt-4 items-center border-r-2 border-gray-300"
		>
			<div class="w-full flex justify-between">
				<div class="ml-8">
					<select
						@change="updateField"
						v-model="application.status"
						class=" rounded w-full font-semibold text-blue-600 hover:underline"
						:style="{
							'background-color': application.status.color,
						}"
					>
						<option value="" selected>Select Status</option>
						<option
							v-for="(status,
							index) in user_preferences.app_statuses"
							:key="index"
							:value="status"
							class="p-2"
							:style="{ 'background-color': status.color }"
							>{{ status.value }}</option
						>
					</select>
				</div>

				<DropdownMenu class="w-32">
					<span class="font-semibold text-blue-600 hover:underline"
						>Actions</span
					>
					<template v-slot:menu>
						<div class="bg-gray-200 border-2 border-gray-500">
							<button
								@click="actionSelect('print')"
								class="w-full p-6 font-semibold hover:bg-teal-100"
							>
								Print
							</button>
							<button
								@click="exportApp(application)"
								class="w-full p-6 font-semibold hover:bg-teal-100"
							>
								Export
							</button>

							<button
								v-if="!application.is_archived"
								@click="actionSelect('archive')"
								class="w-full p-6 font-semibold hover:bg-teal-100 mb-2"
							>
								Archive
							</button>
							<button
								v-if="application.is_archived"
								@click="actionSelect('un-archive')"
								class="w-full p-6 font-semibold hover:bg-teal-100 mb-2"
							>
								Un-Archive
							</button>
							<hr />
							<button
								@click="actionSelect('delete')"
								class="w-full p-6 font-semibold hover:bg-teal-100"
							>
								Delete
							</button>
						</div>
					</template>
				</DropdownMenu>
			</div>
			<div class="w-full border-b-2 border-gray-300 p-10">
				<div
					class="mb-4"
					v-for="(person, index) in application.people"
					:key="index"
				>
					<div class="text-xl font-semibold">
						{{ person.first_name }} {{ person.surname }}
					</div>
					<div class="text-xs">{{ person.mobile_phone }}</div>
					<div class="text-xs">
						<a :href="'mailto:' + person.email_address">{{
							person.email_address
						}}</a>
					</div>
				</div>
			</div>
			<div class="w-full border-b-2 border-gray-300 px-10 pb-10 pt-2">
				<AppDetails />
			</div>

			<div class="w-full px-10 pb-10 pt-2">
				<h2 class="font-semibold">Notes</h2>
				<Notes>
					<textarea
						:id="'#' + application.notes"
						v-model="application.notes"
						@change="updateField"
						type="text"
						class="bg-transparent text-left w-full h-64 p-4 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
					/>
				</Notes>
			</div>
		</div>
		<div
			class="w-full body-internal overflow-auto overflow-none bg-gray-200"
		>
			<div class="px-3">
				<div class="flex justify-between">
					<div class="flex flex-wrap">
						<button
							@click="appPageSwitch('loan')"
							:class="{ 'text-blue-600': show_loan }"
							class="px-6 py-4 font-semibold hover:text-blue-400"
						>
							Loan
						</button>
						<button
							@click="appPageSwitch('vehicle')"
							:class="{ 'text-blue-600': show_vehicle }"
							class="px-6 py-4 font-semibold hover:text-blue-400"
						>
							Vehicle
						</button>
						<button
							@click="appPageSwitch('applicants')"
							:class="{ 'text-blue-600': show_applicants }"
							class="px-6 py-4 font-semibold hover:text-blue-400"
						>
							People
						</button>
						<button
							@click="appPageSwitch('businesses')"
							:class="{ 'text-blue-600': show_businesses }"
							class="px-6 py-4 font-semibold hover:text-blue-400"
						>
							Business
						</button>
						<button
							@click="appPageSwitch('history')"
							:class="{ 'text-blue-600': show_history }"
							class="px-6 py-4 font-semibold hover:text-blue-400"
						>
							History
						</button>
					</div>

					<!-- <div>
						<button
							@click=""
							class="px-6 py-4 font-semibold text-green-500 hover:text-blue-400"
						>
							export
						</button>
					</div> -->
				</div>
				<div class="mb-1">
					<hr />
				</div>
			</div>

			<transition name="fade" mode="out-in">
				<VehiclePage v-if="show_vehicle" />
				<LoanPage v-if="show_loan" />
				<AppPage v-if="false" />
				<AppPages v-if="show_applicants" />
				<HistoryPage v-if="show_history" />
				<BusinessPage v-if="show_businesses" />
			</transition>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src

	import AppDetails from "@/components/application/sections/AppDetails.vue";
	import AppPage from "@/components/application/pages/AppPage.vue";
	import AppPages from "@/components/application/pages/AppPages.vue";
	import LoanPage from "@/components/application/pages/LoanPage.vue";
	import VehiclePage from "@/components/application/pages/VehiclePage.vue";
	import HistoryPage from "@/components/application/pages/HistoryPage.vue";
	import Notes from "@/components/application/Notes.vue";
	import DropdownMenu from "@/components/buttons/DropdownMenu.vue";

	import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
	import BusinessPage from "../components/application/pages/BusinessPage.vue";
	export default {
		name: "home",
		components: {
			AppPage,
			AppPages,
			Notes,
			LoanPage,
			VehiclePage,
			AppDetails,
			DropdownMenu,
			HistoryPage,
			BusinessPage,
		},
		computed: {
			...mapState([
				"applications",
				"show_vehicle",
				"show_loan",
				"show_applicants",
				"show_businesses",
				"show_history",
				"user_preferences",
				"system",
			]),

			...mapGetters(["application"]),
		},
		methods: {
			actionSelect(io) {
				switch (io) {
					case "print":
						this.$router.push("print-application");
						break;
					case "archive":
						this.$router.push("applications");
						this.archiveApplication({
							app: this.application,
							io: 1,
						});
						break;
					case "un-archive":
						this.$router.push("applications");
						this.archiveApplication({
							app: this.application,
							io: 0,
						});

						break;
					case "delete":
						this.$router.push("applications");
						this.deleteApplication(this.application);
						break;
				}
			},
			...mapMutations([
				"appPageSwitch",
				"addPersonToApplication",
				"addBusinessToApplication",
				"removePersonFromApplication",
			]),
			...mapActions([
				"dropFromArray",
				"deleteApplication",
				"updateField",
				"exportApp",
				"archiveApplication",
			]),
		},
	};
</script>
<style>
	.body-internal {
		height: calc(100vh - 3rem);
	}
	@media print {
		.overflow-none {
			overflow: none;
		}
	}
</style>
