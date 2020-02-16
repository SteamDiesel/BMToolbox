<template>
	<div>
		<div class="flex w-full">
			<slot/>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Notes",
	methods: {
		...mapActions(["saveApplicationsToLocal"]),
	}
};
</script>

<style>
</style>