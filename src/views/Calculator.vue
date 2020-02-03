<template>
	<div>
		<PageHeader	 title="Loan Calculator">
			<NewApplicationButton />
		</PageHeader>
		
		<Calc/>

		<CalcHistory/>

	</div>
</template>

<script>
// @ is an alias to /src
import Calc from '@/components/Calc.vue'
import CalcHistory from '@/components/CalcHistory.vue'
import NewApplicationButton from '@/components/buttons/NewApplicationButton.vue'
import PageHeader from '@/components/layout/PageHeader.vue'

export default {
	name: 'Calculator',
	components: {
		Calc,
		CalcHistory,
		NewApplicationButton,
		PageHeader
	}
}
</script>