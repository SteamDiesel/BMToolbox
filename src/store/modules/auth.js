import axios from 'axios'
import env from './environment'
export default {
	state: {

		user: {},
		authenticated: false,
		error_message: '',
		email_message: '',
		password_message: '',
		show_login_card: false,
		show_auth_menu: false,
		login_waiting: false,

	},
	getters: {
		config() {
			return {
				headers: {
					'Authorization': 'Bearer ' + localStorage.getItem('session_token')
				}
			}
		},
		auth_user(state) {
			// if(state.authenticated && state.user){
			// 	return state.user
			// } else {
				return state.user
			// }
		}

	},
	mutations: {
		setUser(state, payload) {
			state.user = payload
			localStorage.setItem('user', JSON.stringify(payload))
		},
		
		setConnected(state, user) {
			state.user = user
			state.authenticated = true
			state.login_waiting = false
			state.show_login_card = false
			
		},
		setNotConnected(state) {
			state.user = {}
			state.authenticated = false
			state.login_waiting = false
			state.show_login_card = true
		},
		toggleLogin(state) {
			state.show_login_card = !state.show_login_card
		},
		toggleMenu(state) {
			state.show_auth_menu = !state.show_auth_menu
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

		signIn({ commit, dispatch }, payload) {
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
						dispatch('getUserPreferences')
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
		testAuthConnection({ getters, commit }) {
			// let config = env.state.config
			axios.get(env.state.uri + 'api/testAuthConnection', getters.config).then(response => {
				if (response.data.message == 'Unauthenticated') {
					window.console.log(response.data.message)
					commit('setNotConnected')
				} else {
					window.console.log(response.data.message)
				}
			}).catch(error => {
				window.console.log(error)
			})
		},
		saveUserPreferences({ getters, rootState, commit }) {
			commit('savePreferences')
			axios.post(env.state.uri + 'api/preferences', {
				preferences: JSON.stringify(rootState.user_preferences)
			}, getters.config).catch(error => {
				window.console.log(error)
			})

		},
		getUserPreferences({ getters , commit }) {
			axios.get(env.state.uri + 'api/preferences', getters.config).then(response => {
				commit('setUserPreferences', JSON.parse(response.data.preferences))
			}).catch(error => {
				window.console.log(error)
			})
		},

	},
	modules: {
		env
	}
}