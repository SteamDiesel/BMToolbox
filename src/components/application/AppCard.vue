<template>
	<div class="p-10 rounded-lg flex items-center">
		<div>
			<slot/>
		</div>
		<div class="flex ml-4">
			<span v-for="(person, index) in app.people" :key="index">
				{{person.first_name}} {{person.surname}}
				<span class="mx-2" v-if="index+1 < app.people.length">&</span> 
			</span> 
		</div>
		
	</div>
</template>

<script>
export default {
	name: "AppCard",
	props: {
		app: Object
	},
	computed: {
		// people_count(){
		// 	return this.app.people.length
		// }
	}
};
</script>

<style>
</style>