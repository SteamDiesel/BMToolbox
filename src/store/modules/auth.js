// import axios from "axios";
import env from "./environment";
export default {
	state: {
		user: {
			name: "Anonymous",
			photo_url: "",
		},
		authenticated: true,
		error_message: "",
		email_message: "",
		password_message: "",
		show_login_card: false,
		show_auth_menu: false,
		login_waiting: false,
		session_token: "",
	},
	getters: {
		config() {
			return {
				headers: {
					Authorization:
						"Bearer " + localStorage.getItem("session_token"),
				},
			};
		},
		auth_user(state) {
			// if(state.authenticated && state.user){
			// 	return state.user
			// } else {
			return state.user;
			// }
		},
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			localStorage.setItem("user", JSON.stringify(payload));
		},
		setConnected(state, user) {
			state.user = user;
			state.authenticated = true;
			state.login_waiting = false;
			state.show_login_card = false;
		},
		setNotConnected(state) {
			state.user = {};
			state.authenticated = false;
			state.login_waiting = false;
			state.show_login_card = true;
		},
		toggleLogin(state) {
			state.show_login_card = !state.show_login_card;
		},
		toggleAuthMenu(state) {
			state.show_auth_menu = !state.show_auth_menu;
		},
		setLoading(state) {
			state.login_waiting = true;
		},
		setFailedLogin(state, error) {
			state.login_waiting = false;
			state.error_message =
				error.response.status + ": " + error.response.data.message;
		},
	},
	actions: {
		// signIn({ commit, dispatch, state }, payload) {
		// 	commit("setLoading");
		// 	axios.defaults.withCredentials = true;
		// 	axios
		// 		.get(env.state.uri + "airlock/csrf-cookie")
		// 		.then(
		// 			axios
		// 				.post(
		// 					env.state.uri + "api/login",
		// 					{
		// 						email: payload.email,
		// 						password: payload.password,
		// 					},
		// 					{ withCredentials: true }
		// 				)
		// 				.then((response) => {
		// 					localStorage.setItem(
		// 						"session_token",
		// 						response.data.token.plainTextToken
		// 					);
		// 					commit("setUser", response.data.user);
		// 					commit("setConnected", response.data.user);
		// 					state.show_login_card = false;
		// 					dispatch(
		// 						"testAuthConnection",
		// 						response.data.token.plainTextToken
		// 					);
		// 					dispatch(
		// 						"getUserPreferences",
		// 						response.data.token.plainTextToken
		// 					);
		// 				})
		// 				.catch((error) => {
		// 					if (error.response) {
		// 						commit("setFailedLogin", error);
		// 						window.console.log(error.response.data);
		// 						window.console.log(error.response.status);
		// 						window.console.log(error.response.headers);
		// 					} else if (error.request) {
		// 						window.console.log(error.request);
		// 					} else {
		// 						window.console.log("Error", error.message);
		// 					}
		// 					window.console.log(error.config);
		// 				})
		// 		)
		// 		.catch((error) => {
		// 			if (error.response) {
		// 				commit("setFailedLogin", error);
		// 				window.console.log(error.response.data);
		// 				window.console.log(error.response.status);
		// 				window.console.log(error.response.headers);
		// 			} else if (error.request) {
		// 				window.console.log(error.request);
		// 			} else {
		// 				window.console.log("Error", error.message);
		// 			}
		// 			window.console.log(error.config);
		// 		});
		// },
		// testAuthConnection({ getters, commit }, token) {
		// 	var config = {
		// 		headers: {
		// 			Authorization: "Bearer " + token,
		// 		},
		// 	};
		// 	if (!token) {
		// 		config = getters.config;
		// 	}
		// 	axios
		// 		.get(env.state.uri + "api/testAuthConnection", config)
		// 		.then((response) => {
		// 			if (response.data.message == "Unauthenticated") {
		// 				window.console.log(response.data.message);
		// 				commit("setNotConnected");
		// 			} else {
		// 				window.console.log(response.data.message);
		// 			}
		// 		})
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
		saveUserPreferences({ commit }) {
			commit("savePreferences");
		},
		// saveUserPreferences({ getters, rootState, commit }) {
		// 	commit("savePreferences");
		// 	axios
		// 		.post(
		// 			env.state.uri + "api/preferences",
		// 			{
		// 				preferences: JSON.stringify(rootState.user_preferences),
		// 			},
		// 			getters.config
		// 		)
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
		getUserPreferences() {
			alert(
				"getUserPreferences is deprecated, use getPreferencesFromLocalStorage instead"
			);
		},
		// getUserPreferences({ getters, commit }, token) {
		// 	var config = {
		// 		headers: {
		// 			Authorization: "Bearer " + token,
		// 		},
		// 	};
		// 	if (!token) {
		// 		config = getters.config;
		// 	}
		// 	axios
		// 		.get(env.state.uri + "api/preferences", config)
		// 		.then((response) => {
		// 			commit(
		// 				"setUserPreferences",
		// 				JSON.parse(response.data.preferences)
		// 			);
		// 		})
		// 		.catch((error) => {
		// 			window.console.log(error);
		// 		});
		// },
		logout() {
			// axios
			// 	.get(env.state.uri + "api/logout", getters.config)
			// 	.then(
			// 		window.console.log(
			// 			"Logging out, clearing local storage, re-initializing app"
			// 		),
			// 		localStorage.clear(),
			// 		commit("setNotConnected"),
			// 		dispatch("initialize")
			// 	)
			// 	.catch((error) => {
			// 		window.console.log(error);
			// 	});
			alert("there is no logout function");
		},
	},
	modules: {
		env,
	},
};
