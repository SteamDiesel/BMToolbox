<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+vehicle.description)">
				<template v-slot:label>
					Lender
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
					Loan Amount
				</template>
				<input
					:id="'#'+vehicle.market_value"
					v-model="vehicle.market_value"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+vehicle.first_mortgage_lender)">
				<template v-slot:label>
					Current Balance
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
			class="w-1/5"
			@copy="copyClipboard('#'+vehicle.first_mortgage_balance)">
				<template v-slot:label>
					Monthly payment
				</template>
				<input
					:id="'#'+vehicle.first_mortgage_balance"
					v-model="vehicle.first_mortgage_balance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>
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