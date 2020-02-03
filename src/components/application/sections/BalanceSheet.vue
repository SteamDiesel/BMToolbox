<template>
	<Section>
			<Header title="Balance Sheet"></Header>
			<div class="w-full mt-4">
				<div class="w-full flex font-semibold  border-gray-400 border-b">
					<div class="w-1/2">Asset Description</div>
					<div class="w-1/4 text-center">Type</div>
					<div class="w-1/4 text-right mr-10">Value</div>
				</div>
				<div v-for="(prop, index) in person.properties" :key="'prop'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{prop.description}}</div>
					<div class="w-1/4 text-center">Real Estate</div>
					<div class="w-1/4 text-right mr-10">{{+prop.market_value | toCurrency}}</div>
				</div>
				<div v-for="(veh, index) in person.vehicles" :key="'veh'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{veh.description}}</div>
					<div class="w-1/4 text-center">Vehicle</div>
					<div class="w-1/4 text-right mr-10">{{+veh.market_value | toCurrency}}</div>
				</div>
				
				<div v-for="(asset, index) in person.other_assets" :key="'oa'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{asset.description}}</div>
					<div class="w-1/4 text-center">Other</div>
					<div class="w-1/4 text-right mr-10">{{+asset.value | toCurrency}}</div>
				</div>
				<div class="w-full flex border-gray-400 border-b-2 font-semibold text-lg ">
					<div class="w-3/4 text-right">Total Current Assets:</div>
					<div class="w-1/4 text-right mr-10 tracking-wider">{{total_assets | toCurrency}}</div>
				</div>
			</div>
			<div class="w-full mt-4 mb-12">
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
					<div class="w-1/4 text-right mr-10">{{+prop.first_mortgage_balance | toCurrency}}</div>
				</div>
				<div v-for="(veh, index) in person.vehicles" :key="'cl'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4">{{veh.description}}</div>
					<div class="w-1/4 text-center">Car Loan</div>
					<div class="w-1/4 text-center">{{veh.finance_lender}}</div>
					<div class="w-1/4 text-right mr-10">
						<span v-if="!veh.is_trading">{{+veh.finance_balance | toCurrency}}</span>
						<span v-if="veh.is_trading">Being Paid Out</span>
					</div>
				</div>
				<div v-for="(loan, index) in person.other_loans" :key="'ol'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4"></div>
					<div class="w-1/4 text-center">Other Loan</div>
					<div class="w-1/4 text-center">{{loan.lender}}</div>
					<div class="w-1/4 text-right mr-10">
						<span v-if="!loan.refinance">{{+loan.current_balance | toCurrency}}</span>
						<span v-if="loan.refinance">Being Paid Out</span>
					</div>
				</div>
				<div v-for="(card, index) in person.credit_cards" :key="'cc'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/4"></div>
					<div class="w-1/4 text-center">Credit Card</div>
					<div class="w-1/4 text-center">{{card.lender}} ({{+card.credit_limit | toCurrency}})</div>
					<div class="w-1/4 text-right mr-10">{{+card.balance | toCurrency}}</div>
				</div>
				
				
				<div class="w-full flex border-gray-400 border-b-2 font-semibold text-lg ">
					<div class="w-3/4 text-right">Total Current Liabilities:</div>
					<div class="w-1/4 text-right mr-10 tracking-wider">{{total_liabilities | toCurrency}}</div>
				</div>
			</div>




			<Header title="Capacity Summary"></Header>



			<div class="w-full mt-4">
				<div class="w-full flex font-semibold  border-gray-400 border-b">
					<div class="w-1/2">Income Source</div>
					<div class="w-1/4 text-center">Type</div>
					<div class="w-1/4 text-right mr-10">Monthly</div>
				</div>
				<div v-for="(employer, index) in current_employers" :key="'empl' + index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{employer.employer}}</div>
					<div class="w-1/4 text-center">{{employer.status}}</div>
					<div class="w-1/4 text-right mr-10">{{+employer.net_monthly_income | toCurrency}}</div>
				</div>
				<div v-for="(prop, index) in rental_properties" :key="'rental' + index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{prop.description}}</div>
					<div class="w-1/4 text-center">Rental Income</div>
					<div class="w-1/4 text-right mr-10">{{+prop.rental_income | toCurrency}}</div>
				</div>
				
				<div class="w-full flex border-gray-400 border-b-2 font-semibold text-lg ">
					<div class="w-3/4 text-right">Total Income:</div>
					<div class="w-1/4 text-right mr-10 tracking-wider">{{+total_income | toCurrency}}</div>
				</div>
			</div>
			<div class="w-full mt-4">
				<div class="w-full flex font-semibold  border-gray-400 border-b">
					<div class="w-1/2">Expense Description</div>
					<div class="w-1/4 text-center">Type</div>
					<div class="w-1/4 text-right mr-10">Monthly</div>
				</div>
				<div class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">Declared Living Expenses</div>
					<div class="w-1/4 text-center">{{person.marital_status}}</div>
					<div class="w-1/4 text-right mr-10">{{domestic_expenses | toCurrency}}</div>
				</div>
				<div v-if="rent_total" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2"></div>
					<div class="w-1/4 text-center">Rent</div>
					<div class="w-1/4 text-right mr-10">{{rent_total | toCurrency}}</div>
				</div>
				<div v-if="board_total" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2"></div>
					<div class="w-1/4 text-center">Board</div>
					<div class="w-1/4 text-right mr-10">{{board_total | toCurrency}}</div>
				</div>
				<div v-for="(prop, index) in rental_properties" :key="'rentale' + index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{prop.description}} </div>
					<div class="w-1/4 text-center">Mortgage: {{prop.first_mortgage_lender}}</div>
					<div class="w-1/4 text-right mr-10">{{+prop.first_mortgage_payment | toCurrency}}</div>
				</div>
				<div v-for="(veh, index) in person.vehicles" :key="'cle'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{veh.description}}</div>
					<div class="w-1/4 text-center">Car Loan: {{veh.finance_lender}}</div>
					<div class="w-1/4 text-right mr-10">
						<span v-if="!veh.is_trading">{{+veh.finance_payment | toCurrency}}</span>
						<span v-if="veh.is_trading">Being Paid Out</span>
					</div>
				</div>
				<div v-for="(loan, index) in person.other_loans" :key="'ole'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{loan.lender}}</div>
					<div class="w-1/4 text-center">Other Loan</div>
					<div class="w-1/4 text-right mr-10">
						<span v-if="!loan.refinance">{{+loan.monthly_payment | toCurrency}}</span>
						<span v-if="loan.refinance">Being Paid Out</span>
					</div>
				</div>
				<div v-for="(card, index) in person.credit_cards" :key="'cce'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-1/2">{{card.lender}} Credit Card ({{+card.credit_limit | toCurrency}})</div>
					<div class="w-1/4 text-center">3% of limit</div>
					<div class="w-1/4 text-right mr-10">{{(+card.credit_limit * 0.03) | toCurrency}}</div>
				</div>
				

				
				
				<div class="w-full flex border-gray-400 border-b-2 font-semibold text-lg ">
					<div class="w-3/4 text-right">Total Expenses:</div>
					<div class="w-1/4 text-right mr-10 tracking-wider">{{+total_expenses | toCurrency}}</div>
				</div>
			</div>
			<div class="w-full mt-4">
				<div v-for="(quote, index) in application.quotes" :key="'quote'+index" class="w-full flex border-gray-400 border-b">
					<div class="w-3/4 text-right">Surplus before repayment: </div>
					<div class="w-1/4 text-right mr-10">{{+total_surplus | toCurrency}}</div>
				</div>
				<div class="w-full flex border-gray-400 border-b-2 font-semibold text-lg ">
					<div class="w-3/4 text-right">Surplus after proposed repayment {{application.loan_calculator.monthly | toCurrency}}:</div>
					<div class="w-1/4 text-right mr-10 tracking-wider">{{+total_surplus - +application.loan_calculator.monthly | toCurrency}}</div>
				</div>
				<div v-for="(quote, index) in application.quotes" :key="'quote'+index" class="w-full flex border-gray-400 border-b">
					
					<div class="w-3/4 text-right">Surplus after previously quoted payment {{+quote.loan_calculator.monthly | toCurrency}}: </div>
					<div class="w-1/4 text-right mr-10">{{+total_surplus - +quote.loan_calculator.monthly | toCurrency}}</div>
				</div>
				
			</div>
			
	</Section>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

