<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-4/5"
			@copy="copyClipboard('#'+address.address)">
				<template v-slot:label>
					Full Address
				</template>
				<input
					:id="'#'+address.address"
					v-model="address.address"
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
			@copy="copyClipboard('#'+address.years)">
				<template v-slot:label>
					Years
				</template>
				<input
					:id="'#'+address.years"
					v-model="address.years"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+address.months)">
				<template v-slot:label>
					Months
				</template>
				<input
					:id="'#'+address.months"
					v-model="address.months"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+address.status)">
				<template v-slot:label>
					Status
				</template>
				<input
					:id="'#'+address.status"
					v-model="address.status"
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
	name: 'Address',
	components:{
		FormField
	},
	props: {
		address: Object
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