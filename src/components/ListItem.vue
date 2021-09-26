<template>
	<div class="relative flex items-start">
		<div class="flex items-center h-5">
			<input
				:id="item.title"
				aria-describedby="comments-description"
				:name="item.title"
				type="checkbox"
				v-model="item.is_complete"
				class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
			/>
		</div>
		<div class="ml-3 text-sm" @click="edit = !edit" v-if="!edit">
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
				class="ml-2 px-1 py-1 border text-teal-800 hover:text-teal-600 border-1 font-semibold "
				@click="edit = !edit"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-5"
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
				</svg>
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
