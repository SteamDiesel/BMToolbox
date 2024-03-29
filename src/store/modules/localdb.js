// import env from "./environment";
export default {
	state: {
		db: null,
		check: "it works",
	},
	getters: {},
	mutations: {},
	actions: {
		initializeDB({ state, dispatch }) {
			window.console.log("Initializing the Database....");
			// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

			var request = window.indexedDB.open("BDFIdatabase", 1);
			request.onupgradeneeded = (event) => {
				window.console.log(
					"The BDFI Database has been created or upgraded."
				);
				state.db = event.target.result;
				state.db.createObjectStore("applications", { keyPath: "uuid" });
				var taskstable = state.db.createObjectStore("tasks", {
					keyPath: "uuid",
				});
				taskstable.createIndex("application_id", "application_id", {
					unique: false,
				});
			};

			request.onsuccess = (event) => {
				state.db = event.target.result;
				window.console.log("Successfully Initialized the Database.");
				dispatch("indexApps", 0);
				dispatch("indexTasks", false);
			};
			request.onerror = (event) => {
				alert(
					"uh-oh... there was an error with the database. Try reloading the app, if the problem persists then press F12 and call for support."
				);
				window.console.error(
					"Database error: " + event.target.errorCode
				);
			};
		},
		indexApps({ state, commit }, is_archived) {
			// initial setup
			// window.console.log("Index triggered");
			var apps = [];
			var applications = state.db
				.transaction("applications")
				.objectStore("applications");

			// applications.getAll().onsuccess = (e) => {
			// 	apps = e.target.result;
			// 	commit("setApplications", apps);
			// };
			applications.openCursor().onsuccess = (event) => {
				var cursor = event.target.result;
				if (cursor) {
					if (cursor.value.is_archived == is_archived) {
						apps.push(cursor.value);
						// window.console.log(cursor.value.uuid);
					}
					cursor.continue();
				} else {
					// window.console.log("No more entries!");
					commit("setApplications", apps);
				}
			};
		},

		storeApp({ state, getters }) {
			// window.console.log("StoreApp triggered");
			var app = getters.application;

			var transaction = state.db.transaction(
				["applications"],
				"readwrite"
			);
			var applications = transaction.objectStore("applications");

			applications.add(app);

			transaction.oncomplete = () => {
				window.console.log("Application Stored!");
			};
			transaction.onerror = (event) => {
				window.console.log("error message: " + event.target.error);
			};
		},
		updateApp({ state, getters }) {
			var new_app = getters.application;

			var objectStore = state.db
				.transaction(["applications"], "readwrite")
				.objectStore("applications");

			var request = objectStore.get(new_app.uuid);

			request.onerror = (event) => {
				window.console.log(event);
				window.console.log(
					"error while retrieving object to be updated from db."
				);
			};

			request.onsuccess = (event) => {
				var old_app = event.target.result;
				old_app = new_app;
				var requestUpdate = objectStore.put(old_app);
				requestUpdate.onerror = (event) => {
					window.console.log(event);
					window.console.log("error saving updated object");
				};
				requestUpdate.onsuccess = () => {
					window.console.log("Saved " + new_app.uuid);
				};
			};
		},
		updateAppByApp({ state }, app) {
			var new_app = app;

			var objectStore = state.db
				.transaction(["applications"], "readwrite")
				.objectStore("applications");

			var request = objectStore.get(new_app.uuid);

			request.onerror = (event) => {
				window.console.log(event);
				window.console.log(
					"error while retrieving object to be updated from db."
				);
			};

			request.onsuccess = (event) => {
				var old_app = event.target.result;
				old_app = new_app;
				var requestUpdate = objectStore.put(old_app);
				requestUpdate.onerror = (event) => {
					window.console.log(event);
					window.console.log("error saving updated object");
				};
				requestUpdate.onsuccess = () => {
					window.console.log("Saved " + new_app.uuid);
				};
			};
		},
		deleteApp({ state, dispatch }, application) {
			// window.console.log(application.uuid);
			// window.console.log(application.index);
			var request = state.db
				.transaction(["applications"], "readwrite")
				.objectStore("applications")
				.delete(application.uuid);
			request.onsuccess = () => {
				window.console.log(application.uuid + " was deleted.");
				dispatch("indexApps", 0);
			};
		},
	},
	modules: {
		// env,
	},
};
