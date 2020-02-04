<template>
	<div>
		<div class="flex w-full">
			<slot/>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	name: "Notes",
	methods: {
		...mapMutations(["saveApplicationsToLocal"]),
	}
};
</script>

<style>
</style>