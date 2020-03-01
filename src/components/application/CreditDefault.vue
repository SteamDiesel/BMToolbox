<template>
	<div class="">
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+credit_default.original_creditor)">
				<template v-slot:label>
					Original Creditor
				</template>
				<input
					:id="'#'+credit_default.original_creditor"
					v-model="credit_default.original_creditor"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+credit_default.amount_listed)">
				<template v-slot:label>
					Amount Listed
				</template>
				<input
					:id="'#'+credit_default.amount_listed"
					v-model="credit_default.amount_listed"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+credit_default.date_listed)">
				<template v-slot:label>
					Date Listed
				</template>
				<input
					:id="'#'+credit_default.date_listed"
					v-model="credit_default.date_listed"
					@change="saveApp"
					type="date"
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
			:no_copy=true
			>
				<template v-slot:label>
					Status
				</template>
				<select
					:id="'#'+credit_default.status"
					v-model="credit_default.status"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				>
					<option value="Unpaid">Unpaid</option>
					<option value="In Arrangement">In Arrangement</option>
					<option value="Disputed">Disputed</option>
					<option value="Paid">Paid</option>
				</select>
			</FormField>


			<FormField 
			v-if="credit_default.status == 'In Arrangement'"
			class="w-1/3"
			@copy="copyClipboard('#'+credit_default.current_balance)">
				<template v-slot:label>
					Current Balance
				</template>
				<input
					:id="'#'+credit_default.current_balance"
					v-model="credit_default.current_balance"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>


			<FormField 
			v-if="credit_default.status == 'In Arrangement'"
			class="w-1/3"
			@copy="copyClipboard('#'+credit_default.monthly_payment)">
				<template v-slot:label>
					Monthly Payment
				</template>
				<input
					:id="'#'+credit_default.monthly_payment"
					v-model="credit_default.monthly_payment"
					@keyup.87="credit_default.monthly_payment = credit_default.monthly_payment * 4.33"
					@keyup.70="credit_default.monthly_payment = credit_default.monthly_payment * 2.166"
					@keyup.81="credit_default.monthly_payment = credit_default.monthly_payment * 0.33"
					@keyup.89="credit_default.monthly_payment = credit_default.monthly_payment * 0.0833"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			v-if="credit_default.status == 'Paid'"
			class="w-1/3"
			@copy="copyClipboard('#'+credit_default.date_paid)">
				<template v-slot:label>
					Date Paid
				</template>
				<input
					:id="'#'+credit_default.date_paid"
					v-model="credit_default.date_paid"
					@change="saveApp"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-full"
			@copy="copyClipboard('#'+credit_default.reason)">
				<template v-slot:label>
					Reason for Default
				</template>
				<input
					:id="'#'+credit_default.reason"
					v-model="credit_default.reason"
					@change="saveApp"
					type="text"
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
	name: 'credit_default',
	components:{
		FormField
	},
	props: {
		credit_default: Object
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