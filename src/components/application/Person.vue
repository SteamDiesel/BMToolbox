<template>
	<div class="w-full bg-gray-200 p-2">
		
		<div class="flex flex-wrap">
			
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+person.first_name)">
				<template v-slot:label>
					First Name
				</template>
				<input
					:id="'#'+person.first_name"
					v-model="person.first_name"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+person.alias)">
				<template v-slot:label>
					Alias / Nickname
				</template>
				<input
					:id="'#'+person.alias"
					v-model="person.alias"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+person.middle_names)">
				<template v-slot:label>
					Middle Names
				</template>
				<input
					:id="'#'+person.middle_names"
					v-model="person.middle_names"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/2"
			@copy="copyClipboard('#'+person.surname)">
				<template v-slot:label>
					Surname
				</template>
				<input
					:id="'#'+person.surname"
					v-model="person.surname"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.mobile_phone)">
				<template v-slot:label>
					Mobile
				</template>
				<input
					:id="'#'+person.mobile_phone"
					v-model="person.mobile_phone"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.home_phone)">
				<template v-slot:label>
					Home Phone
				</template>
				<input
					:id="'#'+person.home_phone"
					v-model="person.home_phone"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.work_phone)">
				<template v-slot:label>
					Work Phone
				</template>
				<input
					:id="'#'+person.work_phone"
					v-model="person.work_phone"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			

			<FormField 
			class="w-2/3"
			@copy="copyClipboard('#'+person.email_address)">
				<template v-slot:label>
					Email
				</template>
				<input
					:id="'#'+person.email_address"
					v-model="person.email_address"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.date_of_birth)">
				<template v-slot:label>
					Gender
				</template>
				<input
					:id="'#'+person.date_of_birth"
					v-model="person.date_of_birth"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.gender)">
				<template v-slot:label>
					Date of Birth
				</template>
				<input
					:id="'#'+person.gender"
					v-model="person.gender"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.gender)">
				<template v-slot:label>
					Marital Status
				</template>
				<input
					:id="'#'+person.gender"
					v-model="person.gender"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_number)">
				<template v-slot:label>
					Licence #
				</template>
				<input
					:id="'#'+person.licence_number"
					v-model="person.licence_number"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_state)">
				<template v-slot:label>
					Licence State
				</template>
				<input
					:id="'#'+person.licence_state"
					v-model="person.licence_state"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_card)">
				<template v-slot:label>
					Licence Card #
				</template>
				<input
					:id="'#'+person.licence_card"
					v-model="person.licence_card"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_expiry)">
				<template v-slot:label>
					Licence Expiry Date
				</template>
				<input
					:id="'#'+person.licence_expiry"
					v-model="person.licence_expiry"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.visa_status)">
				<template v-slot:label>
					Residency Status
				</template>
				<input
					:id="'#'+person.visa_status"
					v-model="person.visa_status"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.visa_class)">
				<template v-slot:label>
					Visa Sub-class
				</template>
				<input
					:id="'#'+person.visa_class"
					v-model="person.visa_class"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.visa_expiry)">
				<template v-slot:label>
					Visa Expiry Date
				</template>
				<input
					:id="'#'+person.visa_expiry"
					v-model="person.visa_expiry"
					type="date"
					class="form-input text-center"
				/>
			</FormField>

		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_number)">
				<template v-slot:label>
					Passport #
				</template>
				<input
					:id="'#'+person.licence_number"
					v-model="person.licence_number"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_state)">
				<template v-slot:label>
					Passport Country
				</template>
				<input
					:id="'#'+person.licence_state"
					v-model="person.licence_state"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/3"
			@copy="copyClipboard('#'+person.licence_card)">
				<template v-slot:label>
					Passport Expiry Date
				</template>
				<input
					:id="'#'+person.licence_card"
					v-model="person.licence_card"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			
		</div>

	</div>
</template>

<script>
import FormField from '@/components/application/FormField.vue'
export default {
	name: "Person",
	components:{
		FormField
	},
	props: {
		person: Object,
	},
	methods:{
		test(){
			alert('works')
		},
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			// valueToCopy.setAttribute('type', 'text');
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