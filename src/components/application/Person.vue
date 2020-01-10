<template>
	<div class="w-full bg-gray-200 p-2">
		<div class="flex justify-end">
			<slot />
		</div>

		<div class="flex flex-wrap">
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.first_name)">
				<template v-slot:label>First Name</template>
				<input
					:id="'#'+person.first_name"
					v-model="person.first_name"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/2" @copy="copyClipboard('#'+person.alias)">
				<template v-slot:label>Alias / Nickname</template>
				<input
					:id="'#'+person.alias"
					v-model="person.alias"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.middle_names)">
				<template v-slot:label>Middle Names</template>
				<input
					:id="'#'+person.middle_names"
					v-model="person.middle_names"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/2" @copy="copyClipboard('#'+person.surname)">
				<template v-slot:label>Surname</template>
				<input
					:id="'#'+person.surname"
					v-model="person.surname"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.home_phone)">
				<template v-slot:label>Home Phone</template>
				<input
					:id="'#'+person.home_phone"
					v-model="person.home_phone"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.work_phone)">
				<template v-slot:label>Work Phone</template>
				<input
					:id="'#'+person.work_phone"
					v-model="person.work_phone"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-2/3" @copy="copyClipboard('#'+person.email_address)">
				<template v-slot:label>Email</template>
				<input
					:id="'#'+person.email_address"
					v-model="person.email_address"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.gender)">
				<template v-slot:label>Gender</template>
				<input
					:id="'#'+person.gender"
					v-model="person.gender"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.marital_status)">
				<template v-slot:label>Marital Status</template>
				<input
					:id="'#'+person.marital_status"
					v-model="person.marital_status"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.licence_state)">
				<template v-slot:label>Licence State</template>
				<input
					:id="'#'+person.licence_state"
					v-model="person.licence_state"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.licence_expiry)">
				<template v-slot:label>Licence Expiry Date</template>
				<input
					:id="'#'+person.licence_expiry"
					v-model="person.licence_expiry"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_class)">
				<template v-slot:label>Visa Sub-class</template>
				<input
					:id="'#'+person.visa_class"
					v-model="person.visa_class"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+person.visa_expiry)">
				<template v-slot:label>Visa Expiry Date</template>
				<input
					:id="'#'+person.visa_expiry"
					v-model="person.visa_expiry"
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
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.passport_country)">
				<template v-slot:label>Passport Country</template>
				<input
					:id="'#'+person.passport_country"
					v-model="person.passport_country"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+person.passport_expiry)">
				<template v-slot:label>Passport Expiry Date</template>
				<input
					:id="'#'+person.passport_expiry"
					v-model="person.passport_expiry"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div>
			<Address v-for="(address, index) in person.addresses" :key="index" :address="address">
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="removeAddressFromPerson({person_index: person_index, address_index: index})"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="primary"
							d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
						<path
							class="secondary"
							d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"/></svg>
					
				</button>
			</Address>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="addAddressToPerson(person)"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="primary"
							d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
						<path
							class="secondary"
							d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 right-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<!-- ugly hack to trigger re-render when nested arrays are updated -->
		<div class="invisible">
			{{person.adr_count}}
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import FormField from "@/components/application/FormField.vue";
import Address from "@/components/application/Address.vue";
export default {
	name: "Person",
	components: {
		FormField,
		Address
	},
	props: {
		person: Object,
		person_index: Number
	},
	methods: {
		...mapMutations(['addAddressToPerson', 'removeAddressFromPerson']),
		test() {
			alert("works");
		},
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