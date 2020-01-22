<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.lender)">
				<template v-slot:label>
					Lender
				</template>
				<input
					:id="'#'+other_loan.lender"
					v-model="other_loan.lender"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.borrow_amount)">
				<template v-slot:label>
					Loan Amount
				</template>
				<input
					:id="'#'+other_loan.borrow_amount"
					v-model="other_loan.borrow_amount"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.current_balance)">
				<template v-slot:label>
					Current Balance
				</template>
				<input
					:id="'#'+other_loan.current_balance"
					v-model="other_loan.current_balance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.monthly_payment)">
				<template v-slot:label>
					Monthly payment
				</template>
				<input
					:id="'#'+other_loan.monthly_payment"
					v-model="other_loan.monthly_payment"
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
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.start_date)">
				<template v-slot:label>
					Start Date
				</template>
				<input
					:id="'#'+other_loan.start_date"
					v-model="other_loan.start_date"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.term)">
				<template v-slot:label>
					Term (months)
				</template>
				<input
					:id="'#'+other_loan.term"
					v-model="other_loan.term"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/5"
			>
				<template v-slot:label>
					Paying out
				</template>
				<div class="flex justify-center">
					<CheckBox :value="other_loan.refinance" @toggle="checkboxPayout" />
				</div>
			</FormField>
			<FormField 
			class="w-1/5"
			@copy="copyClipboard('#'+other_loan.apr)">
				<template v-slot:label>
					A.P.R.
				</template>
				<input
					:id="'#'+other_loan.apr"
					v-model="other_loan.apr"
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
import CheckBox from '@/components/buttons/CheckBox.vue'
export default {
	name: 'OtherLoan',
	components:{
		FormField,
		CheckBox
	},
	props: {
		other_loan: Object
	},
	methods:{
		checkboxPayout(){
			this.other_loan.refinance = !this.other_loan.refinance
			this.saveApplicationsToLocal()
		},
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