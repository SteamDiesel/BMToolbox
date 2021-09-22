<template>
	<div class="pt-12 pb-24 mx-2 px-4 sm:px-2">
		<div class="break-after mb-24">
			<h1 class="text-2xl">Storing your data</h1>
			<p class="mt-5">
				The easy ways to backup this data:
				<br />1. Copy all of the text below and save it into a new text
				document OR print this page to a pdf. <br />2. Store that file
				on a usb stick or upload it to a cloud storage of your
				choice.<br />
			</p>
		</div>
		<div class="mb-24 break-after">
			<h1 class="text-2xl">User Preferences:</h1>
			<p class="text-xs">
				{{ user_preferences }}
			</p>
		</div>
		<div class="mb-24">
			<h1 class="text-2xl">Application Data:</h1>
			<div
				v-for="(app, index) in applications"
				:key="index"
				class="break-after mb-16"
			>
				<h2>
					<span v-for="(p, index) in app.people" :key="index"
						>{{ p.first_name }} {{ p.surname }}
					</span>
					<br />
				</h2>
				<p class="text-xs">
					{{ app }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	// @ is an alias to /src
	import { mapState } from "vuex";
	export default {
		name: "DataDump",
		computed: {
			...mapState(["applications", "user_preferences"]),
		},
	};
</script>
