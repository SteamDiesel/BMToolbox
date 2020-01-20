<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<div class="w-1/5 flex justify-around items-center">
				
				<button
					@click="vehicle.is_trading = !vehicle.is_trading"
					:class="{ 'bg-teal-400 font-semibold': vehicle.is_trading}" class="flex items-center bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
				>
					
					<span v-show="!vehicle.is_trading" class="">Keeping</span>
					<span v-show="vehicle.is_trading" class="">For Trade</span>
				</button>
			</div>
			<FormField 
			class="w-2/5"
			@copy="copyClipboard('#'+vehicle.description)">
				<template v-slot:label>
					Description
				</template>
				<input
					:id="'#'+vehicle.description"
					v-model="vehicle.description"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+vehicle.market_value)">
				<template v-slot:label>
					Market Value
				</template>
				<input
					:id="'#'+vehicle.market_value"
					v-model="vehicle.market_value"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>

		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+vehicle.first_mortgage_lender)">
				<template v-slot:label>
					Secured Loan Lender
				</template>
				<input
					:id="'#'+vehicle.first_mortgage_lender"
					v-model="vehicle.first_mortgage_lender"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+vehicle.first_mortgage_balance)">
				<template v-slot:label>
					Loan Balance
				</template>
				<input
					:id="'#'+vehicle.first_mortgage_balance"
					v-model="vehicle.first_mortgage_balance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+vehicle.first_mortgage_payment)">
				<template v-slot:label>
					Loan Repayment
				</template>
				<input
					:id="'#'+vehicle.first_mortgage_payment"
					v-model="vehicle.first_mortgage_payment"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		

	</div>
</template>

<script>
import {mapMutations} from 'vuex'
import FormField from '@/components/application/FormField.vue'
export default {
	name: 'Vehicle',
	components:{
		FormField
	},
	props: {
		vehicle: Object
	},
	methods:{
		...mapMutations(['saveApplicationsToLocal']),
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			valueToCopy.setAttribute('type', 'text');
			valueToCopy.select();
			try {
				document.execCommand('copy');
			} catch (err) {
				alert('Oops, unable to copy');
			}
		},
	}
};
</script>

<style>
</style>