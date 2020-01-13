<template>
	<button @click="click"
	:class="{ 'bg-teal-200': value, 'bg-gray-300': !value }"
	class="relative w-32 h-6 border-gray-400 border-2 shadow-lg rounded-full text-sm">
		<span v-if="value">
			{{is_true}}
		</span>
		
		<span v-if="!value">
			{{is_false}}
		</span>
		
		<div class="absolute top-0 m-1 bg-teal-700 h-3 w-3 rounded-full" 
		:class="{ 'left-0': !value, 'right-0': value }">

		</div>
	</button>
</template>

<script>

export default {
	name: "ToggleSwitch",
	props: {
		value: Boolean,
		is_true: String,
		is_false: String,
	},
	data(){
		return{
			// value: true,
			// is_true: 'true',
			// is_false: 'false',
		}
	},
	methods:{
		click(){
			this.$emit('toggle')
		}
	}
};
</script>

<style>
</style>