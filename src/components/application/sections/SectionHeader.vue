<template>
	<div class="flex justify-start">
		<h2 class="text-xl text-gray-700 mr-2">{{title}}</h2>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		title: String
	}
};
</script>

<style>
</style>