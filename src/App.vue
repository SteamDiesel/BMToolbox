<template>
	<div class="min-h-screen text-gray-600 bg-gray-100" id="app">
		<div id="nav" class="bg-gray-300">
			<div class="container mx-auto flex justify-between">
				<div>{{user_preferences.user_name}} @ {{user_preferences.user_business_name}}</div>
				<div class="font-semibold flex">
					<router-link to="/home">Home</router-link> |
					<router-link to="/about">About</router-link> |
					<router-link to="/settings">
						<svg viewBox="0 0 24 24" class="h-6 w-6">
							<path class="primary" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 
							3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 
							2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 
							1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
							<circle cx="12" cy="12" r="2" class="secondary"/>
						</svg>
					</router-link>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
	computed: {
		...mapState(['user_preferences'])
	},
	methods: {
		...mapMutations(['initialize'])
	},
	mounted() {
		this.initialize();
	}
};
</script>

<style>
.primary {
	fill: #64d5ca;
}

.secondary {
	fill: #20504f;
}
</style>
