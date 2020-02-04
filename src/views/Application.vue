<template>
	<div class="flex w-full">
		<div
			class="w-100 body-internal hidden md:block flex flex-col justify-start pt-4 items-center border-r-2 border-gray-300"
		>
			<div class="w-full flex justify-end">
				<DropdownMenu class="w-32">
					<span class="font-semibold text-blue-600 hover:underline">Actions</span>
					<template v-slot:menu>
						<div class="bg-gray-200 border-2 border-gray-500">
							
							
							<a href="/print-application"><div  class="w-full p-6 font-semibold hover:bg-teal-100">Print</div></a>
							<hr />
							<div class="w-full p-6 font-semibold hover:bg-teal-100">Delete</div>
						</div>
					</template>
				</DropdownMenu>
			</div>
			<div class="w-full border-b-2 border-gray-300 p-10">
				<div class="mb-4" v-for="(person, index) in application.people" :key="index">
					<div class="text-xl font-semibold">{{person.first_name}} {{person.surname}}</div>
					<div class="text-xs">{{person.mobile_phone}}</div>
					<div class="text-xs">
						<a :href="'mailto:'+person.email_address">{{person.email_address}}</a>
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
						:id="'#'+application.notes"
						v-model="application.notes"
						@change="saveApplicationsToLocal"
						type="text"
						class="bg-transparent text-left w-full h-64 p-4 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
					/>
				</Notes>
			</div>
		</div>
		<div class="w-full body-internal overflow-auto overflow-none bg-gray-200">
			<div class="px-3">
				<div class="flex">
					<button @click="appPageSwitch('loan')" :class="{'text-blue-600': show_loan}" class="px-6 py-4 font-semibold hover:text-blue-400">Loan</button>
					<button @click="appPageSwitch('vehicle')" :class="{'text-blue-600': show_vehicle}" class="px-6 py-4 font-semibold hover:text-blue-400">Vehicle</button>
					<button @click="appPageSwitch('applicants')" :class="{'text-blue-600': show_applicants}" class="px-6 py-4 font-semibold hover:text-blue-400">Applicants</button>
					<button @click="appPageSwitch('history')" :class="{'text-blue-600': show_history}" class="px-6 py-4 font-semibold hover:text-blue-400">History</button>
				</div>
				<div>
					<hr />
				</div>
			</div>
			
			<transition name="fade" mode="out-in">
			<VehiclePage v-if="show_vehicle" />
			<LoanPage v-if="show_loan" />
			<AppPage v-if="show_applicants" />
			<HistoryPage v-if="show_history" />
			</transition>

		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import AppDetails from "@/components/application/sections/AppDetails.vue";
import AppPage from "@/components/application/pages/AppPage.vue";
import LoanPage from "@/components/application/pages/LoanPage.vue";
import VehiclePage from "@/components/application/pages/VehiclePage.vue";
import HistoryPage from "@/components/application/pages/HistoryPage.vue";
import Notes from "@/components/application/Notes.vue";
import DropdownMenu from "@/components/buttons/DropdownMenu.vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
	name: "home",
	components: {
		AppPage,
		Notes,
		LoanPage,
		VehiclePage,
		AppDetails,
		DropdownMenu,
		HistoryPage
	},
	data() {
		return {
			
		};
	},
	computed: {
		...mapState(["applications", "show_vehicle", "show_loan", "show_applicants", "show_history"]),
		...mapGetters(["application"])
	},
	methods: {
		
		...mapMutations([
			"appPageSwitch",
			"addPersonToApplication",
			"addBusinessToApplication",
			"removePersonFromApplication",
			"saveApplicationsToLocal"
		]),
		...mapActions(["dropFromArray"])
	}
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
