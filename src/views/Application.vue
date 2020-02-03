<template>
	<div class="flex w-full">
		<div
			class="w-100 body-internal flex flex-col justify-start pt-4 items-center border-r-2 border-gray-300"
		>
			<div class="w-full flex justify-end">
				<DropdownMenu class="w-32">
					<span class="font-semibold text-blue-600 hover:underline">Actions</span>
					<template v-slot:menu>
						<div class="bg-gray-200 border-2 border-gray-500">
							<!-- <div class="w-full p-6">menu item</div> -->
							<hr />
							<div class="w-full p-6">Delete</div>
						</div>
					</template>
				</DropdownMenu>
			</div>
			<div class="w-full border-b-2 border-gray-300 p-12">
				<div class="mb-4" v-for="(person, index) in application.people" :key="index">
					<div class="text-xl font-semibold">{{person.first_name}} {{person.surname}}</div>
					<div class="text-xs">{{person.mobile_phone}}</div>
					<div class="text-xs">
						<a :href="'mailto:'+person.email_address">{{person.email_address}}</a>
					</div>
				</div>
			</div>
			<div class="w-full p-12">
				<AppDetails />
			</div>
		</div>
		<div class="w-full body-internal overflow-auto overflow-none bg-gray-200">
			<div class="px-3">
				<div class="flex">
					<button @click="pageSwitch('loan')" :class="{'text-blue-600': show_loan}" class="px-6 py-4 font-semibold hover:text-blue-400">Loan</button>
					<button @click="pageSwitch('vehicle')" :class="{'text-blue-600': show_vehicle}" class="px-6 py-4 font-semibold hover:text-blue-400">Vehicle</button>
					<button @click="pageSwitch('applicants')" :class="{'text-blue-600': show_applicants}" class="px-6 py-4 font-semibold hover:text-blue-400">Applicants</button>
				</div>
				<div>
					<hr />
				</div>
			</div>
			<div>
				
			</div>
			<transition name="fade" mode="out-in">
			<VehiclePage v-if="show_vehicle" />
			<LoanPage v-if="show_loan" />
			<AppPage v-if="show_applicants" />
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
import DropdownMenu from "@/components/buttons/DropdownMenu.vue";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
	name: "home",
	components: {
		AppPage,
		LoanPage,
		VehiclePage,
		AppDetails,
		DropdownMenu
	},
	data() {
		return {
			show_vehicle: false,
			show_loan: false,
			show_applicants: false,
		};
	},
	computed: {
		...mapState(["applications"]),
		...mapGetters(["application"])
	},
	methods: {
		pageSwitch(io){
			switch(io){
				case 'vehicle':
					this.show_vehicle = true;
					this.show_loan = false;
					this.show_applicants = false;
					break;
				
				case 'loan':
					this.show_vehicle = false;
					this.show_loan = true;
					this.show_applicants = false;
					break;
				
				case 'applicants':
					this.show_vehicle = false;
					this.show_loan = false;
					this.show_applicants = true;
					break;
				
			}
		},
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
.body-internal {
	height: calc(100vh - 3rem);
}
@media print {
	.overflow-none {
		overflow: none;
	}
}
</style>
