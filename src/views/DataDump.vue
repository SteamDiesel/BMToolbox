<template>
	<div class="pt-12 pb-24 mx-2 px-4 sm:px-2">
		<div class="break-after mb-24">
			<h1 class="text-2xl">Storing your data</h1>
			<p class="mt-5">
				The easy ways to backup this data:
				<br />- Copy all of the text below, and save it into a new text document on your computer.
				<br />- Print this page to a pdf (You could print it to paper, but then you won't be able to re-import it to this system.)
				<br /> <br>
				With your data retrieved, you could keep frequent backups as a point-in-time data 
				backup. From here you can upload it to your own cloud storage or print it to paper 
				for long term air-gapped storage. <br>
				Also, if you're really adventurous, you could use the data in your own tools. 
			</p>
		</div>
		<div class="mb-24 break-after">
			<h1 class="text-2xl">User Preferences:</h1>
			<p class="text-xs">
				{{user_preferences}}
			</p>
			
		</div>
		<div class="mb-24">
			<h1 class="text-2xl">Application Data:</h1>
			<div v-for="(app, index) in applications" :key="index" class="break-after mb-16">
				<h2>
					<span v-for="(p, index) in app.people" :key="index">{{p.first_name}} {{p.surname}} </span> <br>

				</h2>
				<p class="text-xs">
					{{app}}
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
		...mapState(["applications", "user_preferences"])
	}
};
</script>