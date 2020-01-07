import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loan_calculator: {
      name: "",
      vehicle_price: 30000,
      accessories: 0,
      trade_value: 0,
      trade_payout: 0,
      payout_lender: "",
      sign_deposit: 2000,
      further_deposit: 0,
      origination_fee: 975,
      brokerage: 0,
      gap: 0,
      cci: 0,
      warranty: 0,
      lender_fee: 398,
      other_fee: 0,
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
    }
  },
  actions: {},
  modules: {}
});
