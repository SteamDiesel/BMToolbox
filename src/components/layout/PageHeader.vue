<template>
	<div>
		<div class="w-full h-full flex justify-between py-5 items-center px-8">
			<div>
				<h2 class="text-2xl">{{title}}</h2>
			</div>
			<div class="flex justify-end items-center">
				<slot />
			</div>
			<!-- Menu -->
		</div>
		<div class="px-8 pb-4">
			<hr />
		</div>
	</div>
</template>

<script>
export default {
	props:{
		title: String
	}
};
</script>

<style>
</style>