<template>
	<div class="pb-12 container items-center justify-center w-full h-full">
		
		<div class="m-12">
			
			
			<button  @click="login" class="btn-primary m-12">
				Login
			</button>
			
			<button  @click="getCookie" class="btn-primary m-12">
				get Cookie
			</button>

			
			<button  @click="test" class="btn-primary m-12">
				{{uri}}
			</button>
		</div>
		<div class="m-12 text-center font-semibold">
			{{message}}
		</div>
		
	</div>
</template>


<script>

import { mapState } from 'vuex'
import axios from 'axios'
export default {
	name: "Tinkering",
	components: {},
	data(){
		return {
			message: '',
			token: ''
		}
	},
	computed: {
		...mapState({
			uri: state => state.env.uri
		})
	},
	methods: {
		getCookie(){
			axios.defaults.withCredentials = true;
			axios.get(this.uri + 'airlock/csrf-cookie').then(response => {
				this.message = response.data.message
			}).catch(error => {
				window.console.log(error)
			})
		},

		login(){
			axios.defaults.withCredentials = true;
			axios.post(this.uri + 'api/login',{
				email: "jason@bdfi.com.au",
				password: "password"
			}).then(response => {
				this.token = response.data.token.plainTextToken
				window.console.log(response.data)
				this.message = response.data.message
			}).catch(error => {
				window.console.log(error)
			})
		},
		
		test(){
			let config = {
				headers: {
				'Authorization': 'Bearer ' + this.token
				}
			}
			axios.defaults.withCredentials = true;
			axios.get(this.uri + 'api/testAuthConnection', config).then(response => {
				this.message = response.data.message
			}).catch(error => {
				window.console.log(error)
			})
		}
	}
};
</script>
