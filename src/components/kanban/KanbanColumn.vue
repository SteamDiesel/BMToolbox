<template>
	<div
		class="column min-h-full border-gray-300 border-1 border-r-0 border flex-col flex-grow p-1"
		@drop="dragDrop"
		@dragover.prevent
		@dragenter.prevent
		:id="column.status.value"
	>
		<div class="flex-none mb-4 p-2">
			{{ column.status.value }}
		</div>

		<kanban-card
			v-for="(app, index) in column.applications"
			:key="index"
			:application="app"
		></kanban-card>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import KanbanCard from "./KanbanCard.vue";
	export default {
		components: { KanbanCard },
		name: "KanbanColumn",
		props: {
			column: Object,
		},
		data() {
			return {};
		},
		computed: {
			...mapState(["applications"]),
		},
		methods: {
			dragDrop(e) {
				const card_id = e.dataTransfer.getData("card_id");
				// window.console.log("card_id is " + card_id);

				var deal_index = this.applications.findIndex((deal) => {
					return deal.uuid == card_id;
				});
				// window.console.log("Application index " + deal_index);
				const app = this.applications[deal_index];
				// window.console.log("target id is " + e.target.id);
				app.status = this.column.status;
				this.updateAppByApp(app);
				// window.console.log("drop " + e.target.id);
			},
			...mapActions(["updateAppByApp"]),

			// Parent element (column) functions
			// make parent element @draggable
			// the e.target.id for these functions point to the parent element. so any attributes given to the parent element can be accessed
			// @dragend
			// endDrag(e) {
			// 	window.console.log("end " + e.target.id); // end target is the child
			// 	setTimeout(() => {
			// 		e.target.style.display = "block";
			// 	});
			// },
			// // @dragover.stop (stop will let the 'drop' event fire)
			// dragOver(e) {
			// 	e.preventDefault();
			// 	// console.log("dragover ");
			// },
			// // @dragenter
			// dragEnter(e) {
			// 	this.destination_stage = e.target.id;
			// 	window.console.log("dragEnter " + e.target.id);
			// },
			// // @dragleave
			// dragLeave(e) {
			// 	window.console.log("dragLeave " + e.target.id);
			// },
		},
	};
</script>

<style scoped>
	.column {
		min-width: 260px;
		max-width: 260px;
	}
</style>
