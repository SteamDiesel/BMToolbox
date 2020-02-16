<template>
	<div class="w-full bg-gray-100 p-2">
		<div class="flex justify-between">
			<Header title="Personal Details">
			
			</Header>
			<slot />
		</div>
		
		
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
				<template v-slot:label>Date of Birth <span :class="{'font-semibold text-red-600': age <= 17}" v-if="age">[{{age}}]</span> </template>
				<input
					:id="'#'+person.date_of_birth"
					v-model="person.date_of_birth"
					@change="saveApplicationsToLocal"
					type="date"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.gender)">
				<template v-slot:label>Gender</template>
				<select
					:id="'#'+person.gender"
					v-model="person.gender"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				>
					<option value="" selected>Select</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.marital_status)">
				<template v-slot:label>Marital Status</template>
				<select
					:id="'#'+person.marital_status"
					v-model="person.marital_status"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				>
					<option value="" selected>Select</option>
					<option value="Single">Single</option>
					<option value="Defacto">Defacto</option>
					<option value="Married">Married</option>
					<option value="Separated">Separated</option>
					<option value="Divorced">Divorced</option>
					<option value="Widowed">Widowed</option>
				</select>
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
				<select
					:id="'#'+person.licence_state"
					v-model="person.licence_state"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				>
					<option value="" selected>Select</option>
					<option value="QLD">QLD</option>
					<option value="NSW">NSW</option>
					<option value="ACT">ACT</option>
					<option value="VIC">VIC</option>
					<option value="SA">SA</option>
					<option value="WA">WA</option>
					<option value="NT">NT</option>
					<option value="TAS">TAS</option>
					<option value="International">International</option>
				</select>
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
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_status)">
				<template v-slot:label>Residency Status</template>
				<select
					:id="'#'+person.visa_status"
					v-model="person.visa_status"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				>
					<option value="" selected>Select</option>
					<option value="Citizen">Citizen</option>
					<option value="Permanent Resident">Permanent Resident</option>
					<option value="Visa">Visa</option>
					
				</select>
				
			</FormField>

			<FormField v-if="person.visa_status == 'Visa'" class="w-1/3" @copy="copyClipboard('#'+person.visa_class)">
				<template v-slot:label>Visa Sub-class</template>
				<input
					:id="'#'+person.visa_class"
					v-model="person.visa_class"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField v-if="person.visa_status == 'Visa'" class="w-1/3" @copy="copyClipboard('#'+person.visa_expiry)">
				<template v-slot:label>Visa Expiry Date</template>
				<input
					:id="'#'+person.visa_expiry"
					v-model="person.visa_expiry"
					@change="saveApplicationsToLocal"
					type="date"
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
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		
		
		<Kids :people="people" :person="person" :person_index="person_index"/>


		<Addresses :people="people" :person="person" :person_index="person_index"/>
		
		
		<Employers :people="people" :person="person" :person_index="person_index"/>
		
		
		<Properties :people="people" :person="person" :person_index="person_index"/>
		
		
		<Vehicles :people="people" :person="person" :person_index="person_index"/>
		
				
		<OtherAssets :people="people" :person="person" :person_index="person_index"/>
		
		
		<OtherLoans :people="people" :person="person" :person_index="person_index"/>
		
		
		<CreditCards :people="people" :person="person" :person_index="person_index"/>
		
		
		<DomesticExpenses :people="people" :person="person" :person_index="person_index"/>


		<BalanceSheet :people="people" :person="person" :person_index="person_index"/>
		
		
		
		<!-- ugly hack to trigger re-render when nested arrays are updated -->
		<div class="invisible">{{person.adr_count}}</div>
	</div>
</template>

<script>
import moment from 'moment'
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
import BalanceSheet from "@/components/application/sections/BalanceSheet.vue";
import Header from "@/components/application/sections/SectionHeader.vue";


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
		BalanceSheet,
		Header
	},
	props: {
		people: Array,
		person: Object,
		person_index: Number
	},
	computed: {
		age(){
			return moment().diff(this.person.date_of_birth, 'years', false)
		}
	},
	methods: {
		...mapMutations([]),
		...mapActions([
			"pushToArray",
			"dropFromArray",
			"linkObjectToNextPerson",
			"saveApplicationsToLocal"
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