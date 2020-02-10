<template>
	<div class="h-full">
		<TopBar />	
		<div>
			<slot />
			<transition name="slide-fade">
				<div v-if="show_login_card" class="absolute top-0 right-0 mt-16 mr-4">
					<Login/>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import Login from "@/components/UserLogIn.vue";
import TopBar from "@/components/layout/TopBar.vue";
import { mapState } from 'vuex'
export default {
	name: "Main",
	components: {
		TopBar,
		Login
	},
	computed:{
		...mapState({
			authenticated: state => state.auth.authenticated,
			show_login_card: state => state.auth.show_login_card,
		})
		
	}
};
</script>

<style>
	.slide-fade-enter-active {
	transition: all .5s ease;
	}
	.slide-fade-leave-active {
	
	transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
	}
</style>