<template>
	<div class="">
		<div class="flex flex-wrap">
			<FormField
				class="w-3/5"
				@copy="copyClipboard('#' + other_asset.description)"
			>
				<template v-slot:label>
					Description
				</template>
				<input
					:id="'#' + other_asset.description"
					v-model="other_asset.description"
					@change="updateField"
					type="text"
					class="form-input text-center"
				/>
			</FormField>
			<FormField
				class="w-1/5"
				@copy="copyClipboard('#' + other_asset.value)"
			>
				<template v-slot:label>
					Value
				</template>
				<input
					:id="'#' + other_asset.value"
					v-model="other_asset.value"
					@change="updateField"
					type="number"
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
	import { mapActions } from "vuex";
	import FormField from "@/components/application/FormField.vue";
	export default {
		name: "OtherAsset",
		components: {
			FormField,
		},
		props: {
			other_asset: Object,
		},
		methods: {
			...mapActions(["updateField"]),
			copyClipboard(id) {
				let valueToCopy = document.getElementById(id);
				valueToCopy.setAttribute("type", "text");
				valueToCopy.select();
				try {
					document.execCommand("copy");
				} catch (err) {
					alert("Oops, unable to copy");
				}
			},
		},
	};
</script>

<style></style>
