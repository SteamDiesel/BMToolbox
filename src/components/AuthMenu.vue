<template>
	<MenuCard class="flex flex-col justify-around">
		
		<button @click="click('settings')" class="flex w-full justify-center py-2 hover:bg-blue-300 font-semibold text-lg">
			Settings
		</button>
		<button @click="click('about')" class="flex w-full justify-center py-2 hover:bg-blue-300 font-semibold text-lg">
			About BDFI
		</button>
		<button @click="click('help')" class="flex w-full justify-center py-2 hover:bg-blue-300 font-semibold text-lg">
			Help
		</button>
		<button @click="click('data')" class="flex w-full justify-center py-2 hover:bg-blue-300 font-semibold text-lg">
			Data
		</button>
		<button @click="click('signout')" class="flex w-full justify-center py-2 hover:bg-blue-300 font-semibold text-lg">
			Sign out
		</button>
	</MenuCard>
</template>


<script>
import { mapActions, mapMutations } from "vuex";
import MenuCard from "./MenuCard";
export default {
	name: "AuthActions",
	components: {
		MenuCard
	},
	data() {
		return {
			email: "",
			password: ""
		};
	},
	computed: {
		// ...mapGetters({
		// 	auth_user: state => state.auth.auth_user
		// })
	},
	methods: {
		click(io){
			
			switch(io){
				case 'settings':
					this.toggleAuthMenu();
					this.$router.push('settings')
					break;	
					
				case 'about':
					this.toggleAuthMenu();
					this.$router.push('about')
					break;	
					
				case 'help':
					this.toggleAuthMenu();
					this.$router.push('about')
					break;	
					
				case 'data':
					this.toggleAuthMenu();
					this.$router.push('data-dump')
					break;	
					
				case 'signout':
					this.toggleAuthMenu();
					this.logout();
					this.$router.push('home')
					break;	

			}
		},
		...mapActions(["signIn", "logout"]),
		...mapMutations(["toggleAuthMenu"])
	}
};
</script>
