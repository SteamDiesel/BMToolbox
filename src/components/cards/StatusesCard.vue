<template>
	<div
		class="border-grey-400 border-2 rounded-lg px-4 py-2 my-2"
		:style="{ 'background-color': status.color }"
	>
		<div v-if="is_edit" class="flex justify-between">
			<input type="color" v-model="status.color" />
			<input type="text" placeholder="Value" v-model="status.value" />
			<button
				@click="done"
				class="bg-teal-300 font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded"
			>
				Done
			</button>
		</div>
		<div v-if="!is_edit" class="flex justify-between">
			<div class="font-bold text-lg">
				{{ status.value }}
			</div>
			<div>
				<button
					@click="editing"
					class="bg-teal-300 font-semibold hover:bg-teal-200 px-4 py-2 border border-teal-600 rounded"
				>
					Edit
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "StatusesCard",
		props: {
			status: Object,
		},
		data() {
			return {
				is_edit: false,
				original_value: "",
			};
		},
		computed: {},
		methods: {
			editing() {
				this.is_edit = true;
				this.original_value = this.status.value;
			},
			done() {
				this.is_edit = false;
				window.console.log(this.original_value);
				window.console.log(this.status.value);
			},
		},
	};
</script>

<style></style>
