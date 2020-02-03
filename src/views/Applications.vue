<template>
	<div class="pb-12">
		<PageHeader	 title="Applications">
			<button @click="is_table = true" :class="{'bg-gray-500':is_table}" class=" h-8 rounded-l-lg bg-gray-200 border border-gray-600 text-xs py-1 px-2 ">
				Table
			</button>
			<button @click="is_table = false" :class="{'bg-gray-500':!is_table}" class=" h-8 rounded-r-lg bg-gray-200 border border-gray-600 text-xs py-1 px-2  mr-4">
				Board
			</button>
			<button
				class="bg-transparent font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded mr-4"
			>
			Import Application
			</button>
			<NewApplicationButton />
		</PageHeader>
		
		<div class="flex h-full w-full body-internal">
			<div class="w-64 px-6 flex flex-col justify-start items-start">
				<button class="py-2 px-3 flex justify-start rounded hover:bg-gray-300 w-full">
					All Active
				</button>
				<button class="py-2 px-3 flex justify-start rounded hover:bg-gray-300 w-full">
					All Archived
				</button>
			</div>
			<div v-if="is_table" class=" w-full h-full overflow-auto">
				<AppsTable/>
			</div>
			<div v-if="!is_table" class=" w-full h-full overflow-auto items-center flex justify-center">
				Stage Board View is under construction
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import AppCard from "@/components/application/AppCard.vue";
import NewApplicationButton from "@/components/buttons/NewApplicationButton.vue";
// import SaveApplicationsButton from "@/components/buttons/SaveApplicationsButton.vue";
import PageHeader from '@/components/layout/PageHeader.vue'
import AppsTable from '@/components/tables/AppsTable.vue'

import { mapState, mapMutations, mapActions } from "vuex";
export default {
	name: "home",
	data(){
		return{
			is_table: true
		}
	},
	components: {
		// AppCard,
		NewApplicationButton,
		PageHeader,
		AppsTable
		// SaveApplicationsButton
	},
	computed: {
		...mapState(["applications"])
	},
	methods: {
		openApp(index) {
			this.selectApplication(index);
			this.$router.push("application");
		},
		...mapMutations(["selectApplication"]),
		...mapActions(["deleteApplication"])
	}
};
</script>
<style scoped>
	.body-internal {
		height: calc(100vh - 13rem);
	}
</style>
