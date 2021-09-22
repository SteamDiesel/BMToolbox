<template>
	<div class="">
		<div class="flex flex-wrap">
			<FormField class="w-1/5" @copy="copyClipboard('#' + kid.age)">
				<template v-slot:label>
					Age
				</template>
				<input
					:id="'#' + kid.age"
					v-model="kid.age"
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
		name: "Kid",
		components: {
			FormField,
		},
		props: {
			kid: Object,
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
