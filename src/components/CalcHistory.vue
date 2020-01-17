<template>
	<div class="mt-16">
		<div class="md:flex md:justify-end mx-4 mt-6"></div>
		<HistoryCard v-for="quote in loan_calc_history" :key="quote.index" :card="quote">
			<!-- <button @click="pushToArray({quote: quote, type: 'quote', array: application.quotes})">
			save
		</button> -->
		</HistoryCard>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import HistoryCard from "@/components/HistoryCard.vue";
export default {
	name: "CalculatorHistory",
	components: {
		HistoryCard
	},
	computed: {
		...mapGetters(["application"]),
		...mapState(["loan_calc_history"])
	},
	methods: {
		...mapActions(["pushToArray"])
	}
};
</script>

<style>
</style>