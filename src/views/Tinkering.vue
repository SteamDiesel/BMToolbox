<template>
	<div class="pb-12 container mx-auto">
		<button @click="test">
			Import Application
		</button>
		<textarea  class="w-full h-32" v-model="app_import_field" ></textarea>
		<div>
			<div class="lg:flex lg:justify-around">
				<div v-for="(person, index) in import_staging.people" :key="index">
					<span v-for="(value, index) in person" :key="index">
						<span v-if="value">
							{{value}} <br>
						</span>
					</span>
				</div>
			</div>
			<div v-if="import_staging.quotes">
				{{import_staging.quotes}}
			</div>
			<div v-if="import_staging.comments">
				{{import_staging.comments}}
			</div>
			<!-- {{app_import_field}} -->
			{{import_staging}}
			{{error_message}}

		</div>
	</div>
</template>
// 
// <script>

// import { mapState, mapMutations} from "vuex";
export default {
	name: "home",
	components: {
		
	},
	data(){
		return {
			app_import_field: '',
			import_staging: '',
			error_message: '',
		}
	},
	computed: {
		// import_stage() {
		// 	return JSON.parse(this.app_import_field);
		// }
		// ...mapState(["import_stage", "app_import_field"])
	},
	methods: {
		test(){
			window.console.log('fire')
			var drp = JSON.parse(this.app_import_field)
			this.import_staging = drp
			// this.importApplication()
		},
		// ...mapMutations(["importApplication"])
	}
};
</script>
