<template>
	<div class="">
		<div class="h-80 overflow-y-scroll">
			<div
				v-for="(entry, index) in entries"
				:key="index"
				:id="'#comment' + index"
				class="flex hover:bg-blue-100 m-2 p-1 bg-gray-200"
			>
				<div class="w-1/5">
					<div class="text-sm">{{entry.type}}</div>
					<div class="text-xs" :title="entry.timestamp | dateTimeFormat">{{entry.timestamp | fromNow}}</div>
				</div>
				<div class="w-4/5">
					<div>{{entry.notes}}</div>
					<div class="text-xs">- {{entry.posted_by}}</div>
				</div>
			</div>
		</div>
		<div class="flex">
			<FormField class="w-1/5" @copy="copyClipboard('#'+entry.type)">
				<template v-slot:label>Type</template>
				<input :id="'#'+entry.type" v-model="entry.type" type="text" class="form-input text-center" />
			</FormField>
			<FormField class="w-3/5" @copy="copyClipboard('#'+entry.notes)">
				<template v-slot:label>Notes</template>
				<textarea
					:id="'#'+entry.notes"
					v-model="entry.notes"
					type="text"
					class="form-input text-left"
				/>
			</FormField>
			<div class="w-1/5 flex items-center justify-center">
				<button
					@click="post"
					class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full font-semibold text-teal-500"
				>Post</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import moment from 'moment'
import FormField from "@/components/application/FormField.vue";
export default {
	name: "ContactLog",
	components: {
		FormField
	},
	props: {
		entries: Array
	},
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
	computed: {
		
		...mapState(["user_preferences"])
	},
	methods: {
		focusOnLast(){
			var lastIndex = this.entries.length - 1
			window.console.log(lastIndex)
			this.$nextTick(function(){
				document.getElementById('#comment' + lastIndex).scrollIntoView(false)
			})
		},
		post() {
			var entry = {}
			this.entry.timestamp = moment()
			this.entry.posted_by = this.user_preferences.user_name
			Object.assign(entry, this.entry)
			this.pushToArray({ type: "contact", entry: entry, array: this.entries })
			this.entry.timestamp = ""
			this.entry.type = ""
			this.entry.notes = ""
			this.focusOnLast()
		},
		...mapMutations(["saveApplicationsToLocal"]),
		...mapActions(["pushToArray"]),
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			valueToCopy.setAttribute("type", "text");
			valueToCopy.select();
			try {
				document.execCommand("copy");
			} catch (err) {
				alert("Oops, unable to copy");
			}
		}
	},
	mounted(){
		if(this.entries.length > 2){
			this.focusOnLast()
		}
		
	}
};
</script>

<style>
</style>