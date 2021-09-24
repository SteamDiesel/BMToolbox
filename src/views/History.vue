<template>
	<div class="pb-12">
		<PageHeader title="History">
			<!-- <div class="hidden md:block">
				<button
					@click.prevent="is_table = true"
					:class="{ 'bg-gray-400': is_table }"
					class="h-8 rounded-l-lg bg-gray-200 border border-gray-600 text-xs font-semibold py-1 px-2 "
				>
					Table
				</button>
				<button
					@click.prevent="is_table = false"
					:class="{ 'bg-gray-400': !is_table }"
					class="h-8 rounded-r-lg bg-gray-200 border border-gray-600 text-xs font-semibold py-1 px-2  mr-4"
				>
					Board
				</button>
				<button
					@click="show_new = !show_new"
					class="bg-transparent font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded mr-4"
				>
					New Task
				</button>
			</div> -->

			<!-- <NewApplicationButton /> -->
		</PageHeader>

		<div class="md:flex h-full w-full body-internal">
			<div
				class="w-64 px-6 flex w-full justify-between items-center md:flex-col md:w-64 md:justify-start"
			>
				<!-- <div class="w-full">
					<FormField
						class="w-full"
						:no_copy="true"
						@copy="copyClipboard('#' + person.passport_expiry)"
					>
						<template v-slot:label>Start Date</template>
						<input
							:id="'#' + start_date"
							v-model="start_date"
							type="date"
							class="form-input text-center"
						/>
					</FormField>
					<FormField
						class="w-full mb-4"
						:no_copy="true"
						@copy="copyClipboard('#' + person.passport_expiry)"
					>
						<template v-slot:label>End Date</template>
						<input
							:id="'#' + end_date"
							v-model="end_date"
							type="date"
							class="form-input text-center"
						/>
					</FormField>
				</div> -->

				<!-- <button
					@click="indexApps(0)"
					class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300 w-full"
				>
					All Active
				</button>
				<button
					@click="indexApps(1)"
					class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300 w-full"
				>
					All Archived
				</button> -->
			</div>

			<!-- <div class=" w-full h-full overflow-auto">
				<AppsTable />
			</div> -->

			<!-- <transition name="fade" mode="out-in">
				<div
					v-if="show_new"
					class="bg-gray-200 absolute right-0  w-120 border border-gray-500 m-0"
				>
					<div
						class="w-full bg-teal-500 text-white font-semibold px-8 py-4 text-lg"
					>
						Create task
					</div>
					<div class="p-8">
						nothing in here

						<FormField
							class="w-4/5"
							@copy="copyClipboard('#' + new_task.title)"
						>
							<template v-slot:label>
								Title
							</template>
							<input
								:id="'#' + new_task.title"
								v-model="new_task.title"
								type="text"
								class="form-input text-center"
							/>
						</FormField>
					</div>
				</div>
			</transition> -->
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import PageHeader from "@/components/layout/PageHeader.vue";

	import { mapState, mapMutations, mapActions } from "vuex";
	// import FormField from "../components/application/FormField.vue";
	export default {
		name: "History",
		components: {
			PageHeader,
			// FormField,
		},
		data() {
			return {};
		},
		computed: {
			...mapState(["applications", "history"]),
		},
		methods: {
			openApp(index) {
				this.selectApplication(index);
				this.$router.push("application");
			},
			...mapMutations(["selectApplication"]),
			...mapActions([]),
		},
	};
</script>
<style scoped>
	.body-internal {
		height: calc(100vh - 64rem);
	}
</style>
