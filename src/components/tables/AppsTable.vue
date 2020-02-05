<template>
	<div class="w-full">
		<table class="w-full h-full table-fixed">
			<thead class="w-full">
				<tr class="text-xs uppercase bg-gray-200 w-full">
					<th class="py-3 text-left px-3 border-t w-10 border-r border-gray-400"></th>
					<th class="py-3 text-left px-3 border-t border-r border-gray-400">Name</th>
					<th class="py-3 text-left px-3 border-t border-r border-gray-400">Vehicle</th>
					<th class="py-3 text-left px-3 border-t border-r border-gray-400">NAF</th>
					<th class="py-3 text-left px-3 border-t border-r border-gray-400">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-b border-gray-400" v-for="(app, index) in applications" :key="index">
				<td class="py-3 text-left px-3" ></td>
				<td class="py-3 text-left px-3 hover:text-blue-600 hover:underline font-semibold cursor-pointer"  @click="openApp(index)">
					
						<span v-for="(person, index) in app.people" :key="index">
							{{person.first_name}} {{person.surname}}<span
								class="mx-2"
								v-if="index+1 < app.people.length"
							>&</span>
						</span>
					
					
				</td>
				<td class="py-3 text-left px-3" >
					{{app.vehicle.year}} {{app.vehicle.make}} {{app.vehicle.model}} {{app.vehicle.badge}}
					
				</td>
				<td class="py-3 text-left px-3" >
					{{app.loan_calculator.full_naf}}
				</td>
				<td class="py-3 text-left px-3" >
					{{app.status}}
				</td>
			</tr>
			</tbody>
			
			
		</table>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
	name: "AppCard",
	computed: {
		...mapState(["applications"])
	},
	methods: {
		openApp(index) {
			this.selectApplication(index);
			this.$router.push("application");
		},
		...mapMutations(["selectApplication"]),
		...mapActions(["deleteApplication"])
	}
};
</script>

<style>

</style>