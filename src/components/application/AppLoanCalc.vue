<template>
	<div class="p-2">
		<div class="flex w-full px-4">
			<div class="w-full">
				
				<div class="flex justify-between">
					<div
						@click="makeBig('week')"
						:class="{ 'text-2xl font-semibold': calc.weekly_big}"
						class="cursor-pointer mt-3"
					>${{weekly_pmt}}/w</div>
					<div
						@click="makeBig('fort')"
						:class="{ 'text-2xl font-semibold': calc.fort_big}"
						class="cursor-pointer mt-3"
					>${{fort_pmt}}/f</div>
					<div
						@click="makeBig('month')"
						:class="{ 'text-2xl font-semibold': calc.monthly_big}"
						class="cursor-pointer mt-3"
					>${{monthly_pmt}}/m</div>
				</div>
			</div>

		</div>
		<div class="flex w-full">
			<div class="w-1-3">
				<FormField class="w-full" @copy="copyClipboard('#'+calc.vehicle_price)">
					<template v-slot:label>Vehicle Price</template>
					<input
						:id="'#'+calc.vehicle_price"
						v-model="calc.vehicle_price"
						@change="saveApplicationsToLocal"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.aftermarket)">
					<template v-slot:label>aftermarket</template>
					<input
						:id="'#'+calc.aftermarket"
						v-model="calc.aftermarket"
						@change="saveApplicationsToLocal"
						type="number"
						step="100"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.warranty)">
					<template v-slot:label>warranty</template>
					<input
						:id="'#'+calc.warranty"
						v-model="calc.warranty"
						@change="saveApplicationsToLocal"
						type="number"
						step="100"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.trade_value)">
					<template v-slot:label>trade_value</template>
					<input
						:id="'#'+calc.trade_value"
						v-model="calc.trade_value"
						@change="saveApplicationsToLocal"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.trade_payout)">
					<template v-slot:label>trade_payout</template>
					<input
						:id="'#'+calc.trade_payout"
						v-model="calc.trade_payout"
						@change="saveApplicationsToLocal"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.sign_deposit)">
					<template v-slot:label>sign_deposit</template>
					<input
						:id="'#'+calc.sign_deposit"
						v-model="calc.sign_deposit"
						@change="saveApplicationsToLocal"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.further_deposit)">
					<template v-slot:label>further_deposit</template>
					<input
						:id="'#'+calc.further_deposit"
						v-model="calc.further_deposit"
						@change="saveApplicationsToLocal"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+balance_financed)">
					<template v-slot:label>Invoice Balance</template>
					<input
						:id="'#'+balance_financed"
						v-model="balance_financed"
						@change="saveApplicationsToLocal"
						type="number"
						readonly
						class="form-input text-center"
					/>
				</FormField>
			</div>

			<div class="w-1-3">
				<FormField class="w-full" @copy="copyClipboard('#'+calc.origination_fee)">
					<template v-slot:label>origination_fee</template>
					<input
						:id="'#'+calc.origination_fee"
						v-model="calc.origination_fee"
						@change="saveApplicationsToLocal"
						type="number"
						step="110"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.brokerage)">
					<template v-slot:label>brokerage</template>
					<input
						:id="'#'+calc.brokerage"
						v-model="calc.brokerage"
						@change="saveApplicationsToLocal"
						type="number"
						step="110"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.credit_insurance)">
					<template v-slot:label>credit_insurance</template>
					<input
						:id="'#'+calc.credit_insurance"
						v-model="calc.credit_insurance"
						@change="saveApplicationsToLocal"
						type="number"
						step="100"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.gap_insurance)">
					<template v-slot:label>gap_insurance</template>
					<input
						:id="'#'+calc.gap_insurance"
						v-model="calc.gap_insurance"
						@change="saveApplicationsToLocal"
						type="number"
						step="100"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.lender_fee)">
					<template v-slot:label>lender_fee</template>
					<input
						:id="'#'+calc.lender_fee"
						v-model="calc.lender_fee"
						@change="saveApplicationsToLocal"
						type="number"
						step="50"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.monthly_fee)">
					<template v-slot:label>monthly_fee</template>
					<input
						:id="'#'+calc.monthly_fee"
						v-model="calc.monthly_fee"
						@change="saveApplicationsToLocal"
						type="number"
						step="5"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+naf)">
					<template v-slot:label>NAF</template>
					<input
						:id="'#'+naf"
						v-model="naf"
						@change="saveApplicationsToLocal"
						type="number"
						readonly
						class="form-input text-center"
					/>
				</FormField>
			</div>

			<div class="w-1-3">
				<FormField class="w-full" @copy="copyClipboard('#'+calc.term)">
					<template v-slot:label>term</template>
					<input
						:id="'#'+calc.term"
						v-model="calc.term"
						@change="saveApplicationsToLocal"
						type="number"
						step="12"
						class="form-input text-center"
					/>
				</FormField>

				<FormField class="w-full" @copy="copyClipboard('#'+calc.apr)">
					<template v-slot:label>apr</template>
					<input
						:id="'#'+calc.apr"
						v-model="calc.apr"
						@change="saveApplicationsToLocal"
						type="number"
						step="0.1"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.rv)">
					<template v-slot:label>rv</template>
					<input
						:id="'#'+calc.rv"
						v-model="calc.rv"
						@change="saveApplicationsToLocal"
						@keyup="setRvPercent"
						type="number"
						step="500"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-full" @copy="copyClipboard('#'+calc.rv_percent)">
					<template v-slot:label>rv_percent</template>
					<input
						:id="'#'+calc.rv_percent"
						v-model="calc.rv_percent"
						@change="saveApplicationsToLocal"
						@keyup="setRv"
						type="number"
						step="2"
						class="form-input text-center"
					/>
				</FormField>
				<div class="flex flex-col w-full pt-4 justify-center items-center">
					<div
						@click="makeBig('week')"
						:class="{ 'text-2xl font-semibold': calc.weekly_big}"
						class="cursor-pointer mt-3"
					>${{weekly_pmt}}/w</div>
					<div
						@click="makeBig('fort')"
						:class="{ 'text-2xl font-semibold': calc.fort_big}"
						class="cursor-pointer mt-3"
					>${{fort_pmt}}/f</div>
					<div
						@click="makeBig('month')"
						:class="{ 'text-2xl font-semibold': calc.monthly_big}"
						class="cursor-pointer mt-3"
					>${{monthly_pmt}}/m</div>
				</div>
			</div>
		</div>
		<div class="flex w-full flex-wrap mt-12">
			<button class="btn-secondary px-2 py-1 mx-2" @click="applyPreset({term: 60, rv: 0})" >5y</button>
			<button class="btn-secondary px-2 py-1 mx-2" @click="applyPreset({term: 84, rv: 0})" >7y</button>
			<button class="btn-secondary px-2 py-1 mx-2" @click="applyPreset({term: 60, rv: 30})" >5y30%</button>
			<button class="btn-secondary px-2 py-1 mx-2" @click="applyPreset({term: 48, rv: 40})" >4y40%</button>
			<button class="btn-secondary px-2 py-1 mx-2" @click="applyPreset({term: 36, rv: 50})" >3y50%</button>
		</div>
	</div>
