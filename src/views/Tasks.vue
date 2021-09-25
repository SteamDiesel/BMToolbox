<template>
	<div class="pb-4">
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

		<div class="w-full w-full ">
			<div class="w-64 px-6 flex w-full items-center justify-start">
				<button
					@click="show_completed = false"
					class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300"
				>
					All Pending
				</button>
				<button
					@click="show_completed = true"
					class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300"
				>
					All Completed
				</button>
			</div>
			<div class="px-4 w-full">
				<div v-if="!show_completed">
					<div
						class="w-full overflow-y-auto overscroll-contain body-int"
					>
						<table class="w-full h-full">
							<thead class="w-full ">
								<tr
									class="text-xs uppercase bg-gray-200 w-full"
								>
									<th
										class="py-3 text-left px-3 border-t border-r border-l border-gray-400"
									>
										Done
									</th>
									<th
										class="py-3 text-left px-3 border-t border-r border-gray-400"
									>
										Title
									</th>
									<th
										class="py-3 text-left px-3 border-t border-r border-gray-400"
									>
										Application
									</th>
									<th
										class="py-3 text-left px-3 border-t border-r border-gray-400"
									>
										Checklist
									</th>
									<th
										class="py-3 text-left px-3 border-t border-r border-gray-400"
									>
										Due Date
									</th>
								</tr>
							</thead>
							<tbody class="">
								<task-row
									v-for="(task, index) in pending_tasks"
									:key="index"
									:task="task"
								></task-row>
							</tbody>
						</table>
					</div>
				</div>
				<!-- <div v-if="show_completed">
					<div
						class="mb-4 hover:bg-blue-400 p-4 border border-1"
						v-for="(task, index) in complete_tasks"
						:key="index"
					>
						{{ task.title }} | Due {{ task.due_at | fromNow }} ({{
							task.due_at
						}}) |
					</div>
				</div> -->
			</div>

			<transition name="fade" mode="out-in">
				<new-task v-if="show_new">
					<button @click="show_new = !show_new" class="mt-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="w-8"
						>
							<circle
								cx="12"
								cy="12"
								r="10"
								class="primary hover:secondary"
							/>
							<path
								class="secondary hover:primary"
								d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
							/>
						</svg></button
				></new-task>
			</transition>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import PageHeader from "@/components/layout/PageHeader.vue";

	import { mapMutations, mapGetters } from "vuex";

	import NewTask from "../components/NewTask.vue";
	import TaskRow from "../components/TaskRow.vue";
	export default {
		name: "Tasks",
		components: {
			PageHeader,
			NewTask,
			TaskRow,
		},
		data() {
			return {
				show_new: false,
				show_completed: false,
			};
		},
		computed: {
			...mapGetters(["pending_tasks", "complete_tasks"]),
		},
		methods: {
			openApp(uuid) {
				var index = this.apps.findIndex((app) => {
					return app.uuid == uuid;
				});
				// window.console.log(index + uuid);
				this.selectApplication(index);
				this.$router.push("application");
			},
			...mapMutations(["selectApplication"]),
		},
	};
</script>
<style scoped>
	.body-int {
		height: calc(100vh - 14rem);
		max-height: calc(100vh - 14rem);
		min-height: calc(100vh - 14rem);
	}
</style>
