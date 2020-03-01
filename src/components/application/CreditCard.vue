<template>
	<div class="">
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+credit_card.lender)">
				<template v-slot:label>
					Lender
				</template>
				<input
					:id="'#'+credit_card.lender"
					v-model="credit_card.lender"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+credit_card.credit_limit)">
				<template v-slot:label>
					Limit
				</template>
				<input
					:id="'#'+credit_card.credit_limit"
					v-model="credit_card.credit_limit"
					@change="saveApp"
					@keyup="credit_card.monthly_payment = credit_card.credit_limit * .03"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+credit_card.balance)">
				<template v-slot:label>
					Balance
				</template>
				<input
					:id="'#'+credit_card.balance"
					v-model="credit_card.balance"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+credit_card.monthly_payment)">
				<template v-slot:label>
					Monthly payment
				</template>
				<input
					:id="'#'+credit_card.monthly_payment"
					v-model="credit_card.monthly_payment"
					@change="saveApp"
					type="number"
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
import {mapActions} from 'vuex'
import FormField from '@/components/application/FormField.vue'
export default {
	name: 'CreditCard',
	components:{
		FormField
	},
	props: {
		credit_card: Object
	},
	methods:{
		...mapActions(['saveApp']),
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