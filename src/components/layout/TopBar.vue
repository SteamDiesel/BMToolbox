<template>
	<div class="h-12">
		<div class="fixed w-full ">
			<div id="nav" class="bg-gray-800 border-t-4 border-teal-400 no-print h-12 px-3">



				<div v-if="!authenticated" class="flex justify-between h-full items-center pl-2 sm:pl-0">
					<div class="h-full text-gray-100 flex items-center text-sm font-semibold">
						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/home"
						>BDFI</router-link>
						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/calculator"
						>Calculator</router-link>
						
					</div>
					<div class="flex h-full items-center ">
						<a href="https://lite-resources.bdfi.app/register">
							<div class="btn-secondary py-1 mr-4">
								Register
							</div>
						</a>
						
						<button @click="toggleLogin" class="btn-primary py-1">
							Sign In
						</button>
					</div>
				</div>




				<div v-if="authenticated" class="flex justify-between h-full items-center pl-2 sm:pl-0">
					<div class="h-full text-gray-100 flex items-center text-sm font-semibold">
						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/home"
						>BDFI</router-link>

						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/calculator"
						>Calculator</router-link>
						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/applications"
						>Applications</router-link>
					</div>
					<div class="flex h-full">
						<router-link class="h-full flex items-center px-4 py-1 hover:bg-blue-800" to="/about">
							<svg viewBox="0 0 24 24" class="h-8 w-8">
								<path class="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
								<path
									class="secondary"
									d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
								/>
							</svg>
						</router-link>
						<router-link
							class="h-full flex items-center px-4 py-1 hover:bg-blue-800"
							to="/settings"
						>
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
					</div>
				</div>



			</div>
		</div>
		
	</div>
</template>

<script>

import {
	mapState,
	mapMutations,
	// mapActions
} from "vuex";
export default {
	name: "TopBar",

	data(){
		return{
			show_login: false
		}
	},
	computed: {
		...mapState({
			authenticated: state => state.auth.authenticated,
		})
	},
	methods:{
		...mapMutations(["toggleLogin"])
	}
};
</script>

