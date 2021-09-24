// import axios from "axios";
// import env from "./environment";

import moment from "moment";
import localdb from "./localdb";
import { uuid } from "vue-uuid";

export default {
	state: {
		tasks: [],
	},
	getters: {
		pending_tasks: (state, getters, rootState) => {
			const apps = rootState.applications;
			const tasks = state.tasks;
			const result = [];
			apps.forEach((app) => {
				tasks.forEach((task) => {
					if (task.application_id == app.uuid && !task.is_complete) {
						result.push(task);
					}
				});
			});
			tasks.forEach((task) => {
				if (task.application_id == "" && !task.is_complete) {
					result.push(task);
				}
			});
			result.sort(function(a, b) {
				return moment(a.due_at) - moment(b.due_at);
			});

			return result;
		},
		complete_tasks: (state, getters, rootState) => {
			const apps = rootState.applications;
			const tasks = state.tasks;
			const result = [];
			apps.forEach((app) => {
				tasks.forEach((task) => {
					if (task.application_id == app.uuid && task.is_complete) {
						result.push(task);
					}
				});
			});
			tasks.forEach((task) => {
				if (task.application_id == "" && task.is_complete) {
					result.push(task);
				}
			});
			result.sort(function(a, b) {
				return moment(b.updated_at) - moment(a.updated_at);
			});

			return result;
		},
	},
	mutations: {
		pushToTasks(state, task) {
			window.console.log("pushtotasks triggered");
			state.tasks.push(task);
		},
		sortTasks(state) {
			state.tasks.sort(function(a, b) {
				return moment(a.due_at) - moment(b.due_at);
			});
		},
		loadTasks(state, payload) {
			state.tasks = payload;
		},
	},
	actions: {
		saveTask({ dispatch, commit }, string) {
			// window.console.log(string);

			var task = JSON.parse(string);
			task.uuid = uuid.v4();

			commit("pushToTasks", task);
			dispatch("storeTask", task);
		},
		storeTask({ state }, task) {
			window.console.log(task);

			var transaction = state.localdb.db.transaction(
				["tasks"],
				"readwrite"
			);

			var tasks = transaction.objectStore("tasks");

			tasks.add(task);

			transaction.oncomplete = () => {
				window.console.log("Task Stored!");
			};
			transaction.onerror = (event) => {
				window.console.log("error message: " + event.target.error);
			};
		},
		indexTasks({ state, commit }) {
			// initial setup

			var tasks = [];
			var taskstable = state.localdb.db
				.transaction("tasks")
				.objectStore("tasks");

			taskstable.getAll().onsuccess = (e) => {
				tasks = e.target.result;
				commit("loadTasks", tasks);
			};

			// taskstable.openCursor().onsuccess = (event) => {
			// 	var cursor = event.target.result;
			// 	if (cursor) {
			// 		if (cursor.value.is_complete == is_complete) {
			// 			tasks.push(cursor.value);
			// 		}
			// 		cursor.continue();
			// 	} else {
			// 		window.console.log("Retrieved Tasks from localDB");

			// 		commit("loadTasks", tasks);
			// 		commit("sortTasks");
			// 	}
			// };
		},
	},
	modules: {
		localdb,
	},
};
