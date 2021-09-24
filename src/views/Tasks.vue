<template>
	<div class="pb-12">
		<PageHeader title="Tasks">
			<div class="hidden md:block">
				<button
					@click="show_new = !show_new"
					class="bg-transparent font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded mr-4"
				>
					New Task
				</button>
			</div>
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
			<div class="p-10 w-full bg-blue-300 ">
				<div class="" v-for="(task, index) in tasks" :key="index">
					{{ task.title }}
				</div>
			</div>

			<transition name="fade" mode="out-in">
				<new-task v-if="show_new"> </new-task>
			</transition>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import PageHeader from "@/components/layout/PageHeader.vue";

	import { mapState, mapMutations, mapActions } from "vuex";

	import NewTask from "../components/NewTask.vue";
	export default {
		name: "Tasks",
		components: {
			PageHeader,
			NewTask,
		},
		data() {
			return {
				show_new: false,
			};
		},
		computed: {
			...mapState({
				tasks: (state) => state.tasksmodule.tasks,
			}),
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
