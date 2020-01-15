<template>
	<div class="pb-12 container mx-auto">
		<button @click="test">
			test
		</button>
		<div>
			<div v-for="app in applications" :key="app.uuid">
				{{app}}
			</div>
		</div>
	</div>
</template>
// 
// <script>

import { mapState, mapActions} from "vuex";
export default {
	name: "home",
	components: {
		
	},
	computed: {
		
		...mapState(["applications"])
	},
	methods: {
		test(){
			this.createManyApplications()
		},
		...mapActions(["createManyApplications"])
	}
};
</script>
