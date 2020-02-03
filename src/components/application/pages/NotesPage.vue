<template>
	<div class="flex h-full m-1">
		<!-- Notes  -->
		<div class="bg-gray-100 p-2">
			<h2 class="text-xl">Notes</h2>

			<Notes>
				<textarea
					:id="'#'+application.notes"
					v-model="application.notes"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-left w-full h-24 hover:bg-blue-200"
				/>
			</Notes>
		</div>
		<!-- Contact Log  -->
		<div class="mt-2 bg-gray-100 p-2">
			<h2 class="text-xl">Contact History</h2>

			<ContactLog class="h-full" :entries="application.contact_log" />
		</div>
	</div>
</template>

<script>
import Notes from "@/components/application/Notes.vue";
import ContactLog from "@/components/application/ContactLog.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "AppDetails",
	components: {
		Notes,
		ContactLog
	},
	computed: {
		...mapGetters(["application"])
	},
	methods: {
		...mapMutations(["saveApplicationsToLocal"])
	}
};
</script>

<style>
</style>