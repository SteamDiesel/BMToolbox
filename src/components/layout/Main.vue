<template>
	<div class="h-full">
		<TopBar />	
		<div>
			<slot />
		</div>
	</div>
</template>

<script>
import TopBar from "@/components/layout/TopBar.vue";
export default {
	name: "Main",
	components: {
		TopBar
	}
};
</script>

<style>
</style>