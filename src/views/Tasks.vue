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
					Pending
				</button>
				<button
					@click="show_completed = true"
					class="py-2 px-3 flex justify-center md:justify-start rounded hover:bg-gray-300"
				>
					Complete
				</button>
			</div>
			<div class="px-4 w-full">
				<div v-if="!show_completed">
					<div
						class="w-full flex justify-center overflow-y-auto overscroll-contain body-int"
					>
						<div>
							<task-row
								v-for="(task, index) in pending_tasks"
								:key="index"
								:task="task"
							>
								<button @click="openTask(task)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="w-8"
									>
										<path
											class="primary"
											d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"
										/>
										<path
											class="secondary"
											d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"
										/>
									</svg>
								</button>
							</task-row>
						</div>
					</div>
				</div>
				<div v-if="show_completed">
					<div
						class="w-full flex justify-center overflow-y-auto overscroll-contain body-int"
					>
						<div>
							<task-row
								v-for="(task, index) in complete_tasks"
								:key="index"
								:task="task"
							>
								<button @click="openTask(task)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										class="w-8"
									>
										<path
											class="primary"
											d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"
										/>
										<path
											class="secondary"
											d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"
										/>
									</svg>
								</button>
							</task-row>
						</div>
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
					<button
						@click="(show_new = !show_new), (show_edit = false)"
						class="mt-1"
					>
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
			<transition name="fade" mode="out-in">
				<edit-task @delete="show_edit = false" v-if="show_edit">
					<button
						@click="(show_edit = !show_edit), (show_new = false)"
						class="mt-1"
					>
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
				></edit-task>
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
	import EditTask from "../components/EditTask.vue";
	export default {
		name: "Tasks",
		components: {
			PageHeader,
			NewTask,
			TaskRow,
			EditTask,
		},
		data() {
			return {
				show_edit: false,
				show_new: false,
				show_completed: false,
			};
		},
		computed: {
			...mapGetters(["pending_tasks", "complete_tasks", "current_task"]),
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
			openTask(task) {
				this.show_edit = true;
				this.selectTask(task);
			},
			...mapMutations(["selectApplication", "selectTask"]),
		},
	};
</script>
<style>
	.body-int {
		height: calc(100vh - 14rem);
		max-height: calc(100vh - 14rem);
		min-height: calc(100vh - 14rem);
	}
</style>
