<template>
	<div class="pb-12 container mx-auto">
		<button @click="importApplication(app_import_field)">
			Import
		</button>
		<textarea @change="check" class="w-full h-32" v-model="app_import_field" ></textarea>
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

		</div>
	</div>
</template>


<script>

import { mapMutations } from "vuex";

export default {
	name: "Tinkering",
	components: {},
	data(){
		return {
			app_import_field: '',
			import_staging: '',
		}
	},
	computed: {
	
	},
	methods: {
		check(){
			var drp = JSON.parse(this.app_import_field)
			this.import_staging = drp
		},
		...mapMutations(["importApplication"])
	}
};
</script>
