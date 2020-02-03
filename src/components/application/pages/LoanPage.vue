<template>
	<div class="flex w-full justify-between">


		<div class="bg-gray-100 m-8 w-full p-2">
			<h2 class="text-xl">Loan Parameters</h2>

			<AppLoanCalc v-if="application.loan_calculator" :calc="application.loan_calculator" />
		</div>


		<!-- Quote History  -->
		<div class="bg-gray-100 m-8 w-full p-2">
			<div class="flex justify-between">
				<h2 class="text-xl">Quote History</h2>
				<button @click="saveQuote" class="font-semibold text-indigo-800">Save</button>
			</div>

			<QuoteCard v-for="(quote, index) in application.quotes" :key="index" :quote="quote">
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="dropFromArray({array: application.quotes, object: quote, type: 'quote', index: index})"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="primary"
							d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
						/>
						<rect width="2" height="6" x="15" y="13" class="secondary" rx="1" />
					</svg>

					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>
				</button>
			</QuoteCard>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import QuoteCard from "@/components/QuoteCard.vue";
import AppLoanCalc from "@/components/application/AppLoanCalc.vue";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
	name: 'LoanPage',
	components:{
		QuoteCard,
		AppLoanCalc,
	},
	computed: {
		details(){
			
			var redbook_lvr = null
			var glasses_lvr = null
			var vehicle_total = 
			+this.application.loan_calculator.vehicle_price 
			+ +this.application.loan_calculator.aftermarket 
			+ +this.application.loan_calculator.warranty


			var total_deposit = 
			+this.application.loan_calculator.vehicle_price 
			- +this.application.loan_calculator.invoice_balance

			var deposit_percent = Math.round(
				+total_deposit 
				/ +vehicle_total 
				* 100)

			if(this.application.vehicle.redbook_value){
				redbook_lvr = Math.round(+this.application.loan_calculator.full_naf / +this.application.vehicle.redbook_value * 100)
			} else {
				redbook_lvr = null
			}

			if(this.application.vehicle.glasses_value){
				glasses_lvr = Math.round(+this.application.loan_calculator.full_naf / +this.application.vehicle.glasses_value * 100)
			} else {
				glasses_lvr = null
			}
			
			return {
				redbook_lvr: +redbook_lvr,
				glasses_lvr: +glasses_lvr,
				deposit_percent: +deposit_percent,
				total_deposit: +total_deposit,
			}
		},
		
		...mapGetters(['application'])
		
	},
	methods: {
		saveQuote(){
			var loan_calc = {}
			Object.assign(loan_calc, this.application.loan_calculator);
			var veh = {}
			Object.assign(veh, this.application.vehicle);
			var deets = {}
			Object.assign(deets, this.details);
			var new_quote = {
				loan_calculator: loan_calc,
				vehicle: veh,
				details: deets,
				timestamp: moment()
			}
			var quote = {}
			Object.assign(quote, new_quote);
			this.pushToArray({person: this.application.people[0], type: 'quote', quote: quote, array: this.application.quotes})

		},
		...mapMutations([
			"addPersonToApplication",
			"addBusinessToApplication",
			"removePersonFromApplication",
			"addVehicleToApplication",
			"saveApplicationsToLocal"
		]),
		...mapActions(['dropFromArray','pushToArray'])
	}

};
</script>

<style>
</style>