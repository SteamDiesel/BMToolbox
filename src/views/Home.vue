<template>
	<div class="py-12 container mx-auto">

		<Calc/>

		<CalcHistory/>

	</div>
</template>

<script>
// @ is an alias to /src
import Calc from '@/components/Calc.vue'
import CalcHistory from '@/components/CalcHistory.vue'

export default {
	name: 'home',
	components: {
		Calc,
		CalcHistory
	}
}
</script>
