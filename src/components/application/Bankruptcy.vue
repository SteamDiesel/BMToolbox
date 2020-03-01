<template>
	<div class="">
		<div class="flex flex-wrap">
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+bankruptcy.start_date)">
				<template v-slot:label>
					Date Entered
				</template>
				<input
					:id="'#'+bankruptcy.start_date"
					v-model="bankruptcy.start_date"
					@change="saveApp"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			:no_copy=true
			>
				<template v-slot:label>
					Type
				</template>
				<select
					:id="'#'+bankruptcy.type"
					v-model="bankruptcy.type"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				>
					<option value="Bankruptcy">Bankruptcy</option>
					<option value="Part 9 Debt Agreement">Part 9 Debt Agreement</option>
				</select>
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
					:id="'#'+bankruptcy.status"
					v-model="bankruptcy.status"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				>
					<option value="Discharged">Discharged</option>
					<option value="Not-Discharged">Not-Discharged</option>
				</select>
			</FormField>


			<FormField 
			v-if="bankruptcy.status == 'In Arrangement'"
			class="w-1/3"
			@copy="copyClipboard('#'+bankruptcy.current_balance)">
				<template v-slot:label>
					Current Balance
				</template>
				<input
					:id="'#'+bankruptcy.current_balance"
					v-model="bankruptcy.current_balance"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>


			<FormField 
			v-if="bankruptcy.type == 'Part 9 Debt Agreement'"
			class="w-1/3"
			@copy="copyClipboard('#'+bankruptcy.monthly_payment)">
				<template v-slot:label>
					Monthly Payment
				</template>
				<input
					:id="'#'+bankruptcy.monthly_payment"
					v-model="bankruptcy.monthly_payment"
					@keyup.87="bankruptcy.monthly_payment = bankruptcy.monthly_payment * 4.33"
					@keyup.70="bankruptcy.monthly_payment = bankruptcy.monthly_payment * 2.166"
					@keyup.81="bankruptcy.monthly_payment = bankruptcy.monthly_payment * 0.33"
					@keyup.89="bankruptcy.monthly_payment = bankruptcy.monthly_payment * 0.0833"
					@change="saveApp"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			v-if="bankruptcy.status == 'Discharged'"
			class="w-1/3"
			@copy="copyClipboard('#'+bankruptcy.discharged_date)">
				<template v-slot:label>
					Date Discharged
				</template>
				<input
					:id="'#'+bankruptcy.discharged_date"
					v-model="bankruptcy.discharged_date"
					@change="saveApp"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-full"
			@copy="copyClipboard('#'+bankruptcy.reason)">
				<template v-slot:label>
					Reason for Bankruptcy
				</template>
				<input
					:id="'#'+bankruptcy.reason"
					v-model="bankruptcy.reason"
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
	name: 'bankruptcy',
	components:{
		FormField
	},
	props: {
		bankruptcy: Object
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