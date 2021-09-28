import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";
// import axios from "axios";
// import moment from "moment";
import auth from "./modules/auth";
import env from "./modules/environment";
// import localdb from "./modules/localdb";
import tasksmodule from "./modules/tasks";
// import VueRouter from "vue-router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		system: {},
		show_vehicle: false,
		show_loan: true,
		show_applicants: false,
		show_businesses: false,
		show_history: false,
		contact_log_types: [
			"Called",
			"SMS Sent",
			"SMS Received",
			"Email Sent",
			"Email Received",
			"Face to Face",
		],

		app_roles: ["Borrower", "Non-Borrower", "Guarantor"],
		loan_calculator: {
			name: "",
			vehicle_price: 30000,
			custom_one: 0,
			custom_one_label: "Custom Field 01",
			trade_value: 0,
			trade_payout: 0,
			sign_deposit: 500,
			further_deposit: 0,
			origination_fee: 990,
			brokerage: 0,
			custom_two: 0,
			custom_two_label: "Custom Field 02",
			custom_three: 0,
			custom_three_label: "Custom Field 03",
			lender_fee: 450,
			monthly_fee: 0,
			term: 60,
			apr: 7.9,
			rv: 0,
			rv_percent: 0,
			weekly_big: true,
			fort_big: false,
			monthly_big: false,
			hidden: false,
			is_saved: false,
		},
		user_preferences: {
			// version 0 to version 1 change: added version number removed session uuid
			session_uuid: "",
			user_name: "Anonymous",
			user_role: "",
			user_email: "",
			user_phone: "",

			user_business_name: "lite.bdfi.app",
			user_business_address: "",
			user_brand_image_url: "",
			user_email_sign_off: "",
			user_email_signature_image_url: "",
			require_confirmation_prompts: true,
			show_copy_button: true,
			app_statuses: [
				{ value: "Lead", color: "#f7fafc" },
				{ value: "Application", color: "#f7fafc" },
				{ value: "Submitted", color: "#f7fafc" },
				{ value: "Approved", color: "#48bb78" },
				{ value: "Docs Out", color: "#f7fafc" },
				{ value: "Settlement", color: "#f7fafc" },
				{ value: "Settled", color: "#4299e1" },
				{ value: "Declined", color: "#a0aec0" },
				{ value: "Withdrawn", color: "#a0aec0" },
			],
			vehicle_price: 30000,
			custom_one: 0,
			custom_one_label: "Custom Field 01",
			trade_value: 0,
			trade_payout: 0,
			sign_deposit: 500,
			further_deposit: 0,
			origination_fee: 990,
			brokerage: 0,
			custom_two: 0,
			custom_two_label: "Custom Field 02",
			custom_three: 0,
			custom_three_label: "Custom Field 03",
			lender_fee: 450,
			monthly_fee: 0,
			term: 60,
			apr: 7.9,
			rv: 0,
			rv_percent: 0,
			weekly_big: true,
			fort_big: false,
			monthly_big: false,
			is_saved: false,
		},

		loan_calc_history: [],
		applications: [],

		history: [],
		// archived_applications: [],
		application: {
			// Created in mutation
		},
		selected_application_index: 0,
		person: {
			title: "",
			first_name: "",
			alias: "",
			middle_names: "",
			surname: "",
			mobile_phone: "",
			home_phone: "",
			work_phone: "",
			email_address: "",
			gender: "",
			date_of_birth: "",
			abn_established_date: "",
			abn_gst_date: "",
			abn: "",
			licence_number: "",
			licence_state: "",
			licence_card: "",
			licence_expiry: "",
			passport_number: "",
			passport_country: "",
			passport_expiry: "",
			marital_status: "",
			partner_id: "",
			visa_status: "",
			visa_class: "",
			visa_expiry: "",
			adr_count: 0,
			kids: [],
			addresses: [],
			employers: [],
			properties: [],
			vehicles: [],
			credit_cards: [],
			other_loans: [],
			other_assets: [],
			other_income: [],
			domestic_expenses: [],
			credit_defaults: [],
			court_judgements: [],
			bankruptcies: [],
		},
		kid: {
			age: "",
			shared: false,
		},
		address: {
			address: "",
			years: 0,
			months: 0,
			status: "",
			rent: "",
			board: "",
			shared: false,
		},
		property: {
			description: "",
			market_value: "",
			rental_income: "",
			shared: false,
			first_mortgage_lender: "",
			first_mortgage_balance: "",
			first_mortgage_payment: "",
			second_mortgage_lender: "",
			second_mortgage_balance: "",
			second_mortgage_payment: "",
		},
		vehicle: {
			description: "",
			is_trading: true,
			market_value: "",
			trade_value: "",
			finance_lender: "",
			finance_start_date: "",
			finance_balance: "",
			finance_payment: "",
			shared: false,
		},
		employer: {
			current: true,
			employer: "",
			position: "",
			status: "",
			contact_name: "",
			contact_phone: "",
			address: "",
			notes: "",
			years: 0,
			months: 0,
			start_date: "",
			end_date: "",
			net_monthly_income: "",
			payslip_date: "",
			payslip_start_date: "",
			payslip_gross_total_ytd: "",
			payslip_gross_wages_ytd: "",
			payslip_gross_commission_ytd: "",
			payslip_gross_allowance_ytd: "",
			payslip_gross_overtime_ytd: "",
			payslip_tax_ytd: "",
			payslip_net_ytd: "",
		},
		credit_card: {
			lender: "",
			credit_limit: "",
			balance: "",
			monthly_payment: "",
			shared: false,
		},
		other_loan: {
			lender: "",
			borrow_amount: "",
			current_balance: "",
			monthly_payment: "",
			start_date: "",
			term: "",
			refinance: false,
			apr: "",
			shared: false,
		},
		other_asset: {
			description: "",
			value: "",
			shared: "",
		},
		domestic_expenses: {
			groceries: "",
			toiletries: "",
			clothing: "",
			footwear: "",
			pet_care: "",
			doctor: "",
			dentist: "",
			medicine: "",

			school_fees: "",
			child_care: "",
			books: "",
			uniforms: "",
			nannies: "",

			water: "",
			gas: "",
			electricity: "",
			mobile_phone: "",
			home_phone: "",
			internet: "",
			pay_tv: "",
			music_streaming: "",
			video_streaming: "",
			council_rates: "",
			body_corporate_fees: "",
			taxes_and_levies: "",
			repairs_and_maintenance: "",
			other_household_items: "",

			home_and_contents: "",
			private_health_insurance: "",
			life_insurance: "",
			motor_vehicle_insurance: "",

			fuel: "",
			servicing: "",
			public_transport: "",
			parking_and_tolls: "",
			entertainment: "",
			holidays: "",
			sports: "",
			alcohol: "",
			tobacco: "",
			gambling: "",
			restaurants: "",
			memberships: "",
			child_support_maintenance: "",
		},
		credit_default: {
			date_listed: "",
			last_updated: "",
			original_creditor: "",
			current_creditor: "",
			amount_listed: "",
			current_balance: "",
			monthly_payment: "",
			status: "",
			reason: "",
			shared: false,
		},
		court_judgement: {
			date_listed: "",
			last_updated: "",
			original_creditor: "",
			current_creditor: "",
			amount_listed: "",
			current_balance: "",
			monthly_payment: "",
			status: "",
			reason: "",
			shared: false,
		},
		bankruptcy: {
			type: "",
			status: "",
			start_date: "",
			discharge_date: "",
			term: "",
			monthly_payment: "",
			reason: "",
			shared: false,
		},
		unsaved_changes: false,
		app_import_field: "",
		timeout_one: "time",
	},
	getters: {
		application: (state) => {
			return state.applications[state.selected_application_index];
		},
		import_stage: (state) => {
			return JSON.parse(state.app_import_field);
		},
		sorted_applications: () => {
			return "";
		},
	},
	mutations: {
		setUserPreferences(state, payload) {
			state.user_preferences = payload;
		},
		deleteApplication(state, uuid) {
			let index = state.applications.findIndex((app) => {
				return app.uuid == uuid;
			});
			state.applications.splice(index, 1);
		},
		saveApplicationsToLocal() {
			window.console.log(
				"A redundant mutation saveApplicationsToLocal was triggered."
			);
			// dispatch("updateApp");
			// try {
			// 	localStorage.setItem(
			// 		"applications",
			// 		JSON.stringify(state.applications)
			// 	);
			// 	window.console.log(
			// 		"Applications data is saved to local storage."
			// 	);
			// } catch {
			// 	window.console.log(
			// 		"Unable to save applications to local storage."
			// 	);
			// 	alert("Unable to save applications to local storage.");
			// }
		},
		getApplicationsFromLocal(state) {
			try {
				state.applications = JSON.parse(
					localStorage.getItem("applications")
				);
				window.console.log(
					"Retrieved Applications data from local storage."
				);
			} catch {
				window.console.log(
					"Unable to retrieve Applications data from local storage."
				);
			}
		},
		appVersionUpdate(state) {
			var app = state.applications[state.selected_application_index];
			if (!app.status) {
				app.status = { value: "Lead", color: "#f7fafc" };
			}
			if (app.version <= 2) {
				app.is_archived = 0;
				app.created_at = "";
				app.updated_at = "";
				app.people.forEach((person) => {
					person.role = "";
				});
				app.version = 3;
			}
		},
		updateTimestamps(state) {
			var stamp = new Date();
			var app = state.applications[state.selected_application_index];
			app.updated_at = stamp;
			if (app.created_at == "") {
				app.created_at = stamp;
			}
		},
		overwriteApplication(state, app) {
			try {
				state.applications[state.selected_application_index] = app;
				window.console.log("Application was updated from server.");
			} catch {
				window.console.log(
					"Application failed to update, contact support."
				);
			}
		},
		overwriteAllApplications(state, apps) {
			try {
				state.applications = apps;
				window.console.log(
					"Applications have been populated by the server."
				);
			} catch {
				window.console.log(
					"Applications failed to update, contact support."
				);
			}
		},

		setApplications(state, apps) {
			state.applications = apps;
		},
		importApplication(state, payload) {
			var app = JSON.parse(payload);
			//give the imported application a new uuid.
			app.uuid = uuid.v4();
			state.applications.unshift(app);
		},
		appPageSwitch(state, io) {
			state.show_vehicle = false;
			state.show_loan = false;
			state.show_applicants = false;
			state.show_businesses = false;
			state.show_history = false;

			switch (io) {
				case "vehicle":
					state.show_vehicle = true;
					break;

				case "loan":
					state.show_loan = true;
					break;

				case "applicants":
					state.show_applicants = true;
					break;

				case "businesses":
					state.show_businesses = true;
					break;

				case "history":
					state.show_history = true;
					break;
			}
		},

		pushToArray(state, payload) {
			var object = {};
			switch (payload.type) {
				case "kid":
					Object.assign(object, state.kid);
					break;
				case "address":
					Object.assign(object, state.address);
					break;
				case "employer":
					Object.assign(object, state.employer);
					break;
				case "property":
					Object.assign(object, state.property);
					break;
				case "vehicle":
					Object.assign(object, state.vehicle);
					break;
				case "credit_card":
					Object.assign(object, state.credit_card);
					break;
				case "other_loan":
					Object.assign(object, state.other_loan);
					break;
				case "other_asset":
					Object.assign(object, state.other_asset);
					break;
				case "domestic_expenses":
					Object.assign(object, state.domestic_expenses);
					break;
				case "credit_default":
					Object.assign(object, state.credit_default);
					break;
				case "court_judgement":
					Object.assign(object, state.court_judgement);
					break;
				case "bankruptcy":
					Object.assign(object, state.bankruptcy);
					break;
				case "quote":
					var item = JSON.parse(payload.quote);
					Object.assign(object, item);
					break;
				case "contact":
					Object.assign(object, payload.entry);
					break;
			}

			var array = payload.array;
			object.uuid = uuid.v4();
			array.push(object);
			payload.adr_count++;
		},

		// pushNote(state, payload) {
		// 	// payload parameters: entry, target

		// 	// let entry = JSON.parse(payload.entry)

		// 	window.console.log("checking")
		// 	window.console.log(payload)
		// 	// let arr = payload.target

		// 	// arr.unshift(entry);

		// 	// var object = {}
		// 	// Object.assign(object, entry)
		// 	// var array = payload.array

		// 	// object.uuid = uuid.v4()

		// 	// array.push(object)
		// 	// payload.adr_count++
		// },

		dropFromArray(state, payload) {
			var array = payload.array;
			array.splice(payload.index, 1);
			if (payload.person) {
				payload.person.adr_count++;
			}
			if (payload.adr) {
				payload.adr++;
			}

			// - person - just to update an arbitrary property to
			// trigger a re-render because I'm a hack
		},

		linkObjectToNextPerson(state, payload) {
			var next = payload.person_index + 1;

			var person =
				state.applications[state.selected_application_index].people[
					next
				];

			payload.object.shared = true;

			switch (payload.type) {
				case "kid":
					person.kids.push(payload.object);
					break;
				case "address":
					person.addresses.push(payload.object);
					break;
				case "employer":
					person.employers.push(payload.object);
					break;
				case "property":
					person.properties.push(payload.object);
					break;
				case "vehicle":
					person.vehicles.push(payload.object);
					break;
				case "credit_card":
					person.credit_cards.push(payload.object);
					break;
				case "other_loan":
					person.other_loans.push(payload.object);
					break;
				case "other_asset":
					person.other_assets.push(payload.object);
					break;
				case "credit_default":
					person.credit_defaults.push(payload.object);
					break;
				case "court_judgement":
					person.court_judgements.push(payload.object);
					break;
				case "bankruptcy":
					person.bankruptcies.push(payload.object);
					break;
				case "domestic_expenses":
					person.domestic_expenses.push(payload.object);
					break;
			}
		},
		selectApplication(state, index) {
			state.selected_application_index = index;
		},

		createEmptyApplication(state) {
			//version 1 to version 2 change: added is_archived, added updated_at, added created_at, dropped is_active
			//version 2 to version 3 change: added 'role' to each person
			var new_app = {
				version: 3,
				status: "",
				stage: "",
				is_archived: 0,
				created_at: "",
				updated_at: "",
				vehicle: {
					type: "",
					build_date: "",
					compliance_date: "",
					first_registered_date: "",
					factory_warranty_months: "",
					factory_warranty_km: "",
					odometer: "",
					year: "",
					model_year: "",
					series: "",
					make: "",
					model: "",
					badge: "",
					body: "",
					doors: "",
					seats: "",
					colour: "",
					transmission: "",
					engine: "",
					engine_size: "",
					fuel_type: "",
					vin: "",
					engine_number: "",
					plate_number: "",
					stock_number: "",
					nvic: "",
					redbook_value: 0,
					glasses_value: "",
				},
				loan_calculator: {
					name: "",
					vehicle_price: 30000,
					aftermarket: 0,
					warranty: 0,
					trade_value: 0,
					trade_payout: 0,
					sign_deposit: 500,
					further_deposit: 0,
					origination_fee: 990,
					brokerage: 0,
					credit_insurance: 0,
					gap_insurance: 0,
					lender_fee: 450,
					monthly_fee: 0,
					term: 60,
					full_naf: 0,
					bare_naf: 0,
					invoice_balance: 0,
					apr: 7.9,
					rv: 0,
					rv_percent: 0,
					weekly: "",
					fortnightly: "",
					monthly: "",
					weekly_big: true,
					fort_big: false,
					monthly_big: false,
					hidden: false,
					is_saved: false,
				},
				supporting_documents: [],
				submissions: [],
				contact_log: [],
				people: [],
				quotes: [],
				businesses: [],
				trusts: [],
				notes: "",
				uuid: uuid.v4(),
			};
			state.applications.unshift(new_app);
			var $index = state.applications.indexOf(new_app);
			state.selected_application_index = $index;
		},
		addVehicleToApplication(state) {
			window.console.log("works");
			let app = state.applications[state.selected_application_index];
			app.vehicle = {
				type: "",
				build_date: "",
				compliance_date: "",
				first_registered_date: "",
				factory_warranty_months: "",
				factory_warranty_km: "",
				odometer: "",
				year: "",
				model_year: "",
				series: "",
				make: "",
				model: "",
				badge: "",
				body: "",
				doors: "",
				seats: "",
				colour: "",
				transmission: "",
				engine: "",
				engine_size: "",
				fuel_type: "",
				vin: "",
				engine_number: "",
				plate_number: "",
				stock_number: "",
				nvic: "",
				redbook_value: "",
				glasses_value: "",
			};
		},

		addPersonToApplication(state) {
			let ar =
				state.applications[state.selected_application_index].people;
			let empty_person = {
				role: "Borrower",
				title: "",
				first_name: "",
				alias: "",
				middle_names: "",
				surname: "",
				mobile_phone: "",
				home_phone: "",
				work_phone: "",
				email_address: "",
				gender: "",
				date_of_birth: "",
				abn_established_date: "",
				abn_gst_date: "",
				abn: "",
				licence_number: "",
				licence_state: "",
				licence_card: "",
				licence_expiry: "",
				passport_number: "",
				passport_country: "",
				passport_expiry: "",
				marital_status: "",
				partner_id: "",
				visa_status: "",
				visa_class: "",
				visa_expiry: "",
				adr_count: 0,
				kids: [],
				addresses: [],
				employers: [],
				properties: [],
				vehicles: [],
				credit_cards: [],
				other_loans: [],
				other_assets: [],
				other_incomes: [],
				domestic_expenses: [],
				credit_defaults: [],
				court_judgements: [],
				bankruptcies: [],
				uuid: uuid.v4(),
			};
			ar.push(empty_person);
		},
		removePersonFromApplication(state, person) {
			if (
				confirm(
					"Are you sure you want to permanently remove this person?"
				)
			) {
				var ar =
					state.applications[state.selected_application_index].people;
				ar.splice(ar.indexOf(person), 1);
			}
		},
		removeBusinessFromApplication(state, business) {
			if (
				confirm(
					"Are you sure you want to permanently remove this business?"
				)
			) {
				var ar =
					state.applications[state.selected_application_index]
						.businesses;
				ar.splice(ar.indexOf(business), 1);
			}
		},
		removeTrustFromApplication(state, trust) {
			if (
				confirm(
					"Are you sure you want to permanently remove this business?"
				)
			) {
				var ar =
					state.applications[state.selected_application_index].trusts;
				ar.splice(ar.indexOf(trust), 1);
			}
		},

		addBusinessToApplication(state) {
			state.applications[
				state.selected_application_index
			].businesses.push({
				entity_name: "Pty Ltd Entity Name",
				business_name: "Business Name",
				abn: "ABN",
				acn: "ACN",
				registration_date: "",
				is_gst: false,
				gst_date: "",
				directors: [],
				shareholders: [],
				registered_address: {},
				street_address: {},
				financial: {},
				accountant: {},
				role: "",
			});
		},
		addTrustToApplication(state) {
			var new_trust = {
				trust_name: "Trust Name",
				business_name: "",
				abn: "ABN",
				acn: "ACN",
				registration_date: "",
				is_gst: false,
				gst_date: "",
				type: "",
				trustee: {},
				beneficiaries: [],
				unit_holders: [],
				registered_address: {},
				street_address: {},
				financial: {},
				accountant: {},
				role: "",
			};
			if (state.applications[state.selected_application_index].trusts) {
				state.applications[
					state.selected_application_index
				].trusts.push(new_trust);
			} else {
				state.applications[
					state.selected_application_index
				].trusts = [];
				state.applications[
					state.selected_application_index
				].trusts.push(new_trust);
			}
		},
		setUserPreferencesFromLocal(state) {
			state.user_preferences = JSON.parse(
				localStorage.getItem("user_preferences")
			);
			state.loan_calculator.vehicle_price =
				state.user_preferences.vehicle_price;
			state.loan_calculator.custom_one =
				state.user_preferences.custom_one;
			state.loan_calculator.custom_one_label =
				state.user_preferences.custom_one_label;
			state.loan_calculator.trade_value =
				state.user_preferences.trade_value;
			state.loan_calculator.trade_payout =
				state.user_preferences.trade_payout;
			state.loan_calculator.sign_deposit =
				state.user_preferences.sign_deposit;
			state.loan_calculator.further_deposit =
				state.user_preferences.further_deposit;
			state.loan_calculator.origination_fee =
				state.user_preferences.origination_fee;
			state.loan_calculator.brokerage = state.user_preferences.brokerage;
			state.loan_calculator.custom_two =
				state.user_preferences.custom_two;
			state.loan_calculator.custom_two_label =
				state.user_preferences.custom_two_label;
			state.loan_calculator.custom_three =
				state.user_preferences.custom_three;
			state.loan_calculator.custom_three_label =
				state.user_preferences.custom_three_label;
			state.loan_calculator.lender_fee =
				state.user_preferences.lender_fee;
			state.loan_calculator.monthly_fee =
				state.user_preferences.monthly_fee;
			state.loan_calculator.term = state.user_preferences.term;
			state.loan_calculator.apr = state.user_preferences.apr;
			state.loan_calculator.rv = state.user_preferences.rv;
			state.loan_calculator.rv_percent =
				state.user_preferences.rv_percent;
			state.loan_calculator.weekly_big =
				state.user_preferences.weekly_big;
			state.loan_calculator.fort_big = state.user_preferences.fort_big;
			state.loan_calculator.monthly_big =
				state.user_preferences.monthly_big;
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
			localStorage.setItem(
				"user_preferences",
				JSON.stringify(state.user_preferences)
			);
			window.console.log(
				"User preferences saved to the computers local storage in browser."
			);
		},
		getPreferencesFromLocalStorage(state) {
			state.user_preferences = JSON.parse(
				localStorage.getItem("user_preferences")
			);
			window.console.log(
				"setting user preferences from browser local storage."
			);
		},

		setSessionUUID(state) {
			state.user_preferences.session_uuid = uuid.v4();
		},
	},
	actions: {
		// saveByUUID(object) {
		// 	if (object.uuid != '') {
		// 		try {
		// 			localStorage.setItem(object.uuid, JSON.stringify(object))
		// 			window.console.log('Object Saved by existing UUID.')
		// 		} catch {
		// 			window.console.log('Unable to save object to local storage.')
		// 		}
		// 	} else {
		// 		window.console.log('unable to save resource without a uuid.')
		// 		object.uuid = uuid.v4()
		// 		try{
		// 			localStorage.setItem(object.uuid, JSON.stringify(object))
		// 			window.console.log('Object Saved by a newly attached UUID.')
		// 		} catch {
		// 			window.console.log('Unable to save object to local storage.')
		// 		}
		// 	}
		// },

		getByUUID({ state }, payload) {
			switch (payload.type) {
				case "application":
					state.selected_application = JSON.parse(
						localStorage.getItem(payload.uuid)
					);
					window.console.log(
						"got application from browser local storage."
					);
					break;
				case "person":
					var item = JSON.parse(localStorage.getItem(payload.uuid));
					window.console.log(
						"got application from browser local storage."
					);
					break;
				default:
					window.console.log(
						"failed to retrieve item from browser local storage."
					);
					break;
			}
			payload.array.push(item);
		},

		initialize({ commit, dispatch }) {
			// initialize the DB
			window.console.log("Initializing the application....");

			var prefs = localStorage.getItem("user_preferences");
			if (prefs) {
				commit("setUserPreferencesFromLocal");
			} else {
				commit("setSessionUUID");
			}

			dispatch("initializeDB");
			// first: get the local storage items if they exist
			// var token = localStorage.getItem("session_token");

			// var apps = localStorage.getItem('applications')
			// var user = JSON.parse(localStorage.getItem("user"));

			// second: commit mutations to set environment from locally stored data
			// if (user && token) {
			// 	commit('setConnected', user)
			// } else {
			// 	commit('setNotConnected')
			// }

			// if (!apps) {
			// 	commit('createEmptyApplication')
			// 	commit('addPersonToApplication')
			// }

			// last: dispatch actions for async remote resources
			// if (token && user) {
			// 	dispatch("testAuthConnection", token);
			// }

			// if (apps) {
			// window.console.log('Getting apps from local storage.')
			// dispatch('getApplicationsFromLocal')
			// }
		},

		deleteApplication({ state, dispatch }, application) {
			if (state.user_preferences.require_confirmation_prompts) {
				if (
					confirm(
						"Are you sure you want to permanently delete this application?"
					)
				) {
					// let config = {
					// 	headers: {
					// 		'Authorization': 'Bearer ' + localStorage.getItem('session_token')
					// 	}
					// }
					// axios.post(env.state.uri + 'api/application/delete', {
					// 	uuid: app.uuid
					// }, config)
					// .then(response => {
					// 	window.console.log(response.data.success_message)
					// 	window.console.log(response.data.failure_message)
					// 	commit('deleteApplication', app.uuid)
					// 	commit('saveApplicationsToLocal')
					// })
					// .catch(error => {
					// 	window.console.log(error)
					// })
					dispatch("deleteApp", application);
				}
			} else {
				dispatch("deleteApp", application);
				// dispatch('updateApplications')
			}
		},

		archiveApplication({ commit, dispatch }, payload) {
			window.console.log(payload.io);
			payload.app.is_archived = payload.io;

			dispatch("updateApp");
			Vue.nextTick(commit("deleteApplication", payload.app.uuid));
		},
		// updateApplications({ commit }) {
		// 	commit("saveApplicationsToLocal");
		// 	commit("updateTimestamps");
		// },
		pushToArray({ commit, dispatch }, payload) {
			commit("pushToArray", payload);
			dispatch("updateField");
		},
		pushNote({ getters, dispatch }, payload) {
			// At position 2, add 2 elements:
			// fruits.splice(2, 0, "Lemon", "Kiwi");
			getters.application.contact_log.splice(0, 0, JSON.parse(payload));
			dispatch("updateField");
		},
		dropFromArray({ state, commit, dispatch }, payload) {
			if (state.user_preferences.require_confirmation_prompts) {
				if (
					confirm(
						"Are you sure you want to permanently remove this " +
							payload.type +
							"?"
					)
				) {
					payload.object.shared = false;
					commit("dropFromArray", payload);
					dispatch("updateField");
				}
			} else {
				payload.object.shared = false;
				commit("dropFromArray", payload);
				dispatch("updateField");
			}
		},
		linkObjectToNextPerson({ commit, dispatch }, payload) {
			commit("linkObjectToNextPerson", payload);
			dispatch("updateApplications");
		},

		createNewApplication({ commit }) {
			commit("createEmptyApplication");
			commit("addPersonToApplication");
		},

		selectApplication({ commit }, index) {
			commit("selectApplication", index);
			commit("appVersionUpdate");
		},

		// made redundant by localdb.initializeDB
		// getApplicationsFromLocal({dispatch}){
		// 	try{
		// 		// var apps = JSON.parse(localStorage.getItem('applications'))
		// 		// commit('getApplicationsFromLocal')
		// 		dispatch('indexApps')
		// 	} catch {
		// 		window.console.log('Unable to retrieve Applications data from browser local storage. Please call support for assistance.')
		// 	}
		// },

		// syncApp({ getters, dispatch }) {
		// 	let app = getters.application;
		// 	if (app.updated_at) {
		// 		let config = {
		// 			headers: {
		// 				Authorization:
		// 					"Bearer " + localStorage.getItem("session_token"),
		// 			},
		// 		};
		// 		axios
		// 			.post(
		// 				env.state.uri + "api/application/sync-check",
		// 				{
		// 					uuid: getters.application.uuid,
		// 				},
		// 				config
		// 			)
		// 			.then((response) => {
		// 				if (response.data.updated_at) {
		// 					if (
		// 						moment(app.updated_at).isBefore(
		// 							response.data.updated_at
		// 						)
		// 					) {
		// 						dispatch("fetchAppFromServer", app.uuid);
		// 					} else {
		// 						dispatch("updateAppOnServer");
		// 					}
		// 				} else {
		// 					dispatch("updateAppOnServer");
		// 				}
		// 			})
		// 			.catch((error) => {
		// 				window.console.log(error);
		// 			});
		// 	}
		// },
		// fetchAppFromServer({ commit, dispatch }, uuid) {
		// 	let config = {
		// 		headers: {
		// 			Authorization:
		// 				"Bearer " + localStorage.getItem("session_token"),
		// 		},
		// 	};
		// 	axios
		// 		.post(
		// 			env.state.uri + "api/application-uuid",
		// 			{
		// 				uuid: uuid,
		// 			},
		// 			config
		// 		)
		// 		.then((response) => {
		// 			commit(
		// 				"overwriteApplication",
		// 				response.data.application.data
		// 			);
		// 			dispatch("saveApplicationsToLocal");
		// 		})
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
		// fetchApplicationsFromServer({ commit }, payload) {
		// 	let config = {
		// 		headers: {
		// 			Authorization:
		// 				"Bearer " + localStorage.getItem("session_token"),
		// 		},
		// 	};
		// 	axios
		// 		.post(
		// 			env.state.uri + "api/applications",
		// 			{
		// 				start_date: payload.start_date,
		// 				end_date: payload.end_date,
		// 				is_archived: payload.is_archived,
		// 			},
		// 			config
		// 		)
		// 		.then((response) => {
		// 			commit(
		// 				"overwriteAllApplications",
		// 				response.data.applications
		// 			);
		// 			commit("saveApplicationsToLocal");
		// 		})
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
		// saveApplicationsToLocal({ commit }) {
		// 	commit("updateTimestamps");
		// 	commit("saveApplicationsToLocal");
		// },
		updateField({ dispatch, commit }) {
			// dispatch('saveApplicationsToLocal')
			// clearTimeout(state.timeout_one)
			// state.timeout_one = setTimeout(() => {
			// 	dispatch('updateAppOnServer')
			// }, 3000);
			// let app = getters.application;
			// window.console.log(app);
			commit("updateTimestamps");
			dispatch("updateApp");
		},

		// updateAppOnServer({ getters }) {
		// 	let config = {
		// 		headers: {
		// 			Authorization:
		// 				"Bearer " + localStorage.getItem("session_token"),
		// 		},
		// 	};
		// 	axios
		// 		.post(
		// 			env.state.uri + "api/application/store",
		// 			{
		// 				uuid: getters.application.uuid,
		// 				is_archived: getters.application.is_archived,
		// 				application: getters.application,
		// 			},
		// 			config
		// 		)
		// 		.then((response) => {
		// 			if (response.data.id) {
		// 				window.console.log("App was updated on server");
		// 			}
		// 		})
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
	},
	modules: {
		auth,
		env,
		// localdb,
		tasksmodule,
	},
});