import Header from "@/components/application/sections/SectionHeader.vue";
import Section from "@/components/application/sections/Section.vue";

export default {
	name: "BalanceSheet",
	components: {
		Header,
		Section
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	computed: {
		...mapGetters(['application']),
		current_employers(){
			return this.person.employers.filter((item)=>{
				if(item.current){
					return item
				}
			})
		},
		rental_properties(){
			return this.person.properties.filter((item)=>{
				if(+item.rental_income >= 1){
					return item
				}
			})
		},
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
			var $total = 0
			for(let item of this.person.properties){
				$total = $total + +item.first_mortgage_balance + +item.second_mortgage_balance
			}
			
			for(let item of this.person.vehicles){
				if(!item.is_trading){
					$total = $total + +item.finance_balance
				} 
			}
			for(let item of this.person.other_loans){
				if(!item.refinance){
					$total = $total + +item.current_balance
				} 	
			}
			for(let item of this.person.credit_cards){
				$total = $total + +item.balance
			}

			return $total
		},
		total_income(){
			var $total = 0
			for(let item of this.current_employers){
				$total = $total + +item.net_monthly_income
			}
			for(let item of this.rental_properties){
				$total = $total + +item.rental_income
			}

			return $total
		},
		

		domestic_expenses(){
			var expenses = this.person.domestic_expenses[0]
			if(expenses){
				var $total = 0
				for (let [key, value] of Object.entries(expenses)) {
					if(key != 'uuid'){
						$total = $total + +value
					}
				}
				return $total
			} else {
				return +0
			}
		},
		rent_total(){
			var $total = 0
			for(let item of this.person.addresses){
				if(item.status == 'Renting'){
					$total = $total + +item.rent
				}
				
			}
			return $total
		},
		board_total(){
			var $total = 0
			for(let item of this.person.addresses){
				if(item.status == 'Boarding'){
					$total = $total + +item.board
				}
			}
			return $total
		},
		total_expenses(){
			var $total = +this.rent_total + +this.board_total + +this.domestic_expenses
			for(let item of this.person.properties){
				$total = $total + +item.first_mortgage_payment + +item.second_mortgage_payment
			}
			
			for(let item of this.person.vehicles){
				if(!item.is_trading){
					$total = $total + +item.finance_payment
				} 
			}
			for(let item of this.person.other_loans){
				if(!item.refinance){
					$total = $total + +item.monthly_payment
				} 	
			}
			for(let item of this.person.credit_cards){
				$total = $total + (+item.credit_limit * 0.03)
			}

			return $total
		},

		total_surplus(){
			return +this.total_income - +this.total_expenses
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