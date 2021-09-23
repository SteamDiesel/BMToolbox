<template>
	<div class="flex overflow-auto">
		<div v-for="(column, index) in sorted_applications" :key="index">
			<kanban-column :column="column">
				<kanban-card
					v-for="(app, index) in column.applications"
					:key="index"
					:application="app"
				></kanban-card>
			</kanban-column>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	import KanbanCard from "./KanbanCard.vue";

	import KanbanColumn from "./KanbanColumn.vue";
	export default {
		name: "AppsKanban",
		components: {
			KanbanColumn,
			KanbanCard,
		},
		data() {
			return {};
		},
		watch: {},
		computed: {
			sorted_applications() {
				var apps = [];
				this.user_preferences.app_statuses.forEach((status) => {
					apps.push({
						status: status,
						applications: this.applications.filter((app) => {
							return app.status.value == status.value;
						}),
					});
				});
				// window.console.log("sorting apps....");
				return apps;
			},
			...mapState(["applications", "user_preferences"]),
		},
		methods: {
			openApp(index) {
				this.selectApplication(index);
				this.$router.push("application");
			},

			...mapActions(["selectApplication"]),
		},
	};
</script>

<style></style>
