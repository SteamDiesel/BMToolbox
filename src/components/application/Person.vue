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
		<Addresses :people="people" :person="person" :person_index="person_index"/>
		<Employers :people="people" :person="person" :person_index="person_index"/>
		<Properties :people="people" :person="person" :person_index="person_index"/>
		<Vehicles :people="people" :person="person" :person_index="person_index"/>
		
		
		<!-- Properties Section -->
		
		<!-- Vehicles Section -->
		
		<!-- Credit Cards -->
		<div class="mt-6">
			<h2 class="text-xl">Credit Cards</h2>
			<CreditCard
				class="mb-4"
				v-for="(credit_card, index) in person.credit_cards"
				:key="index"
				:credit_card="credit_card"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="dropFromArray({array: person.credit_cards, index: index})"
				>
					<svg  viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"/><rect width="20" height="4" x="2" y="7" class="secondary"/></svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>

				</button>
				<!-- Link to next person  -->
				<button
					v-show="!credit_card.shared"
					:class="{ 'bg-blue-400': credit_card.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkObjectToNextPerson(
						{person_index: person_index, 
						type: 'credit_card', 
						object: credit_card}
						)"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>

				<button
					v-show="credit_card.shared"
					:class="{ 'bg-blue-400': credit_card.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>
			</CreditCard>
			<div class="flex justify-start m-2 px-2">

				<!-- plus button  -->
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="pushToArray({person: person, type: 'credit_card', array: person.credit_cards})"
				>




					<svg  viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"/><rect width="20" height="4" x="2" y="7" class="secondary"/></svg>
					


					<!-- plus icon -->
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
		<!-- Other Loans -->
		<div class="mt-6">
			<h2 class="text-xl">Other Loans</h2>
			<OtherLoan
				class="mb-4"
				v-for="(vehicle, index) in person.vehicles"
				:key="index"
				:vehicle="vehicle"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="removeVehicleFromPerson({person_index: person_index, vehicle_index: index})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>

				</button>
				<!-- Link to next person  -->
				<button
					v-show="!vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkVehicleToNextPerson({person_index: person_index, vehicle: vehicle})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>

				<button
					v-show="vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>
			</OtherLoan>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="addVehicleToPerson(person)"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
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
		<!-- Other Assets -->
		<div class="mt-6">
			<h2 class="text-xl">Other Assets</h2>
			<OtherAsset
				class="mb-4"
				v-for="(vehicle, index) in person.vehicles"
				:key="index"
				:vehicle="vehicle"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="removeVehicleFromPerson({person_index: person_index, vehicle_index: index})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>

				</button>
				<!-- Link to next person  -->
				<button
					v-show="!vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkVehicleToNextPerson({person_index: person_index, vehicle: vehicle})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>

				<button
					v-show="vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>
			</OtherAsset>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="addVehicleToPerson(person)"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
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
		<!-- Domestic Expenses -->
		<div class="mt-6">
			<h2 class="text-xl">Domestic Expenses</h2>
			<DomesticExpenses
				class="mb-4"
				v-for="(vehicle, index) in person.vehicles"
				:key="index"
				:vehicle="vehicle"
			>
				<button
					class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="removeVehicleFromPerson({person_index: person_index, vehicle_index: index})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
						/>
					</svg>
					<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
						<path
							class="secondary"
							fill-rule="evenodd"
							d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
						/>
					</svg>

				</button>
				<!-- Link to next person  -->
				<button
					v-show="!vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="linkVehicleToNextPerson({person_index: person_index, vehicle: vehicle})"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>

				<button
					v-show="vehicle.shared"
					:class="{ 'bg-blue-400': vehicle.shared}"
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
				>
					<svg viewBox="0 0 24 24" class="h-6 w-6">
						<path
							class="secondary"
							d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
						/>
						<path
							class="primary"
							d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
						/>
					</svg>
				</button>
			</DomesticExpenses>
			<div class="flex justify-start m-2 px-2">
				<button
					class="relative bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print"
					@click="addVehicleToPerson(person)"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5">
						<path
							class="secondary"
							d="M20 18a3 3 0 0 0-6 0 1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.33a1 1 0 0 1 .95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 0 1-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
						/>
						<path
							class="primary"
							d="M10 18a3 3 0 0 0-6 0H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12h-4z"
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
		<div class="invisible">{{person.adr_count}}</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import FormField from "@/components/application/FormField.vue";
import Addresses from "@/components/application/sections/Addresses.vue";
import Employers from "@/components/application/sections/Employers.vue";
import Properties from "@/components/application/sections/Properties.vue";
import Vehicles from "@/components/application/sections/Vehicles.vue";
// import Employer from "@/components/application/Employer.vue";
// import Property from "@/components/application/Property.vue";
// import Vehicle from "@/components/application/Vehicle.vue";
import CreditCard from "@/components/application/CreditCard.vue";
import OtherLoan from "@/components/application/OtherLoan.vue";
import OtherAsset from "@/components/application/OtherAsset.vue";
import DomesticExpenses from "@/components/application/DomesticExpenses.vue";
export default {
	name: "Person",
	components: {
		FormField,
		Addresses,
		Employers,
		Properties,
		Vehicles,
		CreditCard,
		OtherLoan,
		OtherAsset,
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