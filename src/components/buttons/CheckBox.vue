<template>
	<button @click="click"
	
	class=" w-6 h-6 ">
		<span v-if="value">
			<svg width="300" height="300" viewBox="0 0 300 300" fill="none" class="h-full w-full">
			<path class="primary text-primary" d="M10 270V30C10 19.4314 19.1717 10 31.5789 10H268.421C280.828 10 290 19.4314 290 30V270C290 280.569 280.828 290 268.421 290H31.5789C19.1717 290 10 280.569 10 270Z" stroke-width="20"/>
			<path class="secondary text-secondary" d="M108.959 191.57L238.238 64.7521C242.187 61.4797 247.25 59.79 252.414 60.0209C257.578 60.2517 262.463 62.3861 266.092 65.9972C269.722 69.6084 271.828 74.4303 271.99 79.4989C272.152 84.5675 270.358 89.5094 266.966 93.3366L123.323 234.246C119.488 237.934 114.33 240 108.959 240C103.588 240 98.4308 237.934 94.5949 234.246L33.0337 173.856C29.6421 170.029 27.848 165.087 28.0101 160.018C28.1721 154.95 30.2784 150.128 33.9078 146.517C37.5371 142.906 42.4222 140.771 47.5863 140.54C52.7505 140.31 57.8131 141.999 61.7623 145.272L108.959 191.57Z"/>
			</svg>
		</span>
		
		<span v-if="!value">
			<svg width="300" height="300" viewBox="0 0 300 300" fill="none" class="h-full w-full" >
			<path class="stroke-secondary" d="M10 270V30C10 19.4314 19.1717 10 31.5789 10H268.421C280.828 10 290 19.4314 290 30V270C290 280.569 280.828 290 268.421 290H31.5789C19.1717 290 10 280.569 10 270Z"  stroke-width="20"/>
			</svg>
		</span>
	</button>
</template>

<script>

export default {
	name: "CheckBox",
	props: {
		value: Boolean,
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