<template>
	<div class="">
		<div class="flex flex-wrap">
			<div class="w-1/5 flex justify-around items-center">
				
				<button
					@click="employer.current = !employer.current"
					
					class="flex items-center bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full mx-2"
					:class="{ 'bg-teal-400 font-semibold hover:bg-teal-300': employer.current}"
				>
					<span v-show="!employer.current" class="">Previous</span>
					<span v-show="employer.current" class="">Current</span>
				</button>
			</div>
			<FormField class="w-3/5" @copy="copyClipboard('#'+employer.employer)">
				<template v-slot:label>Employer Name</template>
				<input
					:id="'#'+employer.employer"
					v-model="employer.employer"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/2" @copy="copyClipboard('#'+employer.position)">
				<template v-slot:label>Position / Role</template>
				<input
					:id="'#'+employer.position"
					v-model="employer.position"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/4"
			:no_copy=true
			@copy="copyClipboard('#'+employer.status)">
				<template v-slot:label>Type</template>
				<select
					:id="'#'+employer.status"
					v-model="employer.status"
					@change="saveApp"
					type="select"
					class="form-input text-center"
				>
				<option value="" selected>Select</option>
					<option value="Full Time">Full Time</option>
					<option value="Part Time">Part Time</option>
					<option value="Casual">Casual</option>
					<option value="Contract Temp">Contract Temp</option>
					<option value="Contractor ABN">Contractor ABN</option>

				</select>
			</FormField>
			
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/2" @copy="copyClipboard('#'+employer.address)">
				<template v-slot:label>Street Address</template>
				<input
					:id="'#'+employer.address"
					v-model="employer.address"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/4" @copy="copyClipboard('#'+employer.contact_phone)">
				<template v-slot:label>Contact Phone</template>
				<input
					:id="'#'+employer.contact_phone"
					v-model="employer.contact_phone"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/4" @copy="copyClipboard('#'+employer.contact_name)">
				<template v-slot:label>Contact Person</template>
				<input
					:id="'#'+employer.contact_name"
					v-model="employer.contact_name"
					@change="saveApp"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>

		<div  v-if="!employer.current" class="flex flex-wrap">
			<!-- Previous Employer  -->
			<FormField class="w-1/6" 
			@copy="copyClipboard('#'+employer.years)">
				<template v-slot:label>Years</template>
				<input
					:id="'#'+employer.years"
					v-model="employer.years"
					@change="isPreviousSetEndDate"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/6"
			@copy="copyClipboard('#'+employer.months)">
				<template v-slot:label>Months</template>
				<input
					:id="'#'+employer.months"
					v-model="employer.months"
					@change="isPreviousSetEndDate"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+employer.start_date)">
				<template v-slot:label>Start Date</template>
				<input
					:id="'#'+employer.start_date"
					v-model="employer.start_date"
					@change="isPreviousSetEndDate"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField  v-if="!employer.current" class="w-1/3" @copy="copyClipboard('#'+employer.end_date)">
				<template v-slot:label>End Date</template>
				<input
					:id="'#'+employer.end_date"
					v-model="employer.end_date"
					@change="isPreviousSetStartDate"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>

		<div v-if="employer.current" class="flex flex-wrap">
			<!-- Current Employer -->
			<FormField class="w-1/6" :no_copy=true  @copy="copyClipboard('#'+employer.years)">
				<template v-slot:label>Years</template>
				<input
					:id="'#'+employer.years"
					v-model="employer.years"
					@change="isCurrentSetStartDate"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/6" :no_copy=true  @copy="copyClipboard('#'+employer.months)">
				<template v-slot:label>Months</template>
				<input
					:id="'#'+employer.months"
					v-model="employer.months"
					@change="isCurrentSetStartDate"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3"
			:no_copy=true @copy="copyClipboard('#'+employer.start_date)">
				<template v-slot:label>Start Date</template>
				<input
					:id="'#'+employer.start_date"
					v-model="employer.start_date"
					@change="isCurrentSetTenure"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
		</div>
		<div v-if="employer.current">
			<div class="font-semibold mt-2">Income</div>
			<div class="flex flex-wrap">
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.net_monthly_income)">
					<template v-slot:label>Current Net Monthly Income</template>
					<input
						:id="'#'+employer.net_monthly_income"
						v-model="employer.net_monthly_income"
						@keyup.87="employer.net_monthly_income = employer.net_monthly_income * 4.33"
						@keyup.70="employer.net_monthly_income = employer.net_monthly_income * 2.166"
						@keyup.81="employer.net_monthly_income = employer.net_monthly_income * 0.33"
						@keyup.89="employer.net_monthly_income = employer.net_monthly_income * 0.0833"
						@change="saveApp"
						type="number"
						class="form-input text-center font-semibold"
					/>
				</FormField>
				<FormField v-if="payslip_avg_net_monthly" class="w-2/3" @copy="copyClipboard('#jjikk'+payslip_avg_net_monthly)">
					<template v-slot:label>Pay Slip Confrimed Income</template>
					<div class="form-input pb-1 text-center font-semibold flex justify-around">
						<span>${{payslip_avg_net_weekly}}/w</span>
						<span>
							${{payslip_avg_net_monthly}}/m
						</span>
					</div>
					
				</FormField>
			</div>
			<div class="font-semibold mt-2">Payslip Calculator</div>
			<div class="flex flex-wrap">
				<FormField class="w-1/3"
					:no_copy=true 
					@copy="copyClipboard('#'+employer.payslip_start_date)">
					<template v-slot:label>YTD-Start Date</template>
					<input
						:id="'#'+employer.payslip_start_date"
						v-model="employer.payslip_start_date"
						@change="saveApp"
						type="date"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-1/3"
					:no_copy=true 
					@copy="copyClipboard('#'+employer.payslip_date)">
					<template v-slot:label>Payslip Date</template>
					<input
						:id="'#'+employer.payslip_date"
						v-model="employer.payslip_date"
						@change="saveApp"
						type="date"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-1/3"
					:no_copy=true
					@copy="copyClipboard('#'+employer.payslip_net_ytd)">
					<template v-slot:label>YTD Net Income</template>
					<input
						:id="'#'+employer.payslip_net_ytd"
						v-model="employer.payslip_net_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				
			</div>
			<!-- <div class="flex flex-wrap">
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.payslip_gross_wages_ytd)">
					<template v-slot:label>YTD Gross Wages</template>
					<input
						:id="'#'+employer.payslip_gross_wages_ytd"
						v-model="employer.payslip_gross_wages_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.payslip_gross_overtime_ytd)">
					<template v-slot:label>YTD Gross Overtime</template>
					<input
						:id="'#'+employer.payslip_gross_overtime_ytd"
						v-model="employer.payslip_gross_overtime_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.payslip_gross_commission_ytd)">
					<template v-slot:label>YTD Gross Commission</template>
					<input
						:id="'#'+employer.payslip_gross_commission_ytd"
						v-model="employer.payslip_gross_commission_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.payslip_gross_allowance_ytd)">
					<template v-slot:label>YTD Gross Allowance</template>
					<input
						:id="'#'+employer.payslip_gross_allowance_ytd"
						v-model="employer.payslip_gross_allowance_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				<FormField class="w-1/3" @copy="copyClipboard('#'+employer.payslip_gross_allowance_ytd)">
					<template v-slot:label>YTD Tax</template>
					<input
						:id="'#'+employer.payslip_gross_allowance_ytd"
						v-model="employer.payslip_gross_allowance_ytd"
						@change="saveApp"
						type="number"
						class="form-input text-center"
					/>
				</FormField>

			</div> -->
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import moment from 'moment'
import FormField from "@/components/application/FormField.vue";
export default {
	name: "Employer",
	components: {
		FormField
	},
	props: {
		employer: Object,
		employers: Array,
		this_index: Number
	},
	computed:{
		payslip_time_weeks(){
			return moment(this.employer.payslip_date).diff(this.employer.payslip_start_date, 'weeks')
		},
		payslip_time_months(){
			return moment(this.employer.payslip_date).diff(this.employer.payslip_start_date, 'months', true)
		},
		payslip_avg_net_monthly(){
			var result = Math.round(+this.employer.payslip_net_ytd / +this.payslip_time_months)
			if(result >= 10){
				return result
			} else {
				return ''
			}
		},
		payslip_avg_net_weekly(){
			var result = Math.round(+this.employer.payslip_net_ytd / +this.payslip_time_weeks)
			if(result >= 10){
				return result
			} else {
				return ''
			}
		}
	},
	methods: {
		isCurrentSetStartDate(){
			var date = moment().subtract(this.employer.years, 'years').subtract(this.employer.months, 'months').format('YYYY-MM-DD')
			this.employer.end_date = ''
			this.employer.start_date = date
		},
		isCurrentSetTenure(){
			var months = +(Math.round(moment().diff(this.employer.start_date, 'months', true) + "e+" + 2) + "e-" + 2)
			var years = Math.floor(moment().diff(this.employer.start_date,'years'))
			this.employer.months = months - (+years * 12 )
			this.employer.years = years
		},
		isPreviousSetEndDate(){
			if(!this.employer.end_date){
				var prev_index = this.this_index - 1
				this.employer.end_date = moment(this.employers[prev_index].start_date).subtract( 1, 'days').format('YYYY-MM-DD')
			}
			
			this.isPreviousSetStartDate()
		},
		isPreviousSetStartDate(){
			var date = moment(this.employer.end_date).subtract(this.employer.years, 'years').subtract(this.employer.months, 'months').format('YYYY-MM-DD')
			this.employer.start_date = date
		},
		...mapActions(["saveApp"]),
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
	},
	mounted(){
		if(this.employer.current){
			this.isCurrentSetTenure()
		}
	}
};
</script>

<style>
</style>