import axios from 'axios'
import env from './environment'
export default {
	state: {
		
		user: '',
		authenticated: false,
		error_message: '',
		email_message: '',
		password_message: '',
		show_login_card: false,
		login_waiting: false,

	},
	mutations: {
		setUser(state, payload){
			state.user = payload
		},
		setConnected(state){
			state.authenticated = true
			state.login_waiting = false
			state.show_login_card = false
		},
		setNotConnected(state){
			state.authenticated = false
		},
		toggleLogin(state){
			state.show_login_card = !state.show_login_card
		},
		setLoading(state){
			state.login_waiting = true
		}
	},
	actions:{
		
		signIn(
			{commit, dispatch}, payload
			){
			commit('setLoading')
			axios.defaults.withCredentials = true;
			axios.get(env.state.uri + 'airlock/csrf-cookie')
			.then(
				axios.post(env.state.uri + 'api/login', {
					'email': payload.email,
					'password': payload.password
				}, {withCredentials: true}).then(response => {
					localStorage.setItem('session_token', response.data.token.plainTextToken)
					commit('setUser', response.data.user)
					dispatch('testAuthConnection')
				}).catch(error => {
					window.console.log(error)
				})
			)
		},
		testAuthConnection({commit}){
			let config = {
				headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('session_token')
				}
			}
			axios.get(env.state.uri + 'api/testAuthConnection', config).then(response =>{
				if(response.data.message == 'connected'){
					commit('setConnected')
				}
				if(response.data.message == 'Unauthenticated'){
					commit('setNotConnected')
				}
				}).catch(error => {
					window.console.log(error)
				})
		}

	},
	modules:{
		env
	}
}