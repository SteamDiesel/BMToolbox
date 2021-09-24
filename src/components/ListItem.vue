<template>
	<div class="p-1">
		<div class="flex" @click="edit = !edit" v-if="!edit">
			<div>
				{{ item.title }}
			</div>
		</div>
		<div class="flex justify-between" v-if="edit">
			<input
				:id="'#' + item.title"
				v-model="item.title"
				type="text"
				class="form-input text-left"
				@keydown.enter="edit = !edit"
			/>
			<button
				class="ml-2 px-2 py-1 border text-teal-800 hover:text-teal-600 border-1 font-semibold "
				@click="edit = !edit"
			>
				Close
			</button>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ListItem",
		props: {
			item: Object,
		},
		data() {
			return {
				edit: false,
			};
		},
	};
</script>

<style></style>
