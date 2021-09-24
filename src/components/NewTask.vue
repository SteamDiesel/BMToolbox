<template>
	<div class="bg-gray-200 absolute right-0  w-120 border border-gray-500 m-0">
		<div
			class="w-full bg-teal-500 text-white font-semibold px-8 py-4 text-lg"
		>
			Create task
		</div>
		<div class="p-8">
			<FormField
				:no_copy="true"
				class="w-2/5"
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
						class="ml-2 px-2 py-1 border text-red-400 hover:text-red-600 border-1 font-semibold "
						@click.prevent="deleteItem(index)"
					>
						Delete
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
			<div>
				<button
					@click="saveTask(JSON.stringify(new_task))"
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
