<template>
	<div class="w-full">
		<h2 class="font-semibold ">Deal Details</h2>

		<div class="mt-2">
			<div class="font-semibold">
				{{application.vehicle.year}}
				{{application.vehicle.make}}
				{{application.vehicle.model}}
				{{application.vehicle.badge}}
				{{application.vehicle.series}}
				{{application.vehicle.model_year}}
				{{application.vehicle.transmission}}
			</div>
			<div>
				<span v-if="application.vehicle.odometer">Odometer: {{application.vehicle.odometer}} <br></span>
				<span v-if="application.vehicle.stock_number">Stock #: {{application.vehicle.stock_number}} <br></span>
			</div>
		</div>

		<div class="mt-2">
			
			<div>
				<span v-if="application.loan_calculator.full_naf">NAF: {{application.loan_calculator.full_naf | toCurrency}} <br></span>
				<span v-if="application.loan_calculator.term">Structure: {{application.loan_calculator.term}} month / {{application.loan_calculator.rv | toCurrency }}RV  <br></span>
				<span v-if="application.loan_calculator.weekly">{{application.loan_calculator.weekly | toCurrency}}/w {{application.loan_calculator.monthly | toCurrency}}/m <br></span>
			</div>
			<div>
				<span v-if="details.total_deposit >= 0">Total Deposit: {{details.total_deposit | toCurrency}} [{{details.deposit_percent}}%]</span>
				<span
					v-if="details.total_deposit <= 0"
					class="font-semibold text-red-600"
				>Negative Equity: ${{details.total_deposit}}</span>
			</div>
			<div>
				<span
					v-if="application.vehicle.glasses_value"
				>Glasses LVR: {{details.glasses_lvr}}% (${{application.vehicle.glasses_value}})</span> <br>
				<span
					v-if="application.vehicle.redbook_value"
				>Redbook LVR: {{details.redbook_lvr}}% (${{application.vehicle.redbook_value}})</span>
			</div>
		</div>
	</div>
</template>

<script>
// import moment from 'moment'

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
	name: "AppDetails",

	computed: {
		details() {
			var redbook_lvr = null;
			var glasses_lvr = null;
			var vehicle_total =
				+this.application.loan_calculator.vehicle_price +
				+this.application.loan_calculator.aftermarket +
				+this.application.loan_calculator.warranty;

			var total_deposit =
				+this.application.loan_calculator.vehicle_price -
				+this.application.loan_calculator.invoice_balance;

			var deposit_percent = Math.round((+total_deposit / +vehicle_total) * 100);

			if (this.application.vehicle.redbook_value) {
				redbook_lvr = Math.round(
					(+this.application.loan_calculator.full_naf /
						+this.application.vehicle.redbook_value) *
						100
				);
			} else {
				redbook_lvr = null;
			}

			if (this.application.vehicle.glasses_value) {
				glasses_lvr = Math.round(
					(+this.application.loan_calculator.full_naf /
						+this.application.vehicle.glasses_value) *
						100
				);
			} else {
				glasses_lvr = null;
			}

			return {
				redbook_lvr: +redbook_lvr,
				glasses_lvr: +glasses_lvr,
				deposit_percent: +deposit_percent,
				total_deposit: +total_deposit
			};
		},

		...mapGetters(["application"])
	},
	methods: {
		// saveQuote(){
		// 	var loan_calc = {}
		// 	Object.assign(loan_calc, this.application.loan_calculator);
		// 	var veh = {}
		// 	Object.assign(veh, this.application.vehicle);
		// 	var deets = {}
		// 	Object.assign(deets, this.details);
		// 	var new_quote = {
		// 		loan_calculator: loan_calc,
		// 		vehicle: veh,
		// 		details: deets,
		// 		timestamp: moment()
		// 	}
		// 	var quote = {}
		// 	Object.assign(quote, new_quote);
		// 	this.pushToArray({person: this.application.people[0], type: 'quote', quote: quote, array: this.application.quotes})

		// },
		...mapMutations([
			"addPersonToApplication",
			"addBusinessToApplication",
			"removePersonFromApplication",
			"addVehicleToApplication",
		]),
		...mapActions(["dropFromArray", "pushToArray"])
	}
};
</script>

<style>
</style>