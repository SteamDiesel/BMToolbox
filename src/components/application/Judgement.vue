<template>
	<div class="">
		<div class="flex flex-wrap">
			<FormField
				class="w-1/4"
				@copy="copyClipboard('#' + court_judgement.original_creditor)"
			>
				<template v-slot:label>
					Original Creditor
				</template>
				<input
					:id="'#' + court_judgement.original_creditor"
					v-model="court_judgement.original_creditor"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/5"
				@copy="copyClipboard('#' + court_judgement.amount_listed)"
			>
				<template v-slot:label>
					Amount Listed
				</template>
				<input
					:id="'#' + court_judgement.amount_listed"
					v-model="court_judgement.amount_listed"
					@change="updateField"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/3"
				@copy="copyClipboard('#' + court_judgement.date_listed)"
			>
				<template v-slot:label>
					Date Listed
				</template>
				<input
					:id="'#' + court_judgement.date_listed"
					v-model="court_judgement.date_listed"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>

			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>
		</div>
		<div class="flex flex-wrap">
			<FormField class="w-1/3" :no_copy="true">
				<template v-slot:label>
					Status
				</template>
				<select
					:id="'#' + court_judgement.status"
					v-model="court_judgement.status"
					@change="updateField"
					type="text"
					class="form-input text-center"
				>
					<option value="Unpaid">Unpaid</option>
					<option value="In Arrangement">In Arrangement</option>
					<option value="Disputed">Disputed</option>
					<option value="Paid">Paid</option>
				</select>
			</FormField>

			<FormField
				v-if="court_judgement.status == 'In Arrangement'"
				class="w-1/3"
				@copy="copyClipboard('#' + court_judgement.current_balance)"
			>
				<template v-slot:label>
					Current Balance
				</template>
				<input
					:id="'#' + court_judgement.current_balance"
					v-model="court_judgement.current_balance"
					@change="updateField"
					type="number"
					class="form-input text-center"
				/>
			</FormField>

			<FormField
				v-if="court_judgement.status == 'In Arrangement'"
				class="w-1/3"
				@copy="copyClipboard('#' + court_judgement.monthly_payment)"
			>
				<template v-slot:label>
					Monthly Payment
				</template>
				<input
					:id="'#' + court_judgement.monthly_payment"
					v-model="court_judgement.monthly_payment"
					@keyup.87="
						court_judgement.monthly_payment =
							court_judgement.monthly_payment * 4.33
					"
					@keyup.70="
						court_judgement.monthly_payment =
							court_judgement.monthly_payment * 2.166
					"
					@keyup.81="
						court_judgement.monthly_payment =
							court_judgement.monthly_payment * 0.33
					"
					@keyup.89="
						court_judgement.monthly_payment =
							court_judgement.monthly_payment * 0.0833
					"
					@change="updateField"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				v-if="court_judgement.status == 'Paid'"
				class="w-1/3"
				@copy="copyClipboard('#' + court_judgement.date_paid)"
			>
				<template v-slot:label>
					Date Paid
				</template>
				<input
					:id="'#' + court_judgement.date_paid"
					v-model="court_judgement.date_paid"
					@change="updateField"
					type="date"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-full"
				@copy="copyClipboard('#' + court_judgement.reason)"
			>
				<template v-slot:label>
					Reason for Court Judgement
				</template>
				<input
					:id="'#' + court_judgement.reason"
					v-model="court_judgement.reason"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";
	export default {
		name: "court_judgement",
		components: {
			FormField,
		},
		props: {
			court_judgement: Object,
		},
		methods: {
			...mapActions(["updateField"]),
			copyClipboard(id) {
				let valueToCopy = document.getElementById(id);
				valueToCopy.setAttribute("type", "text");
				valueToCopy.select();
				try {
					document.execCommand("copy");
				} catch (err) {
					alert("Oops, unable to copy");
				}
			},
		},
	};
</script>

<style></style>
