<template>
  <div @keyup.17="hotkey()" class="w-full py-12">
    <div class="container mx-auto">
      <div class="sm:flex sm:justify-center mx-16 sm:mx-0">
        <div class="sm:w-1/3">
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Vehicle</label>
            <input
              v-model="loan_calculator.vehicle_price"
              type="number"
              step="500"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Warranty</label>
            <input
              v-model="loan_calculator.warranty"
              type="number"
              step="100"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Trade</label>
            <input
              v-model="loan_calculator.trade_value"
              type="number"
              step="500"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Payout</label>
            <input
              v-model="loan_calculator.trade_payout"
              type="number"
              step="500"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Deposit</label>
            <input
              v-model="loan_calculator.sign_deposit"
              type="number"
              step="500"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Deposit</label>
            <input
              v-model="loan_calculator.further_deposit"
              type="number"
              step="500"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Balance</label>
            <input
              readonly
              v-model="balance_financed"
              type="number"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
        </div>
        <div class="sm:w-1/3">
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">DOF</label>
            <input
              v-model="loan_calculator.origination_fee"
              type="number"
              step="110"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">EST</label>
            <input
              v-model="loan_calculator.lender_fee"
              type="number"
              step="50"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">CCI</label>
            <input
              v-model="loan_calculator.cci"
              type="number"
              step="100"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">RTI</label>
            <input
              v-model="loan_calculator.gap"
              type="number"
              step="100"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Brokerage</label>
            <input
              v-model="loan_calculator.brokerage"
              type="number"
              step="110"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Monthly</label>
            <input
              v-model="loan_calculator.monthly_fee"
              type="number"
              step="1"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">NAF</label>
            <input
              readonly
              v-model="displaynaf"
              type="number"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
        </div>
        <div class="sm:w-1/3">
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">Term</label>
            <input
              v-model="loan_calculator.term"
              type="number"
              step="12"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">APR</label>
            <input
              v-model="loan_calculator.apr"
              type="number"
              step="0.1"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">RV</label>
            <input
              @keyup="setRvPercent"
              v-model="loan_calculator.rv"
              type="number"
              step="100"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mx-4 mt-6">
            <label class="font-semibold">RP</label>
            <input
              @keyup="setRv"
              v-model="loan_calculator.rv_percent"
              type="number"
              step=".50"
              class="appearance-none bg-transparent border-none w-full text-right text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div class="lg:flex lg:justify-between mx-16 sm:mx-0 mt-24">
        <div class="lg:flex lg:flex-col lg:justify-end">
          <p
            @click="makeBig('week')"
            class="text-md cursor-pointer text-right"
            v-bind:class="{ 'text-6xl': loan_calculator.weekly_big }"
          >${{weekly_pmt}} per week</p>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-end">
          <p
            @click="makeBig('fort')"
            class="text-md cursor-pointer text-right"
            v-bind:class="{ 'text-6xl': loan_calculator.fort_big }"
          >${{fort_pmt}} per fortnight</p>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-end">
          <p
            @click="makeBig('month')"
            class="text-md cursor-pointer text-right"
            v-bind:class="{ 'text-6xl': loan_calculator.monthly_big }"
          >${{monthly_pmt}} per month</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // Author is Jason Lloyd Law
  // contact me at jason.lloyd.law@gmail.com or call me on 0400 696 332
  data: function() {
    return {

    };
  },
  filters: {
    money(amount) {
      return "$" + +(Math.round(amount + "e+" + 2) + "e-" + 2);
    },
    option(naf, apr, term, divide) {
      var int = apr / 100 / 12;
      var y = Math.pow(1 + int, term);
      var pmt = (naf * y * int) / (y - 1) / divide;
      return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
    },
    pmt(naf, apr, term, rv, fee, divide) {
      var x = naf - rv;
      var int = apr / 100 / 12;
      var y = Math.pow(1 + int, term);
      var rvint = rv * int;
      var pmt = ((x * y * int) / (y - 1) + fee + rvint) / divide;
      return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
    }
  },
  computed: {
    ...mapState(["loan_calculator"]),
    balance_financed() {
      return (
        +this.loan_calculator.vehicle_price +
        +this.loan_calculator.accessories +
        +this.loan_calculator.warranty -
        +this.loan_calculator.trade_value +
        +this.loan_calculator.trade_payout -
        +this.loan_calculator.sign_deposit -
        +this.loan_calculator.further_deposit
      );
    },

    naf() {
      return (
        this.balance_financed +
        +this.loan_calculator.origination_fee +
        +this.loan_calculator.brokerage +
        +this.loan_calculator.gap +
        +this.loan_calculator.cci +
        +this.loan_calculator.lender_fee +
        +this.loan_calculator.other_fee -
        +this.loan_calculator.rv
      );
    },
    displaynaf() {
      return (
        this.balance_financed +
        +this.loan_calculator.origination_fee +
        +this.loan_calculator.brokerage +
        +this.loan_calculator.gap +
        +this.loan_calculator.cci +
        +this.loan_calculator.lender_fee +
        +this.loan_calculator.other_fee
      );
    },
    intrate() {
      return this.loan_calculator.apr / 100;
    },
    monthly_pmt() {
      var int = this.intrate / 12;
      var y = Math.pow(1 + int, this.loan_calculator.term);
      var rvint = this.loan_calculator.rv * int;
      var pmt = (this.naf * y * int) / (y - 1) + this.loan_calculator.monthly_fee + rvint;
      return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
    },
    fort_pmt() {
      var term = (this.loan_calculator.term / 12) * 26;
      var int = this.intrate / 26;
      var y = Math.pow(1 + int, term);
      var rvint = this.loan_calculator.rv * int;
      var pmt = (this.naf * y * int) / (y - 1) + this.loan_calculator.monthly_fee / 2 + rvint;
      return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
    },
    weekly_pmt() {
      var term = (this.loan_calculator.term / 12) * 52;
      var int = this.intrate / 52;
      var y = Math.pow(1 + int, term);
      var rvint = this.loan_calculator.rv * int;
      var pmt = (this.naf * y * int) / (y - 1) + this.loan_calculator.monthly_fee / 4 + rvint;
      return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
    }
  },
  methods: {
    hotkey() {
      alert("that only works when logged into your account");
    },
    makeBig(io) {
      switch (io) {
        case "week":
          this.loan_calculator.weekly_big = true;
          this.loan_calculator.fort_big = false;
          this.loan_calculator.monthly_big = false;
          break;
        case "fort":
          this.loan_calculator.weekly_big = false;
          this.loan_calculator.fort_big = true;
          this.loan_calculator.monthly_big = false;
          break;
        case "month":
          this.loan_calculator.weekly_big = false;
          this.loan_calculator.fort_big = false;
          this.loan_calculator.monthly_big = true;
          break;
        default:
          this.loan_calculator.weekly_big = true;
          this.loan_calculator.fort_big = false;
          this.loan_calculator.monthly_big = false;
      }
    },
    setRv() {
      this.loan_calculator.rv = (this.loan_calculator.rv_percent / 100) * this.loan_calculator.vehicle_price;
    },
    setRvPercent() {
      this.loan_calculator.rv_percent = (this.loan_calculator.rv / this.loan_calculator.vehicle_price) * 100;
    }
  },
  mounted() {}
};
</script>

<style>
</style>