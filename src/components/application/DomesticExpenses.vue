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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
				</template>
				<input
					:id="'#'+expenses.food"
					v-model="expenses.food"
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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
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
			@copy="copyClipboard('#'+expenses.food)">
				<template v-slot:label>
					Other
				</template>
				<input
					:id="'#'+expenses.food"
					v-model="expenses.food"
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