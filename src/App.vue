<template>
	<div class="min-h-screen text-sm text-gray-600 bg-gray-100" id="app">
		<Main>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</Main>
	</div>
</template>
<script>
	import {
		// mapState,
		// mapMutations,
		mapActions,
		mapState,
	} from "vuex";
	import Main from "@/components/layout/Main.vue";
	export default {
		components: {
			Main,
		},
		computed: {
			...mapState({
				authenticated: (state) => state.auth.authenticated,
			}),
		},
		methods: {
			// ...mapMutations(['initialize']),
			...mapActions(["initialize"]),
		},
		mounted() {
			this.initialize();
		},
	};
</script>

<style>
	.primary {
		fill: #64d5ca;
	}
	.secondary {
		fill: #20504f;
	}
	.stroke-primary {
		stroke: #64d5ca;
	}

	.stroke-secondary {
		stroke: #20504f;
	}

	.text-primary {
		color: #64d5ca;
	}
	.text-secondary {
		color: #20504f;
	}
	.danger-primary {
		fill: #d56464;
	}
	.danger-secondary {
		fill: #502020;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

	@media print {
		.no-print,
		.no-print * {
			display: none !important;
		}
		.container {
			contain: none !important;
			padding: none !important;
			margin: none !important;
		}
		.break-after {
			page-break-after: always;
		}
	}
</style>
