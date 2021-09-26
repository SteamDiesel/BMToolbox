<template>
	<div
		class="bg-gray-200 absolute right-0 top-0 mt-12 w-120 border border-gray-500 m-0"
	>
		<div
			class="flex h-16 justify-between items-center w-full bg-teal-200 font-semibold px-8  text-lg"
		>
			<div class="flex">
				<check-box
					:value="current_task.is_complete"
					@toggle="
						current_task.is_complete = !current_task.is_complete
					"
				></check-box>
				<div class="ml-4">
					<div v-if="!current_task.is_complete">Pending</div>

					<div v-if="current_task.is_complete">Complete</div>
				</div>
			</div>

			<div class="">
				<slot></slot>
			</div>
		</div>
		<div class="px-8 pt-4 pb-8 ">
			<div class="text-lg font-semibold px-2">
				{{ current_task.application_name }}
			</div>
			<div class="flex justify-between">
				<FormField
					:no_copy="true"
					class="w-3/5"
					@copy="copyClipboard('#' + current_task.title)"
				>
					<template v-slot:label>
						Title
					</template>
					<input
						@change="updateTask(current_task)"
						:id="'#' + current_task.title"
						v-model="current_task.title"
						type="text"
						class="form-input text-center"
					/>
				</FormField>
				<button
					class="p-1 text-red-400 hover:text-red-600 "
					@click.prevent="del"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="w-8"
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
			</div>

			<FormField
				:no_copy="true"
				class="w-full"
				@copy="copyClipboard('#' + current_task.description)"
			>
				<template v-slot:label>
					Description
				</template>
				<input
					@change="updateTask(current_task)"
					:id="'#' + current_task.description"
					v-model="current_task.description"
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
					@change="updateTask(current_task)"
					:id="'#' + list_item.title"
					v-model="list_item.title"
					type="text"
					class="form-input text-left"
					@keydown.enter="addItem"
				/>
			</FormField>
			<div
				v-if="current_task.checklist.length"
				class=" border border-1 border-grey-300 m-4"
			>
				<list-item
					v-for="(item, index) in current_task.checklist"
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
					@copy="copyClipboard('#' + current_task.due_at)"
				>
					<template v-slot:label>
						Due {{ current_task.due_at | fromNow }}
					</template>
					<input
						@change="updateTask(current_task)"
						:id="'#' + current_task.due_at"
						v-model="current_task.due_at"
						type="datetime-local"
						class="form-input text-center"
					/>
				</FormField>
				<FormField
					:no_copy="true"
					class="w-2/5"
					@copy="copyClipboard('#' + curren_task.priority)"
				>
					<template v-slot:label>
						Priority
					</template>
					<select
						@change="updateTask(current_task)"
						v-model="current_task.priority"
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
				<FormField
					:no_copy="true"
					class="w-full"
					@copy="copyClipboard('#' + comment.content)"
				>
					<template v-slot:label>
						Add new comment
					</template>
					<textarea
						:id="'#' + comment.content"
						v-model="comment.content"
						type="text"
						class="form-input text-left"
						@keydown.enter="addComment"
					></textarea>
				</FormField>
				<div
					v-if="current_task.comments.length"
					class="h-80  overflow-y-auto overscroll-contain"
				>
					<div
						class="mb-4 mx-2"
						v-for="(comment, index) in current_task.comments"
						:key="index"
					>
						<div>
							{{ comment.content }}
						</div>
						<div>
							{{ comment.timestamp | fromNow }}
						</div>
						<!-- <button
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
					</button> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	import FormField from "./application/FormField.vue";
	import ListItem from "./ListItem.vue";
	import { mapActions, mapGetters, mapState } from "vuex";
	import CheckBox from "./buttons/CheckBox.vue";
	export default {
		name: "EditTask",
		components: {
			FormField,
			ListItem,
			CheckBox,
		},
		props: {},
		data() {
			return {
				list_item: { is_complete: false, title: "" },
				comment: { content: "", timestamp: "" },
			};
		},
		computed: {
			...mapState(["applications"]),
			...mapGetters(["current_task"]),
		},
		methods: {
			addItem() {
				this.current_task.checklist.splice(0, 0, this.list_item);
				// this.$nextTick(
				this.list_item = { is_complete: false, title: "" };
				// );
			},
			addComment() {
				this.comment.timestamp = moment().format("YYYY-MM-DTHH:mm");
				this.current_task.comments.splice(0, 0, this.comment);
				// this.$nextTick(
				this.comment = { content: "", timestamp: "" };
				// );
			},
			deleteItem(index) {
				this.current_task.checklist.splice(index, 1);
			},
			deleteComment(index) {
				this.current_task.checklist.splice(index, 1);
			},
			del() {
				this.$emit("delete");
				this.deleteTask(this.current_task);
			},

			...mapActions(["updateTask", "deleteTask"]),
		},
		mounted() {
			// this.current_task.due_at = moment().format("YYYY-MM-DTHH:mm");
		},
	};
</script>

<style>
	.slide-fade-enter-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
