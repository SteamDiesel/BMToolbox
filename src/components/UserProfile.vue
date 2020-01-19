<template>
	<div @keyup.17="hotkey()" class="w-full">
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
			<div class="mt-12 p-10">
				<p>
					When you save these details your personal and business information entered here will be stored with bdfi. <br>
					This information will be used to contact you for feeback and to communicate added fatures, system changes and updates. <br>
					By saving your details you agree to be contacted and have your information, including session and usage data, sent to bdfi on a regular basis. <br>
					Your client's application data is not stored on our network in the free version of this app. <br>
					For more information on how your data is managed in this app <a href="/about" class="hover:underline text-indigo-500 font-semibold">visit the about page.</a>
				</p>
			</div>
			<div class="flex justify-center">
				<button
					@click.prevent="saveDetails"
					class="bg-teal-500 font-semibold text-orange-100 hover:bg-teal-400 py-2 px-4 shadow-lg rounded-full"
				>Save All Changes</button>
			</div>
			<div class="mt-16 mx-4 rounded-lg border border-red-500 p-16">
				<h2 class="text-2xl font-semibold text-red-500">Danger Zone</h2>
				<p>Actions in here can't be reversed. Proceed with caution.</p>
				<div class="w-full flex justify-around items-center p-16">
					<button
						@click.prevent="clear"
						class="bg-red-500 font-semibold text-orange-100 hover:bg-red-600 p-2 shadow-lg rounded-full"
					>Delete all data</button>
					

				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex";
import ToggleSwitch from '@/components/buttons/ToggleSwitch.vue'
export default {
	name: 'UserProfile',
	// Author is Jason Lloyd Law
	// contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
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
		
		clear() {
			if(confirm('Are you sure you want to delete all local storage? There is no way to recover this data if it is deleted.')){
				localStorage.clear();
				window.console.log("local storage cleared");
			}
		},
		...mapMutations(["getPreferencesFromLocalStorage"]),
		...mapActions(['saveDetails'])
	},
	mounted() {}
};
</script>

<style>
</style>