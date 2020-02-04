<template>
	<div class="text-lg">
		<AppPage/>
	</div>
</template>

<script>
import AppPage from "@/components/application/pages/AppPage.vue";

export default {
	name: "PrintApplication",
	components: {
		AppPage
		
	},
}
</script>

<style>
@media print {
	body {zoom: 50%;}
}
</style>