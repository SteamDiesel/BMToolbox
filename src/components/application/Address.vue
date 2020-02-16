<template>
	<div class="hover:bg-blue-100">
		<div class="flex flex-wrap">
			<FormField 
			class="w-4/5"
			@copy="copyClipboard('#'+address.address)">
				<template v-slot:label>
					Full Address
				</template>
				<input
					:id="'#'+address.address"
					v-model="address.address"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>

		</div>
		<div class="flex flex-wrap">
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+address.years)">
				<template v-slot:label>
					Years
				</template>
				<input
					:id="'#'+address.years"
					v-model="address.years"
					@change="saveApplicationsToLocal"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+address.months)">
				<template v-slot:label>
					Months
				</template>
				<input
					:id="'#'+address.months"
					v-model="address.months"
					@change="saveApplicationsToLocal"
					type="number"
					class="form-input text-center"
				/>
			</FormField>
			<FormField 
			class="w-1/4"
			@copy="copyClipboard('#'+address.status)">
				<template v-slot:label>
					Status
				</template>
				<select v-model="address.status" class="form-input text-center">
				<!-- inline object literal -->
					<option :value="'Boarding'">Boarding</option>
					<option :value="'Renting'">Renting</option>
					<option :value="'Mortgage'">Mortgage</option>
					<option :value="'Owner'">Owner</option>
				</select>	
				<!-- <DropdownMenu @select="test" :options="['Boarding', 'Renting', 'Mortgage']">
					<span v-if="address.status">{{address.status}}</span>
					<span v-if="!address.status">Select</span>
				</DropdownMenu> -->

			</FormField>
			<template v-if="index == 0">
				<FormField 
				v-if="address.status == 'Renting'"
				class="w-1/4"
				@copy="copyClipboard('#'+address.rent)">
					<template v-slot:label>
						Rent
					</template>
					<input
						:id="'#'+address.rent"
						v-model="address.rent"
						@keyup.87="address.rent = address.rent * 4.33"
						@keyup.70="address.rent = address.rent * 2.166"
						@keyup.81="address.rent = address.rent * 0.33"
						@keyup.89="address.rent = address.rent * 0.0833"
						@change="saveApplicationsToLocal"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
				<FormField 
				v-if="address.status == 'Boarding'"
				class="w-1/4"
				@copy="copyClipboard('#'+address.board)">
					<template v-slot:label>
						Board
					</template>
					<input
						:id="'#'+address.board"
						v-model="address.board"
						@keyup.87="address.board = address.board * 4.33"
						@keyup.70="address.board = address.board * 2.166"
						@keyup.81="address.board = address.board * 0.33"
						@keyup.89="address.board = address.board * 0.0833"
						@change="saveApplicationsToLocal"
						type="number"
						class="form-input text-center"
					/>
				</FormField>
			</template>
		</div>

	</div>
</template>

<script>
import {mapMutations} from 'vuex'
import FormField from '@/components/application/FormField.vue'
// import DropdownMenu from '@/components/buttons/DropdownMenu.vue'
export default {
	name: 'Address',
	components:{
		FormField,
		// DropdownMenu
	},
	props: {
		address: Object,
		index: Number
	},
	methods:{
		...mapMutations(['saveApplicationsToLocal']),
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			valueToCopy.setAttribute('type', 'text');
			valueToCopy.select();
			try {
				document.execCommand('copy');
			} catch (err) {
				alert('Oops, unable to copy');
			}
		},
	}
};
</script>

<style>
</style>