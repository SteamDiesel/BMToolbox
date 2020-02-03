<template>
	<div class="relative" @mouseleave="open = false">
		<button @click="click"
		class="w-full border-gray-400 border-1">
			<slot></slot>
		</button>
		<div v-if="open" class="absolute w-full bottom-auto">
			<slot name="menu"/>
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