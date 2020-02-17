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
		setUser(state, payload) {
			state.user = payload
		},
		setConnected(state) {
			state.authenticated = true
			state.login_waiting = false
			state.show_login_card = false
		},
		setNotConnected(state) {
			state.authenticated = false
			state.login_waiting = false
			state.show_login_card = true
		},
		toggleLogin(state) {
			state.show_login_card = !state.show_login_card
		},
		setLoading(state) {
			state.login_waiting = true
		},
		setFailedLogin(state, error) {
			state.login_waiting = false
			state.error_message = error.response.status + ': ' + error.response.data.message
		}
	},
	actions: {

		signIn(
			{ commit, dispatch }, payload
		) {
			commit('setLoading')
			axios.defaults.withCredentials = true;
			axios.get(env.state.uri + 'airlock/csrf-cookie')
				.then(
					axios.post(env.state.uri + 'api/login', {
						'email': payload.email,
						'password': payload.password
					}, { withCredentials: true }).then(response => {
						localStorage.setItem('session_token', response.data.token.plainTextToken)
						commit('setUser', response.data.user)
						dispatch('testAuthConnection')
					}).catch(error => {
						if (error.response) {
							commit('setFailedLogin', error)
							window.console.log(error.response.data);
							window.console.log(error.response.status);
							window.console.log(error.response.headers);
						} else if (error.request) {
							window.console.log(error.request);
						} else {
							window.console.log('Error', error.message);
						}
						window.console.log(error.config);
					})
				).catch(error => {
					if (error.response) {
						commit('setFailedLogin', error)
						window.console.log(error.response.data);
						window.console.log(error.response.status);
						window.console.log(error.response.headers);
					} else if (error.request) {
						window.console.log(error.request);
					} else {
						window.console.log('Error', error.message);
					}
					window.console.log(error.config);
				})
		},
		testAuthConnection({ commit }) {
			let config = {
				headers: {
					'Authorization': 'Bearer ' + localStorage.getItem('session_token')
				}
			}
			axios.get(env.state.uri + 'api/testAuthConnection', config).then(response => {
				if (response.data.message == 'connected') {
					commit('setConnected')
				}
				if (response.data.message == 'Unauthenticated') {
					commit('setNotConnected')
				}
			}).catch(error => {
				window.console.log(error)
			})
		}

	},
	modules: {
		env
	}
}