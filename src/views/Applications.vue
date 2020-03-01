<template>
	<div class="pb-12">
		<PageHeader	 title="Applications">
			<div class="hidden md:block">
				<!-- <button @click="is_table = true" :class="{'bg-gray-500':is_table}" class="h-8 rounded-l-lg bg-gray-200 border border-gray-600 text-xs py-1 px-2 ">
					Table
				</button>
				<button @click="is_table = false" :class="{'bg-gray-500':!is_table}" class="h-8 rounded-r-lg bg-gray-200 border border-gray-600 text-xs py-1 px-2  mr-4">
					Board
				</button> -->
				<button
					@click="show_import = !show_import"
					class="bg-transparent font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded mr-4"
				>
				Import Application
				</button>
			</div>
			
			<NewApplicationButton />
		</PageHeader>
		
		<div class="md:flex h-full w-full body-internal">
			<div class="w-64 px-6 flex w-full justify-between items-center md:flex-col md:w-64 md:justify-start">
				<div class="w-full">
					<FormField class="w-full" :no_copy=true @copy="copyClipboard('#'+person.passport_expiry)">
						<template v-slot:label>Start Date</template>
						<input
							:id="'#'+start_date"
							v-model="start_date"
							type="date"
							class="form-input text-center"
						/>
					</FormField>
					<FormField class="w-full mb-4" :no_copy=true @copy="copyClipboard('#'+person.passport_expiry)">
						<template v-slot:label>End Date</template>
						<input
							:id="'#'+end_date"
							v-model="end_date"
							type="date"
							class="form-input text-center"
						/>
					</FormField>
				</div>
				
				<button @click="fetchApplicationsFromServer(
					{start_date: start_date, end_date: end_date, is_archived: 0}
					)" class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300 w-full">
					All Active
				</button>
				<button @click="fetchApplicationsFromServer(
					{start_date: start_date, end_date: end_date, is_archived: 1}
					)" class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300 w-full">
					All Archived
				</button>
				
				

			</div>
			
			<div class=" w-full h-full overflow-auto">
				<AppsTable/>
			</div>
			<!-- <div v-if="is_table" class=" w-full h-full overflow-auto">
				<AppsTable/>
			</div> -->
			<!-- <div v-if="!is_table" class=" w-full h-full overflow-auto items-center flex justify-center">
				Stage Board View is planned for a future update.
			</div> -->
			<transition name="fade" mode="out-in">
				<div v-if="show_import" 
				class="bg-gray-200 absolute right-0 h-160 w-120 rounded border border-gray-500 m-4 p-4">
					<ImportApp>
						<button @click="show_import = !show_import" class="btn-secondary">
							Close
						</button>
					</ImportApp>
				</div>
			</transition>
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
import ImportApp from '@/components/ImportApp.vue'
import FormField from "@/components/application/FormField.vue";

import { mapState, mapMutations, mapActions } from "vuex";
export default {
	name: "Applications",
	data(){
		return{
			is_table: true,
			show_import: false,
			start_date: '',
			end_date: '',
		}
	},
	components: {
		// AppCard,
		NewApplicationButton,
		PageHeader,
		AppsTable,
		ImportApp,
		FormField
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
		...mapActions(["deleteApplication", "fetchApplicationsFromServer"])
	},
	
};
</script>
<style scoped>
	.body-internal {
		height: calc(100vh - 12rem);
	}
</style>
