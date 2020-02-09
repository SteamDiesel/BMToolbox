<template>
	<div class="pb-12 container items-center justify-center w-full h-full">
		<div v-if="!authenticated" class="border border-2 rounded border-red-600">
			You are not logged in
		</div>
		<div class="w-100 rounded-lg">
			<input class="form-input" type="text" v-model="email" placeholder="email">
			<input class="form-input" type="password" v-model="password" placeholder="password">
			<button  @click="signIn" class="btn-primary mb-12">
				Sign In
			</button>
			<button @click="test" class="btn-secondary">
				Test
			</button>
		</div>
	</div>
</template>


<script>
import axios from 'axios'
export default {
	name: "Tinkering",
	components: {},
	data(){
		return {
			email: 'jason@bdfi.com.au',
			password: 'Yu26nc9KYuFCj7W',
			authenticated: false,
			domain: 'http://lite-resources.bdfi.test/'
		}
	},
	computed: {
	
	},
	methods: {
		signIn(){
			axios.defaults.withCredentials = true;
			axios.get(this.domain + 'airlock/csrf-cookie')
			axios.post(this.domain + 'api/login', {
					'email': this.email,
					'password': this.password
				}, {withCredentials: true}).then(response => {
					localStorage.setItem('session_token', response.data.token.plainTextToken);
				}).catch(error => {
					window.console.log(error)
				})
			
		},
		test(){
			let config = {
				headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('session_token')
				}
			}
			axios.get(this.domain + 'api/test', config).then(response =>{
				window.console.log(response.data.message)
				}).catch(error => {
					window.console.log(error)
				})
		}
		
	}
};
</script>
