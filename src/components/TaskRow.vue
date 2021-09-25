<template>
	<tr class="border-b border-gray-400">
		<td v-if="!open" class="py-3 text-left px-3"></td>
		<td @click="open = !open" class="py-3 text-left px-3">
			{{ task.title }} <br />
			{{ task.description }}
		</td>
		<td class="py-3 text-left px-3">
			<span
				class=" hover:text-blue-600 hover:underline font-semibold cursor-pointer"
				@click="openApp(task.application_id)"
			>
				{{ task.application_name }}
			</span>
		</td>
		<td class="py-3 text-left px-3">
			<div class=""></div>
			<div
				v-for="(item, index) in task.checklist"
				:key="index"
				class="relative flex items-start"
			>
				<div class="flex items-center h-5">
					<input
						id="item.title"
						aria-describedby="comments-description"
						name="comments"
						type="checkbox"
						:value="item.is_complete"
						@change="updateTask(task)"
						class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for="item.title" class="font-medium text-gray-700">{{
						item.title
					}}</label>
					<!-- <span id="comments-description" class="text-gray-500"
						><span class="sr-only">New comments </span>so you always
						know what's happening.</span
					> -->
				</div>
			</div>
		</td>
		<td class="py-3 text-left px-3">
			{{ task.due_at | fromNow }} <br />
			({{ task.due_at | dateTimeFormat }})
		</td>
	</tr>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
		name: "TaskRow",
		props: {
			task: Object,
		},
		data() {
			return {
				open: false,
			};
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
			...mapMutations(["selectApplication"]),
		},
	};
</script>

<style></style>
