<template>
	<div class="w-full">
		<div class="bg-gray-200 p-8">
			<PurposeGoods class="md:w-160" v-if="application.vehicle" :vehicle="application.vehicle" />
		</div>
	</div>
</template>

<script>

import PurposeGoods from "@/components/application/PurposeGoods.vue";
import { mapGetters } from "vuex";

export default {
	name: "VehiclePage",
	components: {
		PurposeGoods
	},
	computed: {
		...mapGetters(["application"])
	},
	methods: {}
};
</script>

<style>
</style>