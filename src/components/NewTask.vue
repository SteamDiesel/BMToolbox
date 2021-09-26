<template>
	<div
		class="bg-gray-200 absolute right-0 top-0 mt-12 w-120 border border-gray-500 m-0"
	>
		<div
			class="flex h-16 justify-between items-center w-full bg-teal-500 text-white font-semibold px-8  text-lg"
		>
			<div>Create task</div>

			<div class="">
				<slot></slot>
			</div>
		</div>
		<div class="px-8 pt-4 pb-8">
			<FormField
				:no_copy="true"
				class="w-full"
				@copy="copyClipboard('#' + new_task.application_id)"
			>
				<template v-slot:label>
					Application
				</template>
				<select
					v-model="new_task.application_id"
					class=" rounded w-full font-semibold text-blue-600 hover:underline"
				>
					<option value="" class="p-2" selected>None</option>
					<option
						v-for="(app, index) in applications"
						:value="app.uuid"
						:key="index"
						class="p-2"
					>
						<span
							v-for="(person, index) in app.people"
							:key="index"
						>
							{{ person.first_name }} {{ person.surname }}

							<span
								class="mx-2"
								v-if="index + 1 < app.people.length"
								>&</span
							>
						</span>
					</option>
				</select>
			</FormField>
			<FormField
				:no_copy="true"
				class="w-3/5"
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

			<FormField
				:no_copy="true"
				class="w-full"
				@copy="copyClipboard('#' + new_task.description)"
			>
				<template v-slot:label>
					Description
				</template>
				<input
					:id="'#' + new_task.description"
					v-model="new_task.description"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField
				:no_copy="true"
				class="w-full"
				@copy="copyClipboard('#' + list_item.title)"
			>
				<template v-slot:label>
					Checklist Item
				</template>
				<input
					:id="'#' + list_item.title"
					v-model="list_item.title"
					type="text"
					class="form-input text-left"
					@keydown.enter="addItem"
				/>
			</FormField>
			<div
				v-if="new_task.checklist.length"
				class=" border border-1 border-grey-300 m-4"
			>
				<list-item
					v-for="(item, index) in new_task.checklist"
					:item="item"
					:key="index"
				>
					<button
						class="ml-2 px-1 py-1 border text-red-400 hover:text-red-600 border-1 font-semibold "
						@click.prevent="deleteItem(index)"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="w-5"
						>
							<path
								class="fill-current text-red-500"
								d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
							/>
							<path
								class="fill-current text-red-800"
								d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
							/>
						</svg>
					</button>
				</list-item>
			</div>

			<div class="flex">
				<FormField
					:no_copy="true"
					class="w-3/5"
					@copy="copyClipboard('#' + new_task.due_at)"
				>
					<template v-slot:label>
						Due {{ new_task.due_at | fromNow }}
					</template>
					<input
						:id="'#' + new_task.due_at"
						v-model="new_task.due_at"
						type="datetime-local"
						class="form-input text-center"
					/>
				</FormField>
				<FormField
					:no_copy="true"
					class="w-2/5"
					@copy="copyClipboard('#' + new_task.priority)"
				>
					<template v-slot:label>
						Priority
					</template>
					<select
						v-model="new_task.priority"
						class=" rounded w-full font-semibold text-blue-600 hover:underline"
					>
						<option value="Medium" class="p-2" selected
							>Medium</option
						>
						<option value="High" class="p-2">High</option>
						<option value="Low" class="p-2">Low</option>
					</select>
				</FormField>
			</div>
			<div class="mt-4 ml-2">
				<button
					@click="save()"
					class="bg-transparent font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded mr-4"
				>
					Save Task
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	import FormField from "./application/FormField.vue";
	import ListItem from "./ListItem.vue";
	import { mapActions, mapState } from "vuex";
	export default {
		name: "NewTask",
		components: {
			FormField,
			ListItem,
		},
		props: {},
		data() {
			return {
				list_item: { is_complete: false, title: "" },
				new_task: {
					application_id: "",
					application_name: "",
					title: "",
					description: "",
					priority: "Medium",
					created_at: "",
					due_at: "",
					updated_at: "",
					is_complete: false,
					checklist: [],
					comments: [],
					cascade_task: [],
				},
			};
		},
		computed: {
			...mapState(["applications"]),
		},
		methods: {
			addItem() {
				this.new_task.checklist.splice(0, 0, this.list_item);
				// this.$nextTick(
				this.list_item = { is_complete: false, title: "" };
				// );
			},
			deleteItem(index) {
				this.new_task.checklist.splice(index, 1);
			},
			save() {
				this.saveTask(JSON.stringify(this.new_task));
				this.new_task = {
					application_id: "",
					application_name: "",
					title: "",
					description: "",
					priority: "Medium",
					created_at: "",
					due_at: "",
					updated_at: "",
					is_complete: false,
					checklist: [],
					comments: [],
					cascade_task: [],
				};
			},

			...mapActions(["saveTask"]),
		},
		mounted() {
			this.new_task.due_at = moment()
				.add(2, "d")
				.format("YYYY-MM-DTHH:mm");
		},
	};
</script>

<style></style>
