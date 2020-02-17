<template>
	<div class="flex w-full justify-between">
		<!-- Contact Log  -->
		<div class="bg-gray-100 w-1/3 p-2 ml-8 mr-4 my-4">
			<div class="w-full p-4">
				
				<select v-model="entry.type" class="bg-transparent px-2 py-1 mb-1 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100">
					<option value="" selected>Select</option>
					<option v-for="(val, index) in contact_log_types" :key="index" :value="val">{{val}}</option>
				</select>
				
				<textarea
					:id="'#'+entry.notes"
					v-model="entry.notes"
					type="text"
					class="bg-transparent w-full h-64 p-4 rounded border border-gray-300 focus:border-teal-500 focus:bg-teal-100 hover:bg-teal-100"
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
				posted_by: ""
			}
		};
	},
	components: {
		ContactHistoryCard
	},
	computed: {
		...mapState(["user_preferences", "contact_log_types"]),
		...mapGetters(["application"])
	},
	methods: {
		post() {
			var entry = {};
			this.entry.timestamp = moment();
			this.entry.posted_by = this.user_preferences.user_name;
			Object.assign(entry, this.entry);
			this.application.contact_log.unshift(entry);
			this.saveApp();
			this.entry.timestamp = "";
			this.entry.type = "";
			this.entry.notes = "";
		},
		...mapActions(["saveApp"])
	}
};
</script>

<style>
.internal-scroller {
	height: calc(100vh - 12rem);
}
</style>