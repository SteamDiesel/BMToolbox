<template>
	<div class="min-h-screen text-sm text-gray-600 bg-gray-100" id="app">
		<div id="nav" class=" bg-gray-300 no-print">
			<div class="container mx-auto flex justify-between h-full items-center pl-2 sm:pl-0">
				
				<div class="md:text-xl font-semibold flex">
					<img v-if="user_preferences.user_brand_image_url" class="h-12 max-w-24" :src="user_preferences.user_brand_image_url"> 
					<div class="flex items-center ml-2">
						{{user_preferences.user_name}} @ {{user_preferences.user_business_name}}
					</div>
				</div>
				<div class="font-semibold flex">
					<router-link class="rounded-t-lg px-2 py-1 ml-2" to="/home">
						<svg viewBox="0 0 24 24" class="h-10 w-10"><path class="primary" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><rect width="2" height="6" x="15" y="13" class="secondary" rx="1"/></svg>
					</router-link> 
					<router-link class="rounded-t-lg px-2 py-1 ml-2" to="/application">
						<svg viewBox="0 0 24 24" class="h-10 w-10"><g><path class="primary" d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z"/><rect width="20" height="12" x="2" y="8" class="secondary" rx="2"/></g></svg>
					</router-link>
					
					<router-link class="rounded-t-lg px-2 py-1 ml-2" to="/applications">
						<svg  viewBox="0 0 24 24" class="h-10 w-10"><rect width="20" height="12" x="2" y="10" class="primary" rx="2"/><path class="secondary" d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/></svg>
					</router-link>

					<router-link class="rounded-t-lg px-2 py-1 ml-2" to="/about">
						<svg viewBox="0 0 24 24" class="h-10 w-10"><path class="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/><path class="secondary" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
					</router-link> 
					<router-link class="rounded-t-lg px-2 py-1 ml-2" to="/settings">
						<svg viewBox="0 0 24 24" class="h-10 w-10">
							<path class="primary" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 
							3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 
							2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 
							1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
							<circle cx="12" cy="12" r="2" class="secondary"/>
						</svg>
					</router-link>
				</div>
			</div>
		</div>
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
		<div class="text-gray-400 text-center w-full mt-12 no-print">
			© 2020 Jason Lloyd Law
		</div>
	</div>
</template>
<script>
import { 
	mapState, 
	// mapMutations, 
	mapActions 
} from "vuex";
export default {
	computed: {
		...mapState(['user_preferences'])
	},
	methods: {
		// ...mapMutations(['initialize']),
		...mapActions(['initialize'])
	},
	mounted() {
		this.initialize();
	}
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


@media print
	{
		.no-print, .no-print *
		{
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
