<template>
	<div class="w-full justify-between px-8">
		<!-- Contact Log  -->
		<div class="bg-gray-100 w-full p-2  mr-4 my-4">
			<div v-show="!show" class="w-full p-4 flex justify-around">
				<button
					class="btn-primary"
					v-for="(val, index) in contact_log_types"
					:key="index"
					@click.prevent="startNote(val)"
				>
					{{ val }}
				</button>
			</div>

			<div v-show="show" class="w-full p-4">
				<select
					v-model="entry.type"
					class="bg-transparent px-2 py-1 mb-1 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
				>
					<option value="" selected>Select</option>
					<option
						v-for="(val, index) in contact_log_types"
						:key="index"
						:value="val"
						>{{ val }}</option
					>
				</select>

				<textarea
					:id="'#' + entry.notes"
					v-model="entry.notes"
					type="text"
					class="bg-transparent w-full h-32 p-4 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
				/>

				<div class="w-full flex justify-start">
					<button @click="post" class="btn-primary">Save</button>
				</div>
			</div>
		</div>

		<div class="bg-gray-200 w-2/3 mr-8 ml-4 my-4">
			<div class="internal-scroller overflow-auto overflow-none">
				<ContactHistoryCard
					v-for="(entry, index) in application.contact_log"
					:key="index"
					:entry="entry"
				>
				</ContactHistoryCard>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions, mapState } from "vuex";
	import moment from "moment";

	import ContactHistoryCard from "@/components/cards/ContactHistoryCard.vue";

	export default {
		name: "HistoryPage",
		data() {
			return {
				entry: {
					type: "",
					notes: "",
					timestamp: "",
					posted_by: "",
				},
				show: false,
			};
		},
		components: {
			ContactHistoryCard,
		},
		computed: {
			...mapState(["user_preferences", "contact_log_types"]),
			...mapGetters(["application"]),
		},
		methods: {
			post() {
				this.entry.timestamp = moment();
				this.entry.posted_by = this.user_preferences.user_name;
				this.pushNote(JSON.stringify(this.entry));
				this.show = false;
				this.$nextTick(
					(this.entry = {
						type: "",
						notes: "",
						timestamp: "",
						posted_by: "",
					})
				);
			},
			startNote(val) {
				this.show = true;
				this.entry.type = val;
			},
			...mapActions([
				"pushNote",
				"dropFromArray",
				"linkObjectToNextPerson",
			]),
		},
	};
</script>

<style>
	.internal-scroller {
		height: calc(100vh - 12rem);
	}
</style>
