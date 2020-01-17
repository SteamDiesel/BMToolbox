<template>
	<div class="hover:bg-blue-100 pb-2">
		<div class="p-2">
			<div class="flex w-full">
				<div class="w-3/4">
					<div v-if="vehicle.stock_number">{{vehicle.stock_number}}</div>
					<div
						class="mt-2"
					>{{vehicle.year}} {{vehicle.make}} {{vehicle.model}} {{vehicle.badge}} {{vehicle.series}} {{vehicle.model_year}} {{vehicle.transmission}}</div>
					<div class="mt-2">
						<span v-if="vehicle.body">{{vehicle.body}},</span>
						<span v-if="vehicle.doors && vehicle.doors.length <= 2">{{vehicle.doors}} doors,</span>
						<span v-if="vehicle.seats && vehicle.seats.length <= 2">{{vehicle.seats}} seats,</span>
						<span v-if="vehicle.colour">{{vehicle.colour}}</span>
					</div>
				</div>
				<div class="w-1/4 flex justify-around items-center">
					<button
						:class="{ 'bg-blue-400': edit_details} "
						class="appearance-none border-none bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
						@click="toggle_edit"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5">
							<path
								class="primary"
								d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
							/>
							<rect width="20" height="2" x="2" y="20" class="secondary" rx="1" />
						</svg>
					</button>
					<button
						:class="{ 'bg-blue-400': show_details} "
						class="appearance-none border-none bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full no-print text-xs"
						@click="toggle_details"
					>
						<svg v-if="show_details" viewBox="0 0 24 24" class="h-5 w-5">
							<circle cx="12" cy="12" r="10" class="primary" />
							<path
								class="secondary"
								d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
							/>
						</svg>
						<svg v-if="!show_details" viewBox="0 0 24 24" class="h-5 w-5">
							<circle cx="12" cy="12" r="10" class="primary" />
							<path
								class="secondary"
								d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div v-if="show_details" class="mt-2">
				Engine: {{vehicle.engine}}
				Engine size: {{vehicle.engine_size}}
				Fuel type: {{vehicle.fuel_type}}
			</div>
			<div v-if="show_details" class="mt-2">Vehicle type: {{vehicle.type}}</div>
			<div v-if="show_details" class="mt-2">
				Build: {{vehicle.build_date}}, Compliance: {{vehicle.compliance_date}}
				First registered: {{vehicle.first_registered_date}}
				<br />Factory Warranty:
				<span
					v-if="vehicle.factory_warranty_months"
				>{{vehicle.factory_warranty_months}} months,</span>
				<span v-if="vehicle.factory_warranty_km">{{vehicle.factory_warranty_km}} km</span>
			</div>
			<div v-if="show_details" class="mt-2">
				Odometer: {{vehicle.odometer}}
				<br />
				VIN: {{vehicle.vin}}
				<br />
				Engine_number: {{vehicle.engine_number}}
				<br />
				Registration Plate: {{vehicle.plate_number}}
			</div>
		</div>
		<div v-if="edit_details" class="flex flex-wrap">
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.stock_number)">
				<template v-slot:label>Stock Number</template>
				<input
					:id="'#'+vehicle.stock_number"
					v-model="vehicle.stock_number"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.type)">
				<template v-slot:label>Vehicle Type</template>
				<select
					:id="'#'+vehicle.type"
					v-model="vehicle.type"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				>
					<option value="" selected>Select</option>
					<option value="Passenger" selected>Passenger</option>
					<option value="Commercial" >Commercial</option>
				</select>
				
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.year)">
				<template v-slot:label>Year</template>
				<input
					:id="'#'+vehicle.year"
					v-model="vehicle.year"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.make)">
				<template v-slot:label>Make</template>
				<input
					:id="'#'+vehicle.make"
					v-model="vehicle.make"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.model)">
				<template v-slot:label>Model</template>
				<input
					:id="'#'+vehicle.model"
					v-model="vehicle.model"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.badge)">
				<template v-slot:label>Badge</template>
				<input
					:id="'#'+vehicle.badge"
					v-model="vehicle.badge"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.body)">
				<template v-slot:label>Body</template>
				<input
					:id="'#'+vehicle.body"
					v-model="vehicle.body"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.doors)">
				<template v-slot:label>Doors</template>
				<input
					:id="'#'+vehicle.doors"
					v-model="vehicle.doors"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.seats)">
				<template v-slot:label>Seats</template>
				<input
					:id="'#'+vehicle.seats"
					v-model="vehicle.seats"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.colour)">
				<template v-slot:label>Colour</template>
				<input
					:id="'#'+vehicle.colour"
					v-model="vehicle.colour"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.model_year)">
				<template v-slot:label>Model Year</template>
				<input
					:id="'#'+vehicle.model_year"
					v-model="vehicle.model_year"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.series)">
				<template v-slot:label>Series</template>
				<input
					:id="'#'+vehicle.series"
					v-model="vehicle.series"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.transmission)">
				<template v-slot:label>Transmission</template>
				<input
					:id="'#'+vehicle.transmission"
					v-model="vehicle.transmission"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.engine)">
				<template v-slot:label>Engine</template>
				<input
					:id="'#'+vehicle.engine"
					v-model="vehicle.engine"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.engine_size)">
				<template v-slot:label>Engine Size</template>
				<input
					:id="'#'+vehicle.engine_size"
					v-model="vehicle.engine_size"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.fuel_type)">
				<template v-slot:label>Fuel Type</template>
				<input
					:id="'#'+vehicle.fuel_type"
					v-model="vehicle.fuel_type"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.build_date)">
				<template v-slot:label>Build date</template>
				<input
					:id="'#'+vehicle.build_date"
					v-model="vehicle.build_date"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.compliance_date)">
				<template v-slot:label>Compliance date</template>
				<input
					:id="'#'+vehicle.compliance_date"
					v-model="vehicle.compliance_date"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.first_registered_date)">
				<template v-slot:label>First registered date</template>
				<input
					:id="'#'+vehicle.first_registered_date"
					v-model="vehicle.first_registered_date"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.factory_warranty_months)">
				<template v-slot:label>Factory warranty months</template>
				<input
					:id="'#'+vehicle.factory_warranty_months"
					v-model="vehicle.factory_warranty_months"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.factory_warranty_km)">
				<template v-slot:label>Factory warranty km</template>
				<input
					:id="'#'+vehicle.factory_warranty_km"
					v-model="vehicle.factory_warranty_km"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.vin)">
				<template v-slot:label>VIN</template>
				<input
					:id="'#'+vehicle.vin"
					v-model="vehicle.vin"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.engine_number)">
				<template v-slot:label>Engine #</template>
				<input
					:id="'#'+vehicle.engine_number"
					v-model="vehicle.engine_number"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.plate_number)">
				<template v-slot:label>Rego Plate</template>
				<input
					:id="'#'+vehicle.plate_number"
					v-model="vehicle.plate_number"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.odometer)">
				<template v-slot:label>Odometer</template>
				<input
					:id="'#'+vehicle.odometer"
					v-model="vehicle.odometer"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.nvic)">
				<template v-slot:label>NVIC</template>
				<input
					:id="'#'+vehicle.nvic"
					v-model="vehicle.nvic"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.redbook_value)">
				<template v-slot:label>Redbook Value</template>
				<input
					:id="'#'+vehicle.redbook_value"
					v-model="vehicle.redbook_value"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>

			<FormField class="w-1/3" @copy="copyClipboard('#'+vehicle.glasses_value)">
				<template v-slot:label>Glasses Value</template>
				<input
					:id="'#'+vehicle.glasses_value"
					v-model="vehicle.glasses_value"
					@change="saveApplicationsToLocal"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<div class="w-1/5 flex justify-around items-center">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import FormField from "@/components/application/FormField.vue";
export default {
	name: "PurposeGoods",
	components: {
		FormField
	},
	props: {
		vehicle: Object
	},
	data() {
		return {
			show_details: false,
			edit_details: false
		};
	},
	methods: {
		toggle_edit() {
			this.show_details = false;
			this.edit_details = !this.edit_details;
		},
		toggle_details() {
			this.edit_details = false;
			this.show_details = !this.show_details;
		},
		...mapMutations(["saveApplicationsToLocal"]),
		copyClipboard(id) {
			let valueToCopy = document.getElementById(id);
			valueToCopy.setAttribute("type", "text");
			valueToCopy.select();
			try {
				document.execCommand("copy");
			} catch (err) {
				alert("Oops, unable to copy");
			}
		}
	}
};
</script>

<style>
</style>