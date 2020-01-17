<template>
	<div
		class="w-full p-4 flex justify-between items-center"
	>
		<div class>
			<div class="font-semibold">
				{{quote.vehicle.year}} 
				{{quote.vehicle.make}} 
				{{quote.vehicle.model}} 
				{{quote.vehicle.badge}} 
				{{quote.vehicle.series}} 
				{{quote.vehicle.model_year}} 
				{{quote.vehicle.colour}} 
				{{quote.vehicle.odometer}}
			</div>
			<div>
				<span v-if="quote.vehicle.glasses_value">Glasses LVR: {{quote.details.glasses_lvr}}% (${{quote.vehicle.glasses_value}}) </span>
				<span v-if="quote.vehicle.redbook_value">Redbook LVR: {{quote.details.redbook_lvr}}% (${{quote.vehicle.redbook_value}})</span>
				
			</div>
			<div>
				Vehicle: {{quote.loan_calculator.vehicle_price}},
				<span
					v-if="quote.loan_calculator.warranty"
				>Warranty: {{quote.loan_calculator.warranty}},</span>
				<span
					v-if="quote.loan_calculator.aftermarket"
				>Aftermarket: {{quote.loan_calculator.aftermarket}},</span>
				<span v-if="quote.loan_calculator.trade_value">Trade: {{quote.loan_calculator.trade_value}},</span>
				<span v-if="quote.loan_calculator.trade_payout">Payout: {{quote.loan_calculator.trade_payout}},</span>
				<span v-if="quote.loan_calculator.sign_deposit">Deposit: {{quote.loan_calculator.sign_deposit}},</span>
				<span v-if="quote.loan_calculator.further_deposit">Deposit: {{quote.loan_calculator.further_deposit}}</span>
			</div>
			<div>
				Origination: {{quote.loan_calculator.origination_fee}},
				Lender Fee: {{quote.loan_calculator.lender_fee}},
				<span
					v-if="quote.loan_calculator.credit_insurance"
				>credit_insurance: {{quote.loan_calculator.credit_insurance}},</span>
				<span v-if="quote.loan_calculator.gap_insurance">Gap Insurance: {{quote.loan_calculator.gap_insurance}},</span>

				<span v-if="quote.loan_calculator.monthly_fee">Monthly Fee: {{quote.loan_calculator.monthly_fee}},</span>

				<span v-if="quote.loan_calculator.brokerage">Brokerage: {{quote.loan_calculator.brokerage}}</span>
			</div>
			<div>
				<span v-if="quote.loan_calculator.term">Term: {{quote.loan_calculator.term}},</span>
				<span v-if="quote.loan_calculator.rv">Residual: {{quote.loan_calculator.rv}} / {{quote.loan_calculator.rv_percent}}%</span>
			</div>
			<div>
				Weekly: {{quote.loan_calculator.weekly}},
				Fortnightly: {{quote.loan_calculator.fortnightly}},
				Monthly: {{quote.loan_calculator.monthly}},
			</div>
		</div>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoanCard",
	props: {
		quote: Object
	}
};
</script>

<style>
</style>