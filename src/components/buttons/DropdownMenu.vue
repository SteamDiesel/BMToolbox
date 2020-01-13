<template>
	<div class="relative">
		<button @click="click"
		class="w-full border-gray-400 border-1">
			<slot></slot>
		</button>
		<div v-if="open" class="absolute w-full bottom-auto">
			<button
			@click="select(option)"
			class="w-full focus:bg-blue-200 z-10 hover:bg-blue-200" v-for="(option, index) in options" :key="index">
				{{option}}
			</button>
		</div>
	</div>
	
</template>

<script>

export default {
	name: "DropdownMenu",
	props: {
		options: Array,
	},
	data(){
		return{
			open: false,
		}
	},
	methods:{
		click(){
			this.open = !this.open
		},
		select(option){
			this.open = !this.open
			this.$emit('select', option)
		}
	}
};
</script>

<style>
</style>