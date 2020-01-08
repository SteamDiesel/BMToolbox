<template>
	<div class="w-full shadow-md hover:shadow-lg rounded-lg mt-5 p-10">
		<div class="font-semibold">
			{{card.name}}
		</div>
		<div>
			Vehicle: {{card.vehicle_price}},
			{{card.custom_one_label}}: {{card.custom_one}},
			Trade: {{card.trade_value}}, 
			Payout: {{card.trade_payout}}, 
			Deposit: {{card.sign_deposit}},
			Deposit: {{card.further_deposit}}
		</div>
		<div>
			Origination: {{card.origination_fee}},
			Lender Fee: {{card.lender_fee}},
			{{card.custom_two_label}}: {{card.custom_two}},
			{{card.custom_three_label}}: {{card.custom_three}},
			Monthly Fee: {{card.monthly_fee}},
			Brokerage: {{card.brokerage}}
		</div>
		<div>
			Term: {{card.term}},
			Residual: {{card.rv}} / {{card.rv_percent}}%
		</div>
		<div>
			Weekly: {{card.weekly}}, 
			Fortnightly: {{card.fortnightly}},
			Monthly: {{card.monthly}},
		</div>
	</div>
</template>

<script>
export default {
	name: "HistoryCard",
	props: {
		card: Object
	}
};
</script>

<style>
</style>