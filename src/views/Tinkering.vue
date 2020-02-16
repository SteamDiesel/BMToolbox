<template>
	<div class="pb-12 container items-center justify-center w-full h-full">
		
		{{stringified}}
		
	</div>
</template>


<script>

import { mapGetters } from 'vuex'

export default {
	name: "Tinkering",
	components: {},
	data(){
		return {
			
		}
	},
	computed: {
		...mapGetters(["application"]),
		stringified(){
			return JSON.stringify(this.application)
		}
	},
	methods: {
		
	}
};
</script>
