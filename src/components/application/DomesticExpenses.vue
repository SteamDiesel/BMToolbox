<template>
	<div class="hover:bg-blue-100">
		<div class="font-semibold mt-2">General</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.groceries)">
				<template v-slot:label>Groceries</template>
				<input
					:id="'#exp'+expenses.groceries"
					v-model="expenses.groceries"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.toiletries)">
				<template v-slot:label>Toiletries</template>
				<input
					:id="'#exp'+expenses.toiletries"
					v-model="expenses.toiletries"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.clothing)">
				<template v-slot:label>Clothing</template>
				<input
					:id="'#exp'+expenses.clothing"
					v-model="expenses.clothing"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<div class="w-1/4 flex justify-around items-center">
				<slot></slot>
			</div>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.footwear)">
				<template v-slot:label>Footwear</template>
				<input
					:id="'#exp'+expenses.footwear"
					v-model="expenses.footwear"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.pet_care)">
				<template v-slot:label>Pet Care</template>
				<input
					:id="'#exp'+expenses.pet_care"
					v-model="expenses.pet_care"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.doctor)">
				<template v-slot:label>Doctor</template>
				<input
					:id="'#exp'+expenses.doctor"
					v-model="expenses.doctor"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.dentist)">
				<template v-slot:label>Dentist</template>
				<input
					:id="'#exp'+expenses.dentist"
					v-model="expenses.dentist"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.medicine)">
				<template v-slot:label>Medicine</template>
				<input
					:id="'#exp'+expenses.medicine"
					v-model="expenses.medicine"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>

		<div class="font-semibold mt-2">Children Expenses</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.school_fees)">
				<template v-slot:label>School Fees</template>
				<input
					:id="'#exp'+expenses.school_fees"
					v-model="expenses.school_fees"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.child_care)">
				<template v-slot:label>Child Care</template>
				<input
					:id="'#exp'+expenses.child_care"
					v-model="expenses.child_care"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.books)">
				<template v-slot:label>Books</template>
				<input
					:id="'#exp'+expenses.books"
					v-model="expenses.books"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.uniforms)">
				<template v-slot:label>Uniforms</template>
				<input
					:id="'#exp'+expenses.uniforms"
					v-model="expenses.uniforms"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.nannies)">
				<template v-slot:label>Nannies</template>
				<input
					:id="'#exp'+expenses.nannies"
					v-model="expenses.nannies"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.child_support_maintenance)">
				<template v-slot:label>Child Support</template>
				<input
					:id="'#exp'+expenses.child_support_maintenance"
					v-model="expenses.child_support_maintenance"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Utilities & Subscriptions</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.water)">
				<template v-slot:label>Water</template>
				<input
					:id="'#exp'+expenses.water"
					v-model="expenses.water"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.gas)">
				<template v-slot:label>Gas</template>
				<input
					:id="'#exp'+expenses.gas"
					v-model="expenses.gas"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.electricity)">
				<template v-slot:label>Electricity</template>
				<input
					:id="'#exp'+expenses.electricity"
					v-model="expenses.electricity"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.mobile_phone)">
				<template v-slot:label>Mobile Phone</template>
				<input
					:id="'#exp'+expenses.mobile_phone"
					v-model="expenses.mobile_phone"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.home_phone)">
				<template v-slot:label>Home Phone</template>
				<input
					:id="'#exp'+expenses.home_phone"
					v-model="expenses.home_phone"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.internet)">
				<template v-slot:label>Internet</template>
				<input
					:id="'#exp'+expenses.internet"
					v-model="expenses.internet"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.pay_tv)">
				<template v-slot:label>Pay TV</template>
				<input
					:id="'#exp'+expenses.pay_tv"
					v-model="expenses.pay_tv"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.music_streaming)">
				<template v-slot:label>Music Streaming</template>
				<input
					:id="'#exp'+expenses.music_streaming"
					v-model="expenses.music_streaming"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.video_streaming)">
				<template v-slot:label>Video Streaming</template>
				<input
					:id="'#exp'+expenses.video_streaming"
					v-model="expenses.video_streaming"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
	</div>
		<div class="font-semibold mt-2">Property Costs</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.council_rates)">
				<template v-slot:label>Council Rates</template>
				<input
					:id="'#exp'+expenses.council_rates"
					v-model="expenses.council_rates"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.body_corporate_fees)">
				<template v-slot:label>Body Corporate Fees</template>
				<input
					:id="'#exp'+expenses.body_corporate_fees"
					v-model="expenses.body_corporate_fees"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.taxes_and_levies)">
				<template v-slot:label>Taxes & Levies</template>
				<input
					:id="'#exp'+expenses.taxes_and_levies"
					v-model="expenses.taxes_and_levies"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.repairs_and_maintenance)">
				<template v-slot:label>Repairs & Maint.</template>
				<input
					:id="'#exp'+expenses.repairs_and_maintenance"
					v-model="expenses.repairs_and_maintenance"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.other_household_items)">
				<template v-slot:label>Other Household Items</template>
				<input
					:id="'#exp'+expenses.other_household_items"
					v-model="expenses.other_household_items"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Insurance</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.home_and_contents)">
				<template v-slot:label>Home & Contents</template>
				<input
					:id="'#exp'+expenses.home_and_contents"
					v-model="expenses.home_and_contents"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.private_health_insurance)">
				<template v-slot:label>Private Health</template>
				<input
					:id="'#exp'+expenses.private_health_insurance"
					v-model="expenses.private_health_insurance"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.life_insurance)">
				<template v-slot:label>Life, Trauma & Income</template>
				<input
					:id="'#exp'+expenses.life_insurance"
					v-model="expenses.life_insurance"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.motor_vehicle_insurance)">
				<template v-slot:label>Motor Vehicle</template>
				<input
					:id="'#exp'+expenses.motor_vehicle_insurance"
					v-model="expenses.motor_vehicle_insurance"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Transport Costs</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.fuel)">
				<template v-slot:label>Fuel</template>
				<input
					:id="'#exp'+expenses.fuel"
					v-model="expenses.fuel"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.servicing)">
				<template v-slot:label>Servicing</template>
				<input
					:id="'#exp'+expenses.servicing"
					v-model="expenses.servicing"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.public_transport)">
				<template v-slot:label>Public Transport</template>
				<input
					:id="'#exp'+expenses.public_transport"
					v-model="expenses.public_transport"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.parking_and_tolls)">
				<template v-slot:label>Parking and Tolls</template>
				<input
					:id="'#exp'+expenses.parking_and_tolls"
					v-model="expenses.parking_and_tolls"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>
		</div>
		<div class="font-semibold mt-2">Other Lifestyle Expenses</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.entertainment)">
				<template v-slot:label>Entertainment</template>
				<input
					:id="'#exp'+expenses.entertainment"
					v-model="expenses.entertainment"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.holidays)">
				<template v-slot:label>Holidays</template>
				<input
					:id="'#exp'+expenses.holidays"
					v-model="expenses.holidays"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.sports)">
				<template v-slot:label>Sports</template>
				<input
					:id="'#exp'+expenses.sports"
					v-model="expenses.sports"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.alcohol)">
				<template v-slot:label>Alcohol</template>
				<input
					:id="'#exp'+expenses.alcohol"
					v-model="expenses.alcohol"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.tobacco)">
				<template v-slot:label>Tobacco</template>
				<input
					:id="'#exp'+expenses.tobacco"
					v-model="expenses.tobacco"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.gambling)">
				<template v-slot:label>Gambling</template>
				<input
					:id="'#exp'+expenses.gambling"
					v-model="expenses.gambling"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.restaurants)">
				<template v-slot:label>Restaurants</template>
				<input
					:id="'#exp'+expenses.restaurants"
					v-model="expenses.restaurants"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>

			<FormField class="w-1/4" @copy="copyClipboard('#exp'+expenses.memberships)">
				<template v-slot:label>Memberships</template>
				<input
					:id="'#exp'+expenses.memberships"
					v-model="expenses.memberships"
					@change="saveApplicationsToLocal"
					class="form-input text-center"
					type="number"
				/>
			</FormField>


		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import FormField from "@/components/application/FormField.vue";
export default {
	name: "DomesticExpensesCard",
	components: {
		FormField
	},
	props: {
		expenses: Object
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
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