<template>
	<div
		class="w-full p-4 flex justify-between items-center"
	>
		<div class>
			<div v-if="card.name" class="font-semibold">{{card.name}}</div>
			<div>
				Vehicle: {{card.vehicle_price}},
				<span
					v-if="card.custom_one"
				>{{card.custom_one_label}}: {{card.custom_one}},</span>
				<span v-if="card.trade_value">Trade: {{card.trade_value}},</span>
				<span v-if="card.trade_payout">Payout: {{card.trade_payout}},</span>
				<span v-if="card.sign_deposit">Deposit: {{card.sign_deposit}},</span>
				<span v-if="card.further_deposit">Deposit: {{card.further_deposit}}</span>
			</div>
			<div>
				Origination: {{card.origination_fee}},
				Lender Fee: {{card.lender_fee}},
				<span
					v-if="card.custom_two"
				>{{card.custom_two_label}}: {{card.custom_two}},</span>
				<span v-if="card.custom_three">{{card.custom_three_label}}: {{card.custom_three}},</span>

				<span v-if="card.monthly_fee">Monthly Fee: {{card.monthly_fee}},</span>

				<span v-if="card.brokerage">Brokerage: {{card.brokerage}}</span>
			</div>
			<div>
				<span v-if="card.term">Term: {{card.term}},</span>
				<span v-if="card.rv">Residual: {{card.rv}} / {{card.rv_percent}}%</span>
			</div>
			<div>
				Weekly: {{card.weekly}},
				Fortnightly: {{card.fortnightly}},
				Monthly: {{card.monthly}},
			</div>
		</div>
		<div class>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoanCard",
	props: {
		card: Object
	}
};
</script>

<style>
</style>