</template>

<script>
import FormField from "@/components/application/FormField.vue";
import { mapMutations } from "vuex";
export default {
	name: "AppLoanCalc",
	props: {
		calc: Object
	},
	data() {
		return {
			show_edit: false
		};
	},
	components: {
		FormField
	},
	watch:{
		monthly_pmt: 'setVals',
		
	},
	computed: {
		balance_financed() {
			var calc = this.calc
			return (
				+calc.vehicle_price +
				+calc.warranty +
				+calc.aftermarket -
				+calc.trade_value +
				+calc.trade_payout -
				+calc.sign_deposit -
				+calc.further_deposit
			);
		},
		naf() {
			var calc = this.calc
			return (
				this.balance_financed +
				+calc.origination_fee +
				+calc.brokerage +
				+calc.credit_insurance +
				+calc.gap_insurance +
				+calc.lender_fee
			);
		},
		calculating_naf() {
			var calc = this.calc
			return (
				this.balance_financed +
				+calc.origination_fee +
				+calc.brokerage +
				+calc.credit_insurance +
				+calc.gap_insurance +
				+calc.lender_fee -
				+calc.rv
			);
		},
		intrate() {
			return this.calc.apr / 100;
		},
		monthly_pmt() { 
			var int = this.intrate / 12;
			var y = Math.pow(1 + int, this.calc.term);
			var rvint = this.calc.rv * int;
			var pmt =
				(this.calculating_naf * y * int) / (y - 1) +
				+this.calc.monthly_fee +
				rvint;
			return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
		},
		fort_pmt() { 
			var term = (this.calc.term / 12) * 26;
			var int = this.intrate / 26;
			var y = Math.pow(1 + int, term);
			var rvint = this.calc.rv * int;
			var pmt =
				(this.calculating_naf * y * int) / (y - 1) +
				+this.calc.monthly_fee / 2 +
				rvint;
			return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
		},
		weekly_pmt() { 
			var term = (this.calc.term / 12) * 52;
			var int = this.intrate / 52;
			var y = Math.pow(1 + int, term);
			var rvint = this.calc.rv * int;
			var pmt =
				(this.calculating_naf * y * int) / (y - 1) +
				+this.calc.monthly_fee / 4 +
				rvint;
			return +(Math.round(pmt + "e+" + 2) + "e-" + 2);
		}
	},

	methods: {
		applyPreset(payload){
			this.calc.term = payload.term;
			this.calc.rv_percent = payload.rv;
			this.setRv()
		},
		setVals(){
			var calc = this.calc
			calc.full_naf = +this.naf 
			calc.bare_naf = +this.naf 
			calc.invoice_balance = +this.balance_financed
			calc.weekly = +this.weekly_pmt
			calc.fortnightly = +this.fort_pmt
			calc.monthly = +this.monthly_pmt
		},
		makeBig(io) {
			switch (io) {
				case "week":
					this.calc.weekly_big = true;
					this.calc.fort_big = false;
					this.calc.monthly_big = false;
					break;
				case "fort":
					this.calc.weekly_big = false;
					this.calc.fort_big = true;
					this.calc.monthly_big = false;
					break;
				case "month":
					this.calc.weekly_big = false;
					this.calc.fort_big = false;
					this.calc.monthly_big = true;
					break;
				default:
					this.calc.weekly_big = true;
					this.calc.fort_big = false;
					this.calc.monthly_big = false;
			}
		},
		setRv() {
			var value = (this.calc.rv_percent / 100) * this.calc.vehicle_price;
			this.calc.rv = +(Math.round(value + "e+" + 2) + "e-" + 2);
		},
		setRvPercent() {
			var percent = (this.calc.rv / this.calc.vehicle_price) * 100;
			this.calc.rv_percent = +(Math.round(percent + "e+" + 2) + "e-" + 2);
		},

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