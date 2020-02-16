<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-2/5"
			@copy="copyClipboard('#'+property.description)">
				<template v-slot:label>
					Description
				</template>
				<input
					:id="'#'+property.description"
					v-model="property.description"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+property.market_value)">
				<template v-slot:label>
					Market Value
				</template>
				<input
					:id="'#'+property.market_value"
					v-model="property.market_value"
					@change="saveApplicationsToLocal"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+property.rental_income)">
				<template v-slot:label>
					Rental Income
				</template>
				<input
					:id="'#'+property.rental_income"
					v-model="property.rental_income"
					@keyup.87="property.rental_income = property.rental_income * 4.33"
					@keyup.70="property.rental_income = property.rental_income * 2.166"
					@keyup.81="property.rental_income = property.rental_income * 0.33"
					@keyup.89="property.rental_income = property.rental_income * 0.0833"
					@change="saveApplicationsToLocal"
					type="number"
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
			@copy="copyClipboard('#'+property.first_mortgage_lender)">
				<template v-slot:label>
					Mortgage Lender
				</template>
				<input
					:id="'#'+property.first_mortgage_lender"
					v-model="property.first_mortgage_lender"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+property.first_mortgage_balance)">
				<template v-slot:label>
					Mortgage Balance
				</template>
				<input
					:id="'#'+property.first_mortgage_balance"
					v-model="property.first_mortgage_balance"
					@change="saveApplicationsToLocal"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+property.first_mortgage_payment)">
				<template v-slot:label>
					Mortgage Repayment
				</template>
				<input
					:id="'#'+property.first_mortgage_payment"
					v-model="property.first_mortgage_payment"
					@keyup.87="property.first_mortgage_payment = property.first_mortgage_payment * 4.33"
					@keyup.70="property.first_mortgage_payment = property.first_mortgage_payment * 2.166"
					@keyup.81="property.first_mortgage_payment = property.first_mortgage_payment * 0.33"
					@keyup.89="property.first_mortgage_payment = property.first_mortgage_payment * 0.0833"
					@change="saveApplicationsToLocal"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		

	</div>
</template>

<script>
import {mapActions} from 'vuex'
import FormField from '@/components/application/FormField.vue'
export default {
	name: 'Property',
	components:{
		FormField
	},
	props: {
		property: Object
	},
	methods:{
		...mapActions(['saveApplicationsToLocal']),
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