<template>
	<div
		class="border border-gray-400 p-2 mx-1 mb-2 flex"
		draggable="true"
		@dragstart="startDrag"
		:id="application.uuid"
	>
		<div>
			<button
				@click.prevent="openApp(application.uuid)"
				class="hover:text-indigo-600 text-gray-800 font-semibold text-left"
			>
				<span v-for="(person, index) in application.people" :key="index"
					>{{ person.first_name }} {{ person.surname
					}}<span
						class=""
						v-if="index + 1 < application.people.length"
						><br />
					</span>
				</span>
			</button>

			<div class="text-xs text-grey-400">
				{{ application.vehicle.year }}
				{{ application.vehicle.make }}
				{{ application.vehicle.model }}
				{{ application.vehicle.badge }}
			</div>
			<div class="text-xs text-grey-400">
				NAF: {{ application.loan_calculator.full_naf | toCurrency }}
			</div>
			<div v-if="application.is_archived" class="text-xs text-grey-400">
				ARCHIVED
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "KanbanCard",
		props: {
			application: Object,
			renders: Number,
		},
		data() {
			return {};
		},
		computed: {
			...mapState(["applications"]),
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

			openApp(uuid) {
				var index = this.applications.findIndex((app) => {
					return app.uuid == uuid;
				});
				this.selectApplication(index);
				this.$router.push("application");
			},
			...mapActions(["selectApplication"]),
		},
	};
</script>

<style></style>
