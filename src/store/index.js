import Vue from "vue";
import Vuex from "vuex";
// import VueRouter from "vue-router";

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
			user_name: 'Anonymous User',
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
			sign_deposit: 500,
			further_deposit: 0,
			origination_fee: 990,
			brokerage: 0,
			custom_two: 0,
			custom_two_label: 'Custom Field 02',
			custom_three: 0,
			custom_three_label: 'Custom Field 03',
			lender_fee: 450,
			monthly_fee: 0,
			term: 60,
			apr: 6.99,
			rv: 0,
			rv_percent: 0,
			weekly_big: true,
			fort_big: false,
			monthly_big: false,
			is_saved: false,
		},

		loan_calc_history: [],
		applications: [
			{
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
						employers: [{
							current: true,
							employer: '',
							position: '',
							status: '',
							contact_name: '',
							contact_phone: '',
							address: '',
							notes: '',
							years: 0,
							months: 0,
							start_date: '',
							end_date: '',
						}],
					},
				],
				businesses: []
			},
			{
				people: [
					{
						title: 'Mr',
						first_name: 'Jason',
						alias: '',
						middle_names: '',
						surname: 'Law',
						mobile_phone: '0400 696 332',
						home_phone: '',
						work_phone: '',
						email_address: 'jason@bdfi.com.au',
						gender: 'male',
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
								address: '1 Eagle Street, Brisbane QLD 4000',
								years: 1,
								months: 6,
								status: 'Mortgage',
							},
							{
								address: 'Suite 2405, 24 Mary Street, Brisbane QLD 4000',
								years: 1,
								months: 6,
								status: 'Rented',
							},

						],
						employers: [{
							current: true,
							employer: '',
							position: '',
							status: '',
							contact_name: '',
							contact_phone: '',
							address: '',
							notes: '',
							years: 0,
							months: 0,
							start_date: '',
							end_date: '',
						}],
					},
				],
				businesses: []
			},
			
		],
		selected_application_index: 0,

		address: {
			address: '',
			years: 0,
			months: 0,
			status: '',
		},
		unsaved_changes: false
	},
	getters: {
		application: state => {
			return state.applications[state.selected_application_index]
		},
	},
	mutations: {
		selectApplication(state, index){
			state.selected_application_index = index

		},
		newApplication(state){
			var new_app = {
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
						employers: [{
							current: true,
							employer: '',
							position: '',
							status: '',
							contact_name: '',
							contact_phone: '',
							address: '',
							notes: '',
							years: 0,
							months: 0,
							start_date: '',
							end_date: '',
						}],
						properties:[],
						vehicles:[],
						credit_cards: [],
						other_loans: [],
						cash: [],
						other_assets:[],
						domestic_expenses:[],
					},
				],
				businesses: []
			}
			state.applications.unshift(new_app)
			var $index = state.applications.indexOf(new_app)
			state.selected_application_index = $index
		},
		addPersonToApplication(state) {
			var ar = state.applications[state.selected_application_index].people
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
				employers: [
					{
						current: true,
						employer: '',
						position: '',
						status: '',
						industry: '',
						contact_name: '',
						contact_phone: '',
						address: '',
						notes: '',
						wage: '',
						commission: '',
						bonus: '',
						allowance: '',
						years: 0,
						months: 0,
						start_date: '',
						end_date: '',
					}
				],
				properties:[],
				vehicles:[],
				credit_cards: [],
				other_loans: [],
				cash: [],
				other_assets:[],
				domestic_expenses:[],
			}

			Object.assign(empty_person, state.person)
			ar.push(empty_person)
		},
		removePersonFromApplication(state, person) {
			if (confirm('Are you sure you want to permanently remove this person?')) {
				var ar = state.applications[state.selected_application_index].people
				ar.splice(ar.indexOf(person), 1)
			}
		},
		addEmployerToPerson(state, payload){
			var new_employer = {
				current: true,
				employer: '',
				position: '',
				status: '',
				contact_name: '',
				contact_phone: '',
				address: '',
				notes: '',
				years: 0,
				months: 0,
				start_date: '',
				end_date: '',
			}
			var employer_array = payload.employers
			employer_array.push(new_employer)
			payload.adr_count++
		},
		removeEmployerFromPerson(state, payload){
			var person = state.applications[state.selected_application_index].people[payload.person_index]
			person.employers.splice(payload.employer_index, 1)
			person.adr_count--
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
			var person = state.applications[state.selected_application_index].people[payload.person_index]
			person.addresses.splice(payload.address_index, 1)
			person.adr_count--
		},
		addBusinessToApplication() {
			window.alert('not built yet')
		},
		setUserPreferencesFromLocal(state) {
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
			state.user_preferences = JSON.parse(localStorage.getItem('user_preferences'));
			window.console.log('setting user preferences from browser local storage.')
		},
		saveApplicationsToLocal(state){
			try {
				localStorage.setItem('applications', JSON.stringify(state.applications));
				window.console.log('Applications data is saved to local storage.')
			} catch {
				window.console.log('Unable to save applications to local storage.')
				alert('Unable to save applications to local storage.')
			}
		},
		getApplicationsFromLocal(state){
			try {
				state.applications = JSON.parse(localStorage.getItem('applications'));
				window.console.log('Retrieved Applications data from browser local storage.')
			} catch {
				window.console.log('Unable to retrieve Applications data from browser local storage.')
				alert('Unable to retrieve Applications data from your browser local storage.')
			}
		},
		deleteApplication(state, index){
			state.applications.splice(index, 1)
		},
		addPropertyToPerson(state, payload){
			var new_property = {
				description: '',
				market_value: '',
				rental_income: '',
				shared: false,
				first_mortgage_lender: '',
				first_mortgage_balance: '',
				first_mortgage_payment: '',
				second_mortgage_lender: '',
				second_mortgage_balance: '',
				second_mortgage_payment: '',
			}
			var property_array = payload.properties
			property_array.push(new_property)
			payload.adr_count++
		},
		removePropertyFromPerson(state, payload){
			var person = state.applications[state.selected_application_index]
			.people[payload.person_index]
			person.properties[payload.property_index].shared = false
			person.properties.splice(payload.property_index, 1)
			person.adr_count--
		},
		linkPropertyToNextPerson(state, payload){
			var next = payload.person_index + 1
			var person = state.applications[state.selected_application_index]
			.people[next]
			person.properties.push(payload.property)
			payload.property.shared = true
		},
		addVehicleToPerson(state, payload){
			var new_vehicle = {
				description: '',
				is_trading: true,
				market_value: '',
				trade_value: '',
				finance_lender: '',
				finance_start_date: '',
				finance_balance: '',
				finance_payment: '',
				shared: false,
			}
			var vehicle_array = payload.vehicles
			vehicle_array.push(new_vehicle)
			payload.adr_count++
		},
		removeVehicleFromPerson(state, payload){
			var person = state.applications[state.selected_application_index]
			.people[payload.person_index]
			person.vehicles[payload.vehicle_index].shared = false
			person.vehicles.splice(payload.vehicle_index, 1)
			person.adr_count--
		},
		linkVehicleToNextPerson(state, payload){
			var next = payload.person_index + 1
			var person = state.applications[state.selected_application_index]
			.people[next]
			person.vehicles.push(payload.vehicle)
			payload.vehicle.shared = true
		}
	},
	actions: {
		initialize({commit, dispatch}) {
			var prefs = localStorage.getItem('user_preferences');
			if (prefs) {
				commit('setUserPreferencesFromLocal')
			}
			var apps = localStorage.getItem('applications')
			if(apps){
				window.console.log('getting apps')
				commit('getApplicationsFromLocal')
			}
			dispatch('saveApplicationsLoop')
		},
		addEmployerToPerson({commit}, payload){
			commit('addEmployerToPerson', payload)
		},
		removeEmployerFromPerson({commit, dispatch}, payload){
			if (confirm('Are you sure you want to permanently remove this employer?')) {
				commit('removeEmployerFromPerson', payload)
				dispatch('saveApplications')
			}
		},
		removeAddressFromPerson({commit, dispatch}, payload){
			if (confirm('Are you sure you want to permanently remove this address?')) {
				commit('removeAddressFromPerson', payload)
				dispatch('saveApplications')
			}
		},
		addAddressToPerson({commit, dispatch}, payload){
			commit('addAddressToPerson', payload)
			dispatch('saveApplications')
		},
		deleteApplication({commit, dispatch}, index){
			if (confirm('Are you sure you want to permanently remove this application?')) {
				commit('deleteApplication', index)
				dispatch('saveApplications')
			}
		},
		saveApplicationsLoop({commit, dispatch}){
			setTimeout(() => {
				commit('saveApplicationsToLocal')

				dispatch('saveApplicationsLoop')
			}, 58000)
		},
		saveApplications({commit}){
			commit('saveApplicationsToLocal')
		},
		removePropertyFromPerson({commit, dispatch}, payload){
			if (confirm('Are you sure you want to permanently remove this property?')) {
				commit('removePropertyFromPerson', payload)
				dispatch('saveApplications')
			}
		},
		addPropertyToPerson({commit, dispatch}, person){
			commit('addPropertyToPerson', person)
			dispatch('saveApplications')
		},
		linkPropertyToNextPerson({commit, dispatch}, payload){
			commit('linkPropertyToNextPerson', payload)
			dispatch('saveApplications')
		},
		removeVehicleFromPerson({commit, dispatch}, payload){
			if (confirm('Are you sure you want to permanently remove this vehicle?')) {
				commit('removeVehicleFromPerson', payload)
				dispatch('saveApplications')
			}
		},
		addVehicleToPerson({commit, dispatch}, person){
			commit('addVehicleToPerson', person)
			dispatch('saveApplications')
		},
		linkVehicleToNextPerson({commit, dispatch}, payload){
			commit('linkVehicleToNextPerson', payload)
			dispatch('saveApplications')
		},
	},
	modules: {}
});
