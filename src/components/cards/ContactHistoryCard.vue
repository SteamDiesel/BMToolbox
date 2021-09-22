<template>
	<div class="mb-4 shadow-md p-1 bg-gray-100">
		<div class="flex w-full justify-between px-4 pt-4">
			<div class="font-semibold text-lg">{{ entry.type }}</div>
			<div>
				<div class="text-xs" :title="entry.timestamp | dateTimeFormat">
					{{ entry.timestamp | fromNow }}
				</div>
			</div>
		</div>
		<div class="w-full px-4">
			<div
				@click="edit_note = true"
				v-if="!edit_note"
				class="w-full px-2 py-1 border border-gray-100 hover:border-teal-500 hover:bg-teal-100 rounded"
			>
				{{ entry.notes }}
			</div>
			<div v-if="edit_note">
				<textarea
					class="w-full h-64 p-4 rounded border border-teal-500 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
					v-model="entry.notes"
				></textarea>
				<button @click="close" class="btn-secondary">
					Close
				</button>
			</div>
		</div>
		<div class="px-4 pb-4">
			<div class="text-xs">- {{ entry.posted_by }}</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		props: {
			entry: Object,
		},
		data() {
			return {
				edit_note: false,
			};
		},
		methods: {
			close() {
				this.edit_note = false;
				this.updateField();
			},
			...mapActions(["updateField"]),
		},
	};
</script>

<style></style>
