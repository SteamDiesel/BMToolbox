<template>
	<MenuCard class="flex flex-col justify-around">
			<div class="flex justify-end w-full">
				<button @click="toggleLogin" class="text-gray-500 m-4">
					close
				</button>
			</div>
			<div class="flex justify-center font-semibold text-red-800">
				{{error_message}}
			</div>
			<div class="flex justify-center py-4">
				<input class="form-input bg-gray-200 rounded-lg text-center w-64 h-12" type="text" 
			v-model="email" placeholder="email">
			</div>
			<div class="flex justify-center py-4">
				<input class="form-input bg-gray-200 rounded-lg text-center w-64 h-12 " type="password" 
			v-model="password" placeholder="password">
			</div>
			

			<div class="flex justify-center py-4">
				<transition name="fade" mode="out-in">
				<button v-if="!login_waiting" @click="signIn({email: email, password: password})" class=" mb-4 btn-primary">
					Sign In
				</button>
				<div v-if="login_waiting" class=" mb-4  btn-secondary text-gray-500">
					Please wait...
				</div>
			</transition>
			</div>
			
			
	</MenuCard>
	
</template>


<script>

import { mapState, mapActions, mapMutations } from 'vuex'
import MenuCard from './MenuCard'
export default {
	name: "UserLogin",
	components: {
		MenuCard
	},
	data(){
		return {
			email: '',
			password: ''
		}
	},
	computed: {
		...mapState({
			authenticated: state => state.auth.authenticated,
			error_message: state => state.auth.error_message,
			email_message: state => state.auth.email_message,
			login_waiting: state => state.auth.login_waiting,
		})
	},
	methods: {
		...mapActions([
			"signIn",
		]),
		...mapMutations(["toggleLogin"])
	}
};
</script>
