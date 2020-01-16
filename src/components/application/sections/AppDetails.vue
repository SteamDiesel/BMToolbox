<template>
	<div class=" w-full">
		<div class="flex w-full justify-end">
			<!-- toolbar -->
		</div>
		<div class="lg:flex">
			
			<!-- left side -->
			
			<div class="lg:w-1/2 bg-gray-200 p-2">
				<h2 class="text-xl">Proposed Loan</h2>
				<LoanCard v-for="(quote, index) in application.quotes"  :key="index" :card="quote">
					<button
						class="relative bg-gray-300 hover:bg-red-200 p-2 shadow-lg rounded-full no-print text-xs"
					@click="dropFromArray({array: application.quotes, object: quote, type: 'quote', index: index})"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5"><path class="primary" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><rect width="2" height="6" x="15" y="13" class="secondary" rx="1"/></svg>

						<svg viewBox="0 0 24 24" class="h-5 w-5 absolute top-0 left-0">
							<path
								class="secondary"
								fill-rule="evenodd"
								d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"
							/>
						</svg>

					</button>
				</LoanCard>

			</div>


			
			<!-- right side -->
			
			<div class="lg:w-1/2">


			</div>


		</div>
	</div>
</template>

<script>

import LoanCard from "@/components/LoanCard.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
name: 'AppDetails',
components:{
	LoanCard
},
computed: {
	...mapGetters(['application'])
	
},
methods: {
		...mapMutations([
			"addPersonToApplication",
			"addBusinessToApplication",
			"removePersonFromApplication"
		]),
		...mapActions(['dropFromArray'])
	}

};
</script>

<style>
</style>