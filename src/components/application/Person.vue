<template>
	<div class="w-160">
		<div class="md:flex md:justify-between border-gray-600 border-b border-b-2 mt-6">
			<label class="font-semibold whitespace-no-wrap">First Name</label>
			<input
				v-model="person.first_name"
				type="text"
				class="appearance-none bg-transparent border-none w-full text-center text-gray-700 mr-1 px-1 leading-tight focus:outline-none"
			/>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Person',
	props: {
		person: Object
	}
};
</script>

<style>
</style>