<template>
	<div class="w-full bg-gray-200 p-2">
		<div class="flex justify-end">
			<slot />
		</div>
		<h2 class="text-xl">Personal Details</h2>
		<div class="flex flex-wrap">
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.first_name)">
				<template v-slot:label>First Name</template>
				<input
					:id="'#'+person.first_name"
					v-model="person.first_name"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/2" @copy="copyClipboard('#'+person.alias)">
				<template v-slot:label>Alias / Nickname</template>
				<input
					:id="'#'+person.alias"
					v-model="person.alias"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.middle_names)">
				<template v-slot:label>Middle Names</template>
				<input
					:id="'#'+person.middle_names"
					v-model="person.middle_names"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.surname)">
				<template v-slot:label>Surname</template>
				<input
					:id="'#'+person.surname"
					v-model="person.surname"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>

		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.mobile_phone)">
				<template v-slot:label>Mobile</template>
				<input
					:id="'#'+person.mobile_phone"
					v-model="person.mobile_phone"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.home_phone)">
				<template v-slot:label>Home Phone</template>
				<input
					:id="'#'+person.home_phone"
					v-model="person.home_phone"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.work_phone)">
				<template v-slot:label>Work Phone</template>
				<input
					:id="'#'+person.work_phone"
					v-model="person.work_phone"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-2/3" @copy="copyClipboard('#'+person.email_address)">
				<template v-slot:label>Email</template>
				<input
					:id="'#'+person.email_address"
					v-model="person.email_address"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.abn)">
				<template v-slot:label>Sole Trader ABN</template>
				<input
					:id="'#'+person.abn"
					v-model="person.abn"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.date_of_birth)">
				<template v-slot:label>Date of Birth</template>
				<input
					:id="'#'+person.date_of_birth"
					v-model="person.date_of_birth"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.gender)">
				<template v-slot:label>Gender</template>
				<input
					:id="'#'+person.gender"
					v-model="person.gender"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.marital_status)">
				<template v-slot:label>Marital Status</template>
				<input
					:id="'#'+person.marital_status"
					v-model="person.marital_status"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.licence_number)">
				<template v-slot:label>Licence #</template>
				<input
					:id="'#'+person.licence_number"
					v-model="person.licence_number"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.licence_state)">
				<template v-slot:label>Licence State</template>
				<input
					:id="'#'+person.licence_state"
					v-model="person.licence_state"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				v-if="person.licence_state == 'NSW'"
				class="w-1/3"
				@copy="copyClipboard('#'+person.licence_card)"
			>
				<template v-slot:label>Licence Card #</template>
				<input
					:id="'#'+person.licence_card"
					v-model="person.licence_card"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.licence_expiry)">
				<template v-slot:label>Licence Expiry Date</template>
				<input
					:id="'#'+person.licence_expiry"
					v-model="person.licence_expiry"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_status)">
				<template v-slot:label>Residency Status</template>
				<input
					:id="'#'+person.visa_status"
					v-model="person.visa_status"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_class)">
				<template v-slot:label>Visa Sub-class</template>
				<input
					:id="'#'+person.visa_class"
					v-model="person.visa_class"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_expiry)">
				<template v-slot:label>Visa Expiry Date</template>
				<input
					:id="'#'+person.visa_expiry"
					v-model="person.visa_expiry"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.passport_number)">
				<template v-slot:label>Passport #</template>
				<input
					:id="'#'+person.passport_number"
					v-model="person.passport_number"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.passport_country)">
				<template v-slot:label>Passport Country</template>
				<input
					:id="'#'+person.passport_country"
					v-model="person.passport_country"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.passport_expiry)">
				<template v-slot:label>Passport Expiry Date</template>
				<input
					:id="'#'+person.passport_expiry"
					v-model="person.passport_expiry"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		
		
		<Kids :people="people" :person="person" :person_index="person_index"/>


		<Addresses :people="people" :person="person" :person_index="person_index"/>
		
		
		<Employers :people="people" :person="person" :person_index="person_index"/>
		
		
		<Properties :people="people" :person="person" :person_index="person_index"/>
		
		
		<Vehicles :people="people" :person="person" :person_index="person_index"/>
		
		
		<CreditCards :people="people" :person="person" :person_index="person_index"/>
		
		
		<OtherLoans :people="people" :person="person" :person_index="person_index"/>
		
		
		<OtherAssets :people="people" :person="person" :person_index="person_index"/>
		
		
		<DomesticExpenses :people="people" :person="person" :person_index="person_index"/>
		
		
		<!-- ugly hack to trigger re-render when nested arrays are updated -->
		<div class="invisible">{{person.adr_count}}</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import FormField from "@/components/application/FormField.vue";
import Addresses from "@/components/application/sections/Addresses.vue";
import Kids from "@/components/application/sections/Kids.vue";
import Employers from "@/components/application/sections/Employers.vue";
import Properties from "@/components/application/sections/Properties.vue";
import Vehicles from "@/components/application/sections/Vehicles.vue";
import CreditCards from "@/components/application/sections/CreditCards.vue";
import OtherLoans from "@/components/application/sections/OtherLoans.vue";
import OtherAssets from "@/components/application/sections/OtherAssets.vue";
import DomesticExpenses from "@/components/application/sections/DomesticExpenses.vue";

export default {
	name: "Person",
	components: {
		FormField,
		Kids,
		Addresses,
		Employers,
		Properties,
		Vehicles,
		CreditCards,
		OtherLoans,
		OtherAssets,
		DomesticExpenses,
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
		...mapActions([
			"pushToArray",
			"dropFromArray",
			"linkObjectToNextPerson"
		]),
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			valueToCopy.setAttribute("type", "text");
			valueToCopy.select();
			try {
				document.execCommand("copy");
			} catch (err) {
				alert("Oops, unable to copy");
			}
		}
	}
};
</script>

<style>
</style>