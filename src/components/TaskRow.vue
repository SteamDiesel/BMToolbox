<template>
	<div class="border border-1 flex hover:bg-blue-100 border-gray-400 mb-4">
		<div class="py-3 text-left px-3"></div>
		<div class="py-3 text-left px-3 w-64">
			<span class="font-semibold">
				{{ task.title }}
			</span>
			<br />
			{{ task.description }}
		</div>
		<div class="py-3 text-left px-3 w-64">
			<span
				class=" hover:text-blue-600 hover:underline font-semibold cursor-pointer"
				@click="openApp(task.application_id)"
			>
				{{ task.application_name }}
			</span>
		</div>
		<div class="py-3 text-left px-3 w-64">
			<div class=""></div>
			<div
				v-for="(item, index) in task.checklist"
				:key="index"
				class="relative flex items-start"
			>
				<div class="flex items-center h-5">
					<input
						:id="item.title"
						aria-describedby="comments-description"
						:name="item.title"
						type="checkbox"
						v-model="item.is_complete"
						@change="updateTask(task)"
						class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label :for="item.title" class="">{{ item.title }}</label>
				</div>
			</div>
		</div>
		<div class="py-3 text-left px-3 w-64">
			Due {{ task.due_at | fromNow }} <br />
			({{ task.due_at | dateTimeFormat }})
		</div>
		<div class="py-3 text-left px-3">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
		components: {},
		name: "TaskRow",
		props: {
			task: Object,
		},
		data() {
			return {};
		},
		computed: {
			...mapState({
				tasks: (state) => state.tasksmodule.tasks,
				apps: (state) => state.applications,
			}),
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

			...mapActions(["updateTask"]),
			...mapMutations(["selectApplication", "selectTask"]),
		},
		mounted() {
			this.is_complete_proxy = this.task.is_complete;
		},
	};
</script>

<style scoped></style>
