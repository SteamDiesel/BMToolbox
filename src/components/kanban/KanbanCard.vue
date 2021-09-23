<template>
	<div
		class="border border-gray-400 p-2 m-1"
		draggable="true"
		@dragstart="startDrag"
		:id="application.uuid"
	>
		{{ application.status.value }}
		<span v-for="(person, index) in application.people" :key="index">
			{{ person.first_name }} {{ person.surname }}

			<span class="mx-2" v-if="index + 1 < application.people.length"
				>&</span
			>
		</span>
	</div>
</template>

<script>
	export default {
		name: "KanbanCard",
		props: {
			application: Object,
			renders: Number,
		},
		data() {
			return {};
		},
		methods: {
			// Child/card components

			startDrag(e) {
				// window.console.log("startDrag " + e.target.id);
				// window.console.log(item);
				// this.deal_id = e.target.id;
				e.dataTransfer.dropEffect = "move";
				e.dataTransfer.effectAllowed = "move";
				e.dataTransfer.setData("card_id", e.target.id);
				setTimeout(() => {
					// e.target.style.display = "none";
					// e.target.style.opacity = "0.4";
				});
			},
		},
	};
</script>

<style></style>
