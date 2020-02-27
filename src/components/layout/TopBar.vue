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




				<div v-if="authenticated" class="flex justify-between h-full items-center pl-2 sm:pl-0 text-gray-100 text-sm font-semibold">
					<div class="h-full flex items-center">
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
					<div class="flex h-full items-center">
						<UserButton/>
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
import UserButton from '../buttons/UserButton'
export default {
	name: "TopBar",
	components:{
		UserButton
	},

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

