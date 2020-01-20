<template>
	<div class="mt-6">
			<h2 class="text-xl">Balance Sheet</h2>
			<div class="w-full">
				<div class="w-full flex font-semibold  border-gray-400 border-b">
					<div class="w-1/2">Asset Description</div>
					<div class="w-1/4 text-center">Type</div>
					<div class="w-1/4 text-right mr-10">Value</div>
				</div>
				<div v-for="(prop, index) in person.properties" :key="'prop'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{prop.description}}</div>
					<div class="w-1/4 text-center">Real Estate</div>
					<div class="w-1/4 text-right mr-10">{{prop.market_value}}</div>
				</div>
				<div v-for="(veh, index) in person.vehicles" :key="'veh'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{veh.description}}</div>
					<div class="w-1/4 text-center">Vehicle</div>
					<div class="w-1/4 text-right mr-10">{{veh.market_value}}</div>
				</div>
				
				<div v-for="(asset, index) in person.other_assets" :key="'oa'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{asset.description}}</div>
					<div class="w-1/4 text-center">Other</div>
					<div class="w-1/4 text-right mr-10">{{asset.value}}</div>
				</div>
				<div class="w-full flex border-gray-400 border-b-2 font-semibold ">
					<div class="w-1/2"></div>
					<div class="w-1/4 text-center">Total</div>
					<div class="w-1/4 text-right mr-10">{{total_assets}}</div>
				</div>
			</div>
			<div class="w-full mt-4">
				<div class="w-full flex font-semibold  border-gray-400 border-b">
					<div class="w-1/4">Liability Description</div>
					<div class="w-1/4 text-center">Type</div>
					<div class="w-1/4 text-center">Lender</div>
					<div class="w-1/4 text-right mr-10">Liability</div>
				</div>
				<div v-for="(prop, index) in person.properties" :key="'mort'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4">{{prop.description}}</div>
					<div class="w-1/4 text-center">Mortgage</div>
					<div class="w-1/4 text-center">{{prop.first_mortgage_lender}}</div>
					<div class="w-1/4 text-right mr-10">{{prop.first_mortgage_balance}}</div>
				</div>
				<div v-for="(veh, index) in person.vehicles" :key="'cl'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4">{{veh.description}}</div>
					<div class="w-1/4 text-center">Car Loan</div>
					<div class="w-1/4 text-center">{{veh.finance_lender}}</div>
					<div class="w-1/4 text-right mr-10">
						<span v-if="!veh.is_trading">{{veh.finance_balance}}</span>
						<span v-if="veh.is_trading">Being Paid Out</span>
					</div>
				</div>
				<div v-for="(loan, index) in person.other_loans" :key="'ol'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4"></div>
					<div class="w-1/4 text-center">Other Loan</div>
					<div class="w-1/4 text-center">{{loan.lender}}</div>
					<div class="w-1/4 text-right mr-10">{{loan.current_balance}}</div>
				</div>
				<div v-for="(card, index) in person.credit_cards" :key="'cc'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4"></div>
					<div class="w-1/4 text-center">Credit Card</div>
					<div class="w-1/4 text-center">{{card.lender}} ({{card.credit_limit}})</div>
					<div class="w-1/4 text-right mr-10">{{card.balance}}</div>
				</div>
				
				
				<div class="w-full flex border-gray-400 border-b-2 font-semibold ">
					<div class="w-1/2"></div>
					<div class="w-1/4 text-center">Total</div>
					<div class="w-1/4 text-right mr-10">{{total_liabilities}}</div>
				</div>
			</div>
			
		</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

// import DomesticExpensesCard from "@/components/application/DomesticExpenses.vue";

export default {
	name: "BalanceSheet",
	components: {
		
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	computed: {
		total_assets(){
			var real_estate = this.person.properties.reduce(
				(accumulated, item) => {
					return +accumulated + +item.market_value
				},
				+0
			)
			var vehicles = this.person.vehicles.reduce(
				(accumulated, item) => {
					return +accumulated + +item.market_value
				},
				+0
			)
			var other_assets = this.person.other_assets.reduce(
				(accumulated, item) => {
					return +accumulated + +item.value
				},
				+0
			)
			
			return +real_estate
				+ +vehicles
				+ +other_assets
		},
		total_liabilities(){
			var mortgages = this.person.properties.reduce(
				(accumulated, item) => {
					return +accumulated + +item.first_mortgage_balance + +item.second_mortgage_balance
				},
				+0
			)
			var carloans = this.person.vehicles.reduce(
				(accumulated, item) => {
					if(item.is_trading){
						return +accumulated + +item.finance_balance
					} else {
						return +accumulated 
					}
				},
				+0
			)
			var otherloans = this.person.other_loans.reduce(
				(accumulated, item) => {
					if(!item.refinance){
						return +accumulated + +item.current_balance
					} else {
						return +accumulated 
					}
				},
				+0
			)
			var creditCards = this.person.credit_cards.reduce(
				(accumulated, item) => {
					return +accumulated + +item.balance
				},
				+0
			)

			return +mortgages
				+ +carloans
				+ +otherloans
				+ +creditCards
		}
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
		...mapActions([
			"pushToArray",
			"dropFromArray",
			"linkObjectToNextPerson"
		])
	}
};
</script>

<style>
</style>