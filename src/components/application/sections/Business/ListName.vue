<template>
	<div class="flex w-full justify-between">
		<div class="cursor-pointer" @click="show = !show">
			{{ ben.name }}
		</div>
		<div v-if="show">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Beneficiary",
		props: { ben: Object },
		data() {
			return {
				show: false,
			};
		},
	};
</script>

<style></style>
