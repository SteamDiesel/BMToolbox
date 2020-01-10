<template>
	<div>
		<div class="relative border-gray-500 border-b border-b-2 mt-4 mx-2">
			<label class="text-sm whitespace-no-wrap">
				<slot name="label"/>
			</label><br>
			<slot/>
			<div
				@click="$emit('copy')"
				class="cursor-pointer absolute bottom-0 right-0 no-print m-1"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24">
					<rect width="14" height="14" x="3" y="3" class="secondary" rx="2" />
					<rect width="14" height="14" x="7" y="7" class="primary" rx="2" />
				</svg>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'FormField',
	methods: {

	}
};
</script>

<style>
</style>