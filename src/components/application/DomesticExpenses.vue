<template>
	<div class="">
		<div class="font-semibold mt-2">General</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.groceries)"
			>
				<template v-slot:label>Groceries</template>
				<input
					:id="'#exp' + expenses.groceries"
					v-model="expenses.groceries"
					@change="updateField"
					@keyup.87="expenses.groceries = expenses.groceries * 4.33"
					@keyup.70="expenses.groceries = expenses.groceries * 2.16"
					@keyup.81="expenses.groceries = expenses.groceries * 0.33"
					@keyup.89="expenses.groceries = expenses.groceries * 0.0833"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.toiletries)"
			>
				<template v-slot:label>Toiletries</template>
				<input
					:id="'#exp' + expenses.toiletries"
					v-model="expenses.toiletries"
					@keyup.87="expenses.toiletries = expenses.toiletries * 4.33"
					@keyup.70="
						expenses.toiletries = expenses.toiletries * 2.166
					"
					@keyup.81="expenses.toiletries = expenses.toiletries * 0.33"
					@keyup.89="
						expenses.toiletries = expenses.toiletries * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.clothing)"
			>
				<template v-slot:label>Clothing</template>
				<input
					:id="'#exp' + expenses.clothing"
					v-model="expenses.clothing"
					@keyup.87="expenses.clothing = expenses.clothing * 4.33"
					@keyup.70="expenses.clothing = expenses.clothing * 2.166"
					@keyup.81="expenses.clothing = expenses.clothing * 0.33"
					@keyup.89="expenses.clothing = expenses.clothing * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<div class="w-1/4 flex justify-around items-center">
				<slot></slot>
			</div>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.footwear)"
			>
				<template v-slot:label>Footwear</template>
				<input
					:id="'#exp' + expenses.footwear"
					v-model="expenses.footwear"
					@keyup.87="expenses.footwear = expenses.footwear * 4.33"
					@keyup.70="expenses.footwear = expenses.footwear * 2.166"
					@keyup.81="expenses.footwear = expenses.footwear * 0.33"
					@keyup.89="expenses.footwear = expenses.footwear * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.pet_care)"
			>
				<template v-slot:label>Pet Care</template>
				<input
					:id="'#exp' + expenses.pet_care"
					v-model="expenses.pet_care"
					@keyup.87="expenses.pet_care = expenses.pet_care * 4.33"
					@keyup.70="expenses.pet_care = expenses.pet_care * 2.166"
					@keyup.81="expenses.pet_care = expenses.pet_care * 0.33"
					@keyup.89="expenses.pet_care = expenses.pet_care * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.doctor)"
			>
				<template v-slot:label>Doctor</template>
				<input
					:id="'#exp' + expenses.doctor"
					v-model="expenses.doctor"
					@keyup.87="expenses.doctor = expenses.doctor * 4.33"
					@keyup.70="expenses.doctor = expenses.doctor * 2.166"
					@keyup.81="expenses.doctor = expenses.doctor * 0.33"
					@keyup.89="expenses.doctor = expenses.doctor * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.dentist)"
			>
				<template v-slot:label>Dentist</template>
				<input
					:id="'#exp' + expenses.dentist"
					v-model="expenses.dentist"
					@keyup.87="expenses.dentist = expenses.dentist * 4.33"
					@keyup.70="expenses.dentist = expenses.dentist * 2.166"
					@keyup.81="expenses.dentist = expenses.dentist * 0.33"
					@keyup.89="expenses.dentist = expenses.dentist * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.medicine)"
			>
				<template v-slot:label>Medicine</template>
				<input
					:id="'#exp' + expenses.medicine"
					v-model="expenses.medicine"
					@keyup.87="expenses.medicine = expenses.medicine * 4.33"
					@keyup.70="expenses.medicine = expenses.medicine * 2.166"
					@keyup.81="expenses.medicine = expenses.medicine * 0.33"
					@keyup.89="expenses.medicine = expenses.medicine * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>

		<div class="font-semibold mt-2">Children Expenses</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.school_fees)"
			>
				<template v-slot:label>School Fees</template>
				<input
					:id="'#exp' + expenses.school_fees"
					v-model="expenses.school_fees"
					@keyup.87="
						expenses.school_fees = expenses.school_fees * 4.33
					"
					@keyup.70="
						expenses.school_fees = expenses.school_fees * 2.166
					"
					@keyup.81="
						expenses.school_fees = expenses.school_fees * 0.33
					"
					@keyup.89="
						expenses.school_fees = expenses.school_fees * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.child_care)"
			>
				<template v-slot:label>Child Care</template>
				<input
					:id="'#exp' + expenses.child_care"
					v-model="expenses.child_care"
					@keyup.87="expenses.child_care = expenses.child_care * 4.33"
					@keyup.70="
						expenses.child_care = expenses.child_care * 2.166
					"
					@keyup.81="expenses.child_care = expenses.child_care * 0.33"
					@keyup.89="
						expenses.child_care = expenses.child_care * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.books)"
			>
				<template v-slot:label>Books</template>
				<input
					:id="'#exp' + expenses.books"
					v-model="expenses.books"
					@keyup.87="expenses.books = expenses.books * 4.33"
					@keyup.70="expenses.books = expenses.books * 2.166"
					@keyup.81="expenses.books = expenses.books * 0.33"
					@keyup.89="expenses.books = expenses.books * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.uniforms)"
			>
				<template v-slot:label>Uniforms</template>
				<input
					:id="'#exp' + expenses.uniforms"
					v-model="expenses.uniforms"
					@keyup.87="expenses.uniforms = expenses.uniforms * 4.33"
					@keyup.70="expenses.uniforms = expenses.uniforms * 2.166"
					@keyup.81="expenses.uniforms = expenses.uniforms * 0.33"
					@keyup.89="expenses.uniforms = expenses.uniforms * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.nannies)"
			>
				<template v-slot:label>Nannies</template>
				<input
					:id="'#exp' + expenses.nannies"
					v-model="expenses.nannies"
					@keyup.87="expenses.nannies = expenses.nannies * 4.33"
					@keyup.70="expenses.nannies = expenses.nannies * 2.166"
					@keyup.81="expenses.nannies = expenses.nannies * 0.33"
					@keyup.89="expenses.nannies = expenses.nannies * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="
					copyClipboard('#exp' + expenses.child_support_maintenance)
				"
			>
				<template v-slot:label>Child Support</template>
				<input
					:id="'#exp' + expenses.child_support_maintenance"
					v-model="expenses.child_support_maintenance"
					@keyup.87="
						expenses.child_support_maintenance =
							expenses.child_support_maintenance * 4.33
					"
					@keyup.70="
						expenses.child_support_maintenance =
							expenses.child_support_maintenance * 2.166
					"
					@keyup.81="
						expenses.child_support_maintenance =
							expenses.child_support_maintenance * 0.33
					"
					@keyup.89="
						expenses.child_support_maintenance =
							expenses.child_support_maintenance * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Utilities & Subscriptions</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.water)"
			>
				<template v-slot:label>Water</template>
				<input
					:id="'#exp' + expenses.water"
					v-model="expenses.water"
					@keyup.87="expenses.water = expenses.water * 4.33"
					@keyup.70="expenses.water = expenses.water * 2.166"
					@keyup.81="expenses.water = expenses.water * 0.33"
					@keyup.89="expenses.water = expenses.water * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.gas)"
			>
				<template v-slot:label>Gas</template>
				<input
					:id="'#exp' + expenses.gas"
					v-model="expenses.gas"
					@keyup.87="expenses.gas = expenses.gas * 4.33"
					@keyup.70="expenses.gas = expenses.gas * 2.166"
					@keyup.81="expenses.gas = expenses.gas * 0.33"
					@keyup.89="expenses.gas = expenses.gas * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.electricity)"
			>
				<template v-slot:label>Electricity</template>
				<input
					:id="'#exp' + expenses.electricity"
					v-model="expenses.electricity"
					@keyup.87="
						expenses.electricity = expenses.electricity * 4.33
					"
					@keyup.70="
						expenses.electricity = expenses.electricity * 2.166
					"
					@keyup.81="
						expenses.electricity = expenses.electricity * 0.33
					"
					@keyup.89="
						expenses.electricity = expenses.electricity * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.mobile_phone)"
			>
				<template v-slot:label>Mobile Phone</template>
				<input
					:id="'#exp' + expenses.mobile_phone"
					v-model="expenses.mobile_phone"
					@keyup.87="
						expenses.mobile_phone = expenses.mobile_phone * 4.33
					"
					@keyup.70="
						expenses.mobile_phone = expenses.mobile_phone * 2.166
					"
					@keyup.81="
						expenses.mobile_phone = expenses.mobile_phone * 0.33
					"
					@keyup.89="
						expenses.mobile_phone = expenses.mobile_phone * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.home_phone)"
			>
				<template v-slot:label>Home Phone</template>
				<input
					:id="'#exp' + expenses.home_phone"
					v-model="expenses.home_phone"
					@keyup.87="expenses.home_phone = expenses.home_phone * 4.33"
					@keyup.70="
						expenses.home_phone = expenses.home_phone * 2.166
					"
					@keyup.81="expenses.home_phone = expenses.home_phone * 0.33"
					@keyup.89="
						expenses.home_phone = expenses.home_phone * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.internet)"
			>
				<template v-slot:label>Internet</template>
				<input
					:id="'#exp' + expenses.internet"
					v-model="expenses.internet"
					@keyup.87="expenses.internet = expenses.internet * 4.33"
					@keyup.70="expenses.internet = expenses.internet * 2.166"
					@keyup.81="expenses.internet = expenses.internet * 0.33"
					@keyup.89="expenses.internet = expenses.internet * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.pay_tv)"
			>
				<template v-slot:label>Pay TV</template>
				<input
					:id="'#exp' + expenses.pay_tv"
					v-model="expenses.pay_tv"
					@keyup.87="expenses.pay_tv = expenses.pay_tv * 4.33"
					@keyup.70="expenses.pay_tv = expenses.pay_tv * 2.166"
					@keyup.81="expenses.pay_tv = expenses.pay_tv * 0.33"
					@keyup.89="expenses.pay_tv = expenses.pay_tv * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.music_streaming)"
			>
				<template v-slot:label>Music Streaming</template>
				<input
					:id="'#exp' + expenses.music_streaming"
					v-model="expenses.music_streaming"
					@keyup.87="
						expenses.music_streaming =
							expenses.music_streaming * 4.33
					"
					@keyup.70="
						expenses.music_streaming =
							expenses.music_streaming * 2.166
					"
					@keyup.81="
						expenses.music_streaming =
							expenses.music_streaming * 0.33
					"
					@keyup.89="
						expenses.music_streaming =
							expenses.music_streaming * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.video_streaming)"
			>
				<template v-slot:label>Video Streaming</template>
				<input
					:id="'#exp' + expenses.video_streaming"
					v-model="expenses.video_streaming"
					@keyup.87="
						expenses.video_streaming =
							expenses.video_streaming * 4.33
					"
					@keyup.70="
						expenses.video_streaming =
							expenses.video_streaming * 2.166
					"
					@keyup.81="
						expenses.video_streaming =
							expenses.video_streaming * 0.33
					"
					@keyup.89="
						expenses.video_streaming =
							expenses.video_streaming * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Property Costs</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.council_rates)"
			>
				<template v-slot:label>Council Rates</template>
				<input
					:id="'#exp' + expenses.council_rates"
					v-model="expenses.council_rates"
					@keyup.87="
						expenses.council_rates = expenses.council_rates * 4.33
					"
					@keyup.70="
						expenses.council_rates = expenses.council_rates * 2.166
					"
					@keyup.81="
						expenses.council_rates = expenses.council_rates * 0.33
					"
					@keyup.89="
						expenses.council_rates = expenses.council_rates * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.body_corporate_fees)"
			>
				<template v-slot:label>Body Corporate Fees</template>
				<input
					:id="'#exp' + expenses.body_corporate_fees"
					v-model="expenses.body_corporate_fees"
					@keyup.87="
						expenses.body_corporate_fees =
							expenses.body_corporate_fees * 4.33
					"
					@keyup.70="
						expenses.body_corporate_fees =
							expenses.body_corporate_fees * 2.166
					"
					@keyup.81="
						expenses.body_corporate_fees =
							expenses.body_corporate_fees * 0.33
					"
					@keyup.89="
						expenses.body_corporate_fees =
							expenses.body_corporate_fees * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.taxes_and_levies)"
			>
				<template v-slot:label>Taxes & Levies</template>
				<input
					:id="'#exp' + expenses.taxes_and_levies"
					v-model="expenses.taxes_and_levies"
					@keyup.87="
						expenses.taxes_and_levies =
							expenses.taxes_and_levies * 4.33
					"
					@keyup.70="
						expenses.taxes_and_levies =
							expenses.taxes_and_levies * 2.166
					"
					@keyup.81="
						expenses.taxes_and_levies =
							expenses.taxes_and_levies * 0.33
					"
					@keyup.89="
						expenses.taxes_and_levies =
							expenses.taxes_and_levies * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.repairs_and_maintenance)"
			>
				<template v-slot:label>Repairs & Maint.</template>
				<input
					:id="'#exp' + expenses.repairs_and_maintenance"
					v-model="expenses.repairs_and_maintenance"
					@keyup.87="
						expenses.repairs_and_maintenance =
							expenses.repairs_and_maintenance * 4.33
					"
					@keyup.70="
						expenses.repairs_and_maintenance =
							expenses.repairs_and_maintenance * 2.166
					"
					@keyup.81="
						expenses.repairs_and_maintenance =
							expenses.repairs_and_maintenance * 0.33
					"
					@keyup.89="
						expenses.repairs_and_maintenance =
							expenses.repairs_and_maintenance * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.other_household_items)"
			>
				<template v-slot:label>Other Household Items</template>
				<input
					:id="'#exp' + expenses.other_household_items"
					v-model="expenses.other_household_items"
					@keyup.87="
						expenses.other_household_items =
							expenses.other_household_items * 4.33
					"
					@keyup.70="
						expenses.other_household_items =
							expenses.other_household_items * 2.166
					"
					@keyup.81="
						expenses.other_household_items =
							expenses.other_household_items * 0.33
					"
					@keyup.89="
						expenses.other_household_items =
							expenses.other_household_items * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Insurance</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.home_and_contents)"
			>
				<template v-slot:label>Home & Contents</template>
				<input
					:id="'#exp' + expenses.home_and_contents"
					v-model="expenses.home_and_contents"
					@keyup.87="
						expenses.home_and_contents =
							expenses.home_and_contents * 4.33
					"
					@keyup.70="
						expenses.home_and_contents =
							expenses.home_and_contents * 2.166
					"
					@keyup.81="
						expenses.home_and_contents =
							expenses.home_and_contents * 0.33
					"
					@keyup.89="
						expenses.home_and_contents =
							expenses.home_and_contents * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="
					copyClipboard('#exp' + expenses.private_health_insurance)
				"
			>
				<template v-slot:label>Private Health</template>
				<input
					:id="'#exp' + expenses.private_health_insurance"
					v-model="expenses.private_health_insurance"
					@keyup.87="
						expenses.private_health_insurance =
							expenses.private_health_insurance * 4.33
					"
					@keyup.70="
						expenses.private_health_insurance =
							expenses.private_health_insurance * 2.166
					"
					@keyup.81="
						expenses.private_health_insurance =
							expenses.private_health_insurance * 0.33
					"
					@keyup.89="
						expenses.private_health_insurance =
							expenses.private_health_insurance * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.life_insurance)"
			>
				<template v-slot:label>Life, Trauma & Income</template>
				<input
					:id="'#exp' + expenses.life_insurance"
					v-model="expenses.life_insurance"
					@keyup.87="
						expenses.life_insurance = expenses.life_insurance * 4.33
					"
					@keyup.70="
						expenses.life_insurance =
							expenses.life_insurance * 2.166
					"
					@keyup.81="
						expenses.life_insurance = expenses.life_insurance * 0.33
					"
					@keyup.89="
						expenses.life_insurance =
							expenses.life_insurance * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.motor_vehicle_insurance)"
			>
				<template v-slot:label>Motor Vehicle</template>
				<input
					:id="'#exp' + expenses.motor_vehicle_insurance"
					v-model="expenses.motor_vehicle_insurance"
					@keyup.87="
						expenses.motor_vehicle_insurance =
							expenses.motor_vehicle_insurance * 4.33
					"
					@keyup.70="
						expenses.motor_vehicle_insurance =
							expenses.motor_vehicle_insurance * 2.166
					"
					@keyup.81="
						expenses.motor_vehicle_insurance =
							expenses.motor_vehicle_insurance * 0.33
					"
					@keyup.89="
						expenses.motor_vehicle_insurance =
							expenses.motor_vehicle_insurance * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Transport Costs</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.fuel)"
			>
				<template v-slot:label>Fuel</template>
				<input
					:id="'#exp' + expenses.fuel"
					v-model="expenses.fuel"
					@keyup.87="expenses.fuel = expenses.fuel * 4.33"
					@keyup.70="expenses.fuel = expenses.fuel * 2.166"
					@keyup.81="expenses.fuel = expenses.fuel * 0.33"
					@keyup.89="expenses.fuel = expenses.fuel * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.servicing)"
			>
				<template v-slot:label>Servicing</template>
				<input
					:id="'#exp' + expenses.servicing"
					v-model="expenses.servicing"
					@keyup.87="expenses.servicing = expenses.servicing * 4.33"
					@keyup.70="expenses.servicing = expenses.servicing * 2.166"
					@keyup.81="expenses.servicing = expenses.servicing * 0.33"
					@keyup.89="expenses.servicing = expenses.servicing * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.public_transport)"
			>
				<template v-slot:label>Public Transport</template>
				<input
					:id="'#exp' + expenses.public_transport"
					v-model="expenses.public_transport"
					@keyup.87="
						expenses.public_transport =
							expenses.public_transport * 4.33
					"
					@keyup.70="
						expenses.public_transport =
							expenses.public_transport * 2.166
					"
					@keyup.81="
						expenses.public_transport =
							expenses.public_transport * 0.33
					"
					@keyup.89="
						expenses.public_transport =
							expenses.public_transport * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.parking_and_tolls)"
			>
				<template v-slot:label>Parking and Tolls</template>
				<input
					:id="'#exp' + expenses.parking_and_tolls"
					v-model="expenses.parking_and_tolls"
					@keyup.87="
						expenses.parking_and_tolls =
							expenses.parking_and_tolls * 4.33
					"
					@keyup.70="
						expenses.parking_and_tolls =
							expenses.parking_and_tolls * 2.166
					"
					@keyup.81="
						expenses.parking_and_tolls =
							expenses.parking_and_tolls * 0.33
					"
					@keyup.89="
						expenses.parking_and_tolls =
							expenses.parking_and_tolls * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Other Lifestyle Expenses</div>
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.entertainment)"
			>
				<template v-slot:label>Entertainment</template>
				<input
					:id="'#exp' + expenses.entertainment"
					v-model="expenses.entertainment"
					@keyup.87="
						expenses.entertainment = expenses.entertainment * 4.33
					"
					@keyup.70="
						expenses.entertainment = expenses.entertainment * 2.166
					"
					@keyup.81="
						expenses.entertainment = expenses.entertainment * 0.33
					"
					@keyup.89="
						expenses.entertainment = expenses.entertainment * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.holidays)"
			>
				<template v-slot:label>Holidays</template>
				<input
					:id="'#exp' + expenses.holidays"
					v-model="expenses.holidays"
					@keyup.87="expenses.holidays = expenses.holidays * 4.33"
					@keyup.70="expenses.holidays = expenses.holidays * 2.166"
					@keyup.81="expenses.holidays = expenses.holidays * 0.33"
					@keyup.89="expenses.holidays = expenses.holidays * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.sports)"
			>
				<template v-slot:label>Sports</template>
				<input
					:id="'#exp' + expenses.sports"
					v-model="expenses.sports"
					@keyup.87="expenses.sports = expenses.sports * 4.33"
					@keyup.70="expenses.sports = expenses.sports * 2.166"
					@keyup.81="expenses.sports = expenses.sports * 0.33"
					@keyup.89="expenses.sports = expenses.sports * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.alcohol)"
			>
				<template v-slot:label>Alcohol</template>
				<input
					:id="'#exp' + expenses.alcohol"
					v-model="expenses.alcohol"
					@keyup.87="expenses.alcohol = expenses.alcohol * 4.33"
					@keyup.70="expenses.alcohol = expenses.alcohol * 2.166"
					@keyup.81="expenses.alcohol = expenses.alcohol * 0.33"
					@keyup.89="expenses.alcohol = expenses.alcohol * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.tobacco)"
			>
				<template v-slot:label>Tobacco</template>
				<input
					:id="'#exp' + expenses.tobacco"
					v-model="expenses.tobacco"
					@keyup.87="expenses.tobacco = expenses.tobacco * 4.33"
					@keyup.70="expenses.tobacco = expenses.tobacco * 2.166"
					@keyup.81="expenses.tobacco = expenses.tobacco * 0.33"
					@keyup.89="expenses.tobacco = expenses.tobacco * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.gambling)"
			>
				<template v-slot:label>Gambling</template>
				<input
					:id="'#exp' + expenses.gambling"
					v-model="expenses.gambling"
					@keyup.87="expenses.gambling = expenses.gambling * 4.33"
					@keyup.70="expenses.gambling = expenses.gambling * 2.166"
					@keyup.81="expenses.gambling = expenses.gambling * 0.33"
					@keyup.89="expenses.gambling = expenses.gambling * 0.0833"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.restaurants)"
			>
				<template v-slot:label>Restaurants</template>
				<input
					:id="'#exp' + expenses.restaurants"
					v-model="expenses.restaurants"
					@keyup.87="
						expenses.restaurants = expenses.restaurants * 4.33
					"
					@keyup.70="
						expenses.restaurants = expenses.restaurants * 2.166
					"
					@keyup.81="
						expenses.restaurants = expenses.restaurants * 0.33
					"
					@keyup.89="
						expenses.restaurants = expenses.restaurants * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField
				class="w-1/4"
				@copy="copyClipboard('#exp' + expenses.memberships)"
			>
				<template v-slot:label>Memberships</template>
				<input
					:id="'#exp' + expenses.memberships"
					v-model="expenses.memberships"
					@keyup.87="
						expenses.memberships = expenses.memberships * 4.33
					"
					@keyup.70="
						expenses.memberships = expenses.memberships * 2.166
					"
					@keyup.81="
						expenses.memberships = expenses.memberships * 0.33
					"
					@keyup.89="
						expenses.memberships = expenses.memberships * 0.0833
					"
					@change="updateField"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";
	export default {
		name: "DomesticExpensesCard",
		components: {
			FormField,
		},
		props: {
			expenses: Object,
		},
		methods: {
			...mapActions(["updateField"]),
			copyClipboard(id) {
				let valueToCopy = document.getElementById(id);
				valueToCopy.setAttribute("type", "text");
				valueToCopy.select();
				try {
					document.execCommand("copy");
				} catch (err) {
					alert("Oops, unable to copy");
				}
			},
		},
	};
</script>

<style></style>
