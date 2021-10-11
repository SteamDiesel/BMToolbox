import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FourOhFour from "../views/FourOhFour.vue";
// import auth from "../store/modules/auth";

Vue.use(VueRouter);

const routes = [
	{
		path: "/home",
		// name: "home",
		component: Home,
	},

	{
		path: "/",
		name: "home",
		component: Home,
	},

	{
		path: "/calculator",
		name: "calculator",

		component: () =>
			import(
				/* webpackChunkName: "calculator" */ "../views/Calculator.vue"
			),
	},
	{
		path: "/application",
		name: "application",

		component: () =>
			import(
				/* webpackChunkName: "application" */ "../views/Application.vue"
			),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},

	{
		path: "/applications",
		name: "applications",

		component: () =>
			import(/* webpackChunkName: "apps" */ "../views/Applications.vue"),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/tasks",
		name: "tasks",

		component: () =>
			import(/* webpackChunkName: "tasks" */ "../views/Tasks.vue"),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/history",
		name: "history",

		component: () =>
			import(/* webpackChunkName: "history" */ "../views/History.vue"),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/tinkering",
		name: "tinkering",

		component: () =>
			import(
				/* webpackChunkName: "tinkering" */ "../views/Tinkering.vue"
			),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/about",
		name: "about",

		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/settings",
		name: "settings",
		component: () =>
			import(
				/* webpackChunkName: "preferences" */ "../views/Preferences.vue"
			),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/print-application",
		name: "print-application",
		component: () =>
			import(
				/* webpackChunkName: "print-app" */ "../views/PrintApplication.vue"
			),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		path: "/data-dump",
		name: "data-dump",
		component: () =>
			import(/* webpackChunkName: "data-dump" */ "../views/DataDump.vue"),
		// beforeEnter: (to, from, next) => {
		// 	if (!auth.state.authenticated) next('/home')
		// 	else next()
		// }
	},
	{
		// This should catch the 404 redirect in the spa when installed as PWA App
		path: "/index.html",
		// name: "home",
		component: Home,
	},
	{
		// This route must be last in the routes list.
		path: "/*",
		name: "FourOhFour",
		component: FourOhFour,
	},
];

const router = new VueRouter({
	mode: "history",
	linkActiveClass: "bg-gray-900 text-blue-200",
	base: process.env.BASE_URL,
	routes,
});

export default router;
