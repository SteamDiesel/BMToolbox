<template>
	<MenuCard>
		<router-link class="h-full flex items-center px-4 py-1 hover:bg-blue-800" to="/about">
			<svg viewBox="0 0 24 24" class="h-8 w-8">
				<path class="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
				<path
					class="secondary"
					d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
				/>
			</svg>
		</router-link>
		<router-link class="h-full flex items-center px-4 py-1 hover:bg-blue-800" to="/settings">
			<svg viewBox="0 0 24 24" class="h-8 w-8">
				<path
					class="primary"
					d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 
			3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 
			2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 
			1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
				/>
				<circle cx="12" cy="12" r="2" class="secondary" />
			</svg>
		</router-link>
	</MenuCard>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import MenuCard from "./MenuCard";
export default {
	name: "AuthActions",
	components: {
		MenuCard
	},
	data() {
		return {
			email: "",
			password: ""
		};
	},
	computed: {
		// ...mapGetters({
		// 	auth_user: state => state.auth.auth_user
		// })
	},
	methods: {
		...mapActions(["signIn"]),
		...mapMutations(["toggleLogin"])
	}
};
</script>
