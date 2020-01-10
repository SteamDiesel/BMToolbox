import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loan_calculator: {
			name: "",
			vehicle_price: 30000,
			custom_one: 0,
			custom_one_label: 'Custom Field 01',
			trade_value: 0,
			trade_payout: 0,
			sign_deposit: 2000,
			further_deposit: 0,
			origination_fee: 975,
			brokerage: 0,
			custom_two: 0,
			custom_two_label: 'Custom Field 02',
			custom_three: 0,
			custom_three_label: 'Custom Field 03',
			lender_fee: 398,
			monthly_fee: 0,
			term: 48,
			apr: 5.99,
			rv: 0,
			rv_percent: 0,
			weekly_big: true,
			fort_big: false,
			monthly_big: false,
			hidden: false,
			is_saved: false,
		},
		user_preferences: {
			user_name: 'Anonymous',
			user_role: '',
			user_email: '',
			user_phone: '',

			user_business_name: 'lite.bdfi.app',
			user_business_address: '',
			user_brand_image_url: '',
			user_email_sign_off: '',
			user_email_signature_image_url: '',

			vehicle_price: 30000,
			custom_one: 0,
			custom_one_label: 'Custom Field 01',
			trade_value: 0,
			trade_payout: 0,
			sign_deposit: 2000,
			further_deposit: 0,
			origination_fee: 975,
			brokerage: 0,
			custom_two: 0,
			custom_two_label: 'Custom Field 02',
			custom_three: 0,
			custom_three_label: 'Custom Field 03',
			lender_fee: 398,
			monthly_fee: 0,
			term: 48,
			apr: 5.99,
			rv: 0,
			rv_percent: 0,
			weekly_big: true,
			fort_big: false,
			monthly_big: false,
			is_saved: false,
		},

		loan_calc_history: [],
		application: {
			people: [
				{
					title: '',
					first_name: '',
					alias: '',
					middle_names: '',
					surname: '',
					mobile_phone: '',
					home_phone: '',
					work_phone: '',
					email_address: '',
					gender: '',
					date_of_birth: '',
					abn_established_date: '',
					abn_gst_date: '',
					abn: '',
					licence_number: '',
					licence_state: '',
					licence_card: '',
					licence_expiry: '',
					passport_number: '',
					passport_country: '',
					passport_expiry: '',
					marital_status: '',
					partner_id: '',
					visa_status: '',
					visa_class: '',
					visa_expiry: '',
					adr_count: 0,
					addresses: [
						{
							address: '',
							years: 0,
							months: 0,
							status: '',
						}
					],
					employers: [],
				},
			],
			businesses: []
		},

		address: {
			address: '',
			years: 0,
			months: 0,
			status: '',
		},


	},
	mutations: {
		addPersonToApplication(state) {
			var ar = state.application.people
			var empty_person = {
				title: '',
				first_name: '',
				alias: '',
				middle_names: '',
				surname: '',
				mobile_phone: '',
				home_phone: '',
				work_phone: '',
				email_address: '',
				gender: '',
				date_of_birth: '',
				abn_established_date: '',
				abn_gst_date: '',
				abn: '',
				licence_number: '',
				licence_state: '',
				licence_card: '',
				licence_expiry: '',
				passport_number: '',
				passport_country: '',
				passport_expiry: '',
				marital_status: '',
				partner_id: '',
				visa_status: '',
				visa_class: '',
				visa_expiry: '',
				adr_count: 0,
				addresses: [
					{
						address: '',
						years: 0,
						months: 0,
						status: '',
					}
				],
				employers: [],
			}

			Object.assign(empty_person, state.person)
			ar.push(empty_person)
		},
		removePersonFromApplication(state, person) {
			if (confirm('Are you sure you want to permanently remove this person?')) {
				var ar = state.application.people
				window.console.log(ar.indexOf(person))
				ar.splice(ar.indexOf(person), 1)
			}
		},
		addAddressToPerson(state, person) {
			var new_address = {}
			if (person.addresses) {
				var address_array = person.addresses
				Object.assign(new_address, state.address)
				address_array.push(new_address)
				person.adr_count++
			} else {
				person.addresses = []
				Object.assign(new_address, state.address)
				person.addresses.push(new_address)
				person.adr_count++
			}
		},
		removeAddressFromPerson(state, payload) {
			if (confirm('Are your sure you want to permanently remove this address?')) {
				window.console.log(payload)
				var person = state.application.people[payload.person_index]
				person.addresses.splice(payload.address_index, 1)
				person.adr_count--
			}
		},
		addBusinessToApplication() {
			window.alert('not built yet')
		},
		initialize(state) {
			var prefs = localStorage.getItem('user_preferences');
			if (prefs) {
				state.user_preferences = JSON.parse(localStorage.getItem('user_preferences'));
				state.loan_calculator.vehicle_price = state.user_preferences.vehicle_price;
				state.loan_calculator.custom_one = state.user_preferences.custom_one;
				state.loan_calculator.custom_one_label = state.user_preferences.custom_one_label;
				state.loan_calculator.trade_value = state.user_preferences.trade_value;
				state.loan_calculator.trade_payout = state.user_preferences.trade_payout;
				state.loan_calculator.sign_deposit = state.user_preferences.sign_deposit;
				state.loan_calculator.further_deposit = state.user_preferences.further_deposit;
				state.loan_calculator.origination_fee = state.user_preferences.origination_fee;
				state.loan_calculator.brokerage = state.user_preferences.brokerage;
				state.loan_calculator.custom_two = state.user_preferences.custom_two;
				state.loan_calculator.custom_two_label = state.user_preferences.custom_two_label;
				state.loan_calculator.custom_three = state.user_preferences.custom_three;
				state.loan_calculator.custom_three_label = state.user_preferences.custom_three_label;
				state.loan_calculator.lender_fee = state.user_preferences.lender_fee;
				state.loan_calculator.monthly_fee = state.user_preferences.monthly_fee;
				state.loan_calculator.term = state.user_preferences.term;
				state.loan_calculator.apr = state.user_preferences.apr;
				state.loan_calculator.rv = state.user_preferences.rv;
				state.loan_calculator.rv_percent = state.user_preferences.rv_percent;
				state.loan_calculator.weekly_big = state.user_preferences.weekly_big;
				state.loan_calculator.fort_big = state.user_preferences.fort_big;
				state.loan_calculator.monthly_big = state.user_preferences.monthly_big;
				state.loan_calculator.hidden = state.user_preferences.hidden;
				state.loan_calculator.is_saved = state.user_preferences.is_saved;

			}

		},
		pushLoanToHistory(state, payload) {
			var loan = {};
			Object.assign(loan, state.loan_calculator);
			loan.weekly = payload.weekly;
			loan.fortnightly = payload.fortnightly;
			loan.monthly = payload.monthly;
			state.loan_calc_history.unshift(loan);
			state.loan_calculator.is_saved = true;
		},
		savePreferences(state) {
			localStorage.setItem('user_preferences', JSON.stringify(state.user_preferences));
			window.console.log('User preferences saved to the computers local storage in browser.')
		},
		getPreferencesFromLocalStorage(state) {
			window.console.log('setting user preferences from browser local storage.')
			state.user_preferences = JSON.parse(localStorage.getItem('user_preferences'));
		}
	},
	actions: {},
	modules: {}
});
