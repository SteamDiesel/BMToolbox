<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Food / Groceries
				</template>
				<input
					:id="'#'+expenses.food"
					v-model="expenses.food"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.fuel)">
				<template v-slot:label>
					Fuel / Transport
				</template>
				<input
					:id="'#'+expenses.fuel"
					v-model="expenses.fuel"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.electricity)">
				<template v-slot:label>
					Electricity
				</template>
				<input
					:id="'#'+expenses.electricity"
					v-model="expenses.electricity"
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
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.gas)">
				<template v-slot:label>
					Gas
				</template>
				<input
					:id="'#'+expenses.gas"
					v-model="expenses.gas"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.internet)">
				<template v-slot:label>
					Internet
				</template>
				<input
					:id="'#'+expenses.internet"
					v-model="expenses.internet"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.phone)">
				<template v-slot:label>
					Phone
				</template>
				<input
					:id="'#'+expenses.phone"
					v-model="expenses.phone"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.council_rates)">
				<template v-slot:label>
					Council rates
				</template>
				<input
					:id="'#'+expenses.council_rates"
					v-model="expenses.council_rates"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.motor_insurance)">
				<template v-slot:label>
					Car Insurance
				</template>
				<input
					:id="'#'+expenses.motor_insurance"
					v-model="expenses.motor_insurance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.health_insurance)">
				<template v-slot:label>
					Health Insurance
				</template>
				<input
					:id="'#'+expenses.health_insurance"
					v-model="expenses.health_insurance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.home_contents_insurance)">
				<template v-slot:label>
					Home Insurance
				</template>
				<input
					:id="'#'+expenses.home_contents_insurance"
					v-model="expenses.home_contents_insurance"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.child_care)">
				<template v-slot:label>
					Child Care
				</template>
				<input
					:id="'#'+expenses.child_care"
					v-model="expenses.child_care"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+expenses.child_support)">
				<template v-slot:label>
					Child Support
				</template>
				<input
					:id="'#'+expenses.child_support"
					v-model="expenses.child_support"
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
	name: 'DomesticExpensesCard',
	components:{
		FormField
	},
	props: {
		expenses: Object
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