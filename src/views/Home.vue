<template>
	<div class="container mx-auto">
		<div class="w-full h-full flex justify-between py-1 items-center">
			<NewApplicationButton />
		</div>
		
		<Calc/>

		<CalcHistory/>

	</div>
</template>

<script>
// @ is an alias to /src
import Calc from '@/components/Calc.vue'
import CalcHistory from '@/components/CalcHistory.vue'
import NewApplicationButton from '@/components/buttons/NewApplicationButton.vue'

export default {
	name: 'home',
	components: {
		Calc,
		CalcHistory,
		NewApplicationButton
	}
}
</script>
