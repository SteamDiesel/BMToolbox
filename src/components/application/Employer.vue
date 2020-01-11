<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-4/5"
			@copy="copyClipboard('#'+employer.employer)">
				<template v-slot:label>
					Employer Name
				</template>
				<input
					:id="'#'+employer.employer"
					v-model="employer.employer"
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
			class="w-1/2"
			@copy="copyClipboard('#'+employer.position)">
				<template v-slot:label>
					Position / Role
				</template>
				<input
					:id="'#'+employer.position"
					v-model="employer.position"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+employer.status)">
				<template v-slot:label>
					Employment Status / Type
				</template>
				<input
					:id="'#'+employer.status"
					v-model="employer.status"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+employer.address)">
				<template v-slot:label>
					Street Address
				</template>
				<input
					:id="'#'+employer.address"
					v-model="employer.address"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.contact_phone)">
				<template v-slot:label>
					Contact Phone
				</template>
				<input
					:id="'#'+employer.contact_phone"
					v-model="employer.contact_phone"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.contact_name)">
				<template v-slot:label>
					Contact Person
				</template>
				<input
					:id="'#'+employer.contact_name"
					v-model="employer.contact_name"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.years)">
				<template v-slot:label>
					Years
				</template>
				<input
					:id="'#'+employer.years"
					v-model="employer.years"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.months)">
				<template v-slot:label>
					Months
				</template>
				<input
					:id="'#'+employer.months"
					v-model="employer.months"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.start_date)">
				<template v-slot:label>
					Start Date
				</template>
				<input
					:id="'#'+employer.start_date"
					v-model="employer.start_date"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+employer.end_date)">
				<template v-slot:label>
					End Date
				</template>
				<input
					:id="'#'+employer.end_date"
					v-model="employer.end_date"
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
		employer: Object
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