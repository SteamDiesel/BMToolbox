<template>
	<div class="h-full">
		<TopBar />	
		<div>
			<slot />
			<transition name="slide-fade">
				<div v-if="show_login_card" class="absolute top-0 right-0 mt-16 mr-4">
					<Login/>
				</div>
				
				<div v-if="show_auth_menu" class="absolute top-0 right-0 mt-16 mr-4">
					<AuthMenu/>
				</div>
				
			</transition>
		</div>
	</div>
</template>

<script>
import Login from "@/components/UserLogIn"
import AuthMenu from "@/components/AuthMenu"
import TopBar from "@/components/layout/TopBar"
import { mapState } from 'vuex'
export default {
	name: "Main",
	components: {
		TopBar,
		Login,
		AuthMenu
	},
	computed:{
		...mapState({
			authenticated: state => state.auth.authenticated,
			show_login_card: state => state.auth.show_login_card,
			show_auth_menu: state => state.auth.show_auth_menu,
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