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
    user_preferences:{
      user_name: '',
      user_role: '',
      user_email: '',
      user_phone: '',
      
      user_business_name: '',
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
    loan_calc_history: []
  },
  mutations: {
    pushLoanToHistory(state, payload) {
      var loan = {};
      Object.assign(loan, state.loan_calculator);
      loan.weekly = payload.weekly;
      loan.fortnightly = payload.fortnightly;
      loan.monthly = payload.monthly;
      state.loan_calc_history.unshift(loan);
      state.loan_calculator.is_saved = true;
    },
    savePreferences(state){
      localStorage.setItem('user_preferences', JSON.stringify(state.user_preferences));
    },
    getPreferencesFromLocalStorage(state){
      var prefs = localStorage.getItem('user_preferences');
      if(prefs){
       state.user_preferences = JSON.parse(localStorage.getItem('user_preferences'));
      }
    
    }
  },
  actions: {},
  modules: {}
});
