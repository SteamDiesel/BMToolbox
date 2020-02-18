<template>
	<div class="w-full">
		<div>
			<div class="sm:flex sm:justify-start mx-16 sm:mx-0">
				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Name</label>
						<input
							v-model="user_preferences.user_name"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Role</label>
						<input
							v-model="user_preferences.user_role"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>

					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Phone</label>
						<input
							v-model="user_preferences.user_phone"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Email</label>
						<input
							v-model="user_preferences.user_email"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
				</div>

				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Business Name</label>
						<input
							v-model="user_preferences.user_business_name"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Your Business Address</label>
						<input
							v-model="user_preferences.user_business_address"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>

					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Brand Image URL</label>
						<input
							v-model="user_preferences.user_brand_image_url"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Email Image URL</label>
						<input
							v-model="user_preferences.user_email_signature_image_url"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Email Sign-off</label>
						<input
							v-model="user_preferences.user_email_sign_off"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					

				</div>
				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Show Copy Button</label>
						<ToggleSwitch
						@toggle="user_preferences.show_copy_button = !user_preferences.show_copy_button"
						:value="user_preferences.show_copy_button"
						:is_true="'on'"
						:is_false="'off'"
						/>
					</div>
					
				
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Confirm Delete Prompts</label>
						<ToggleSwitch
						@toggle="user_preferences.require_confirmation_prompts = !user_preferences.require_confirmation_prompts"
						:value="user_preferences.require_confirmation_prompts"
						:is_true="'on'"
						:is_false="'off'"
						/>
					</div>
					
				</div>
			</div>
			<div class="sm:flex sm:justify-center mx-16 sm:mx-0 mt-12">
				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Vehicle Price</label>
						<input
							v-model="user_preferences.vehicle_price"
							type="number"
							step="500"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom Field 1</label>
						<input
							v-model="user_preferences.custom_one"
							type="number"
							step="100"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom Field Label 1</label>
						<input
							v-model="user_preferences.custom_one_label"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Trade Value</label>
						<input
							v-model="user_preferences.trade_value"
							type="number"
							step="500"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Trade Payout</label>
						<input
							v-model="user_preferences.trade_payout"
							type="number"
							step="500"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Initial Deposit</label>
						<input
							v-model="user_preferences.sign_deposit"
							type="number"
							step="500"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Further Deposit</label>

						<input
							v-model="user_preferences.further_deposit"
							type="number"
							step="500"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
				</div>
				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Origination Fee</label>
						<input
							v-model="user_preferences.origination_fee"
							type="number"
							step="110"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Lender Fee</label>
						<input
							v-model="user_preferences.lender_fee"
							type="number"
							step="50"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom Field 2</label>
						<input
							v-model="user_preferences.custom_two"
							type="number"
							step="100"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>

					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom Field Label 2</label>
						<input
							v-model="user_preferences.custom_two_label"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>

					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom Field 3</label>
						<input
							v-model="user_preferences.custom_three"
							type="number"
							step="100"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Custom field Label 3</label>
						<input
							v-model="user_preferences.custom_three_label"
							type="text"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Brokerage</label>
						<input
							v-model="user_preferences.brokerage"
							type="number"
							step="110"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Monthly Fee</label>
						<input
							v-model="user_preferences.monthly_fee"
							type="number"
							step="1"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
				</div>
				<div class="sm:w-1/3">
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Term (months)</label>
						<input
							v-model="user_preferences.term"
							type="number"
							step="12"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">A.P.R.</label>
						<input
							v-model="user_preferences.apr"
							type="number"
							step="0.1"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
					<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
						<label class="font-semibold whitespace-no-wrap">Residual %</label>
						<input
							v-model="user_preferences.rv_percent"
							type="number"
							step="5"
							class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						/>
					</div>
				</div>
			</div>
			
			<div class="flex justify-center">
				<button
					@click.prevent="saveUserPreferences"
					class="bg-teal-500 font-semibold text-orange-100 hover:bg-teal-400 py-2 px-4 shadow-lg rounded-full"
				>Save All Changes</button>
			</div>
			
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex";
import ToggleSwitch from '@/components/buttons/ToggleSwitch.vue'
export default {
	name: 'UserProfile',
	components:{
		ToggleSwitch
	},
	data() {
		return {};
	},
	computed: {
		...mapState(["user_preferences"])
	},
	methods: {

		...mapMutations(["getPreferencesFromLocalStorage"]),
		...mapActions(['saveUserPreferences'])
	},
	mounted() {}
};
</script>

<style>
</style>