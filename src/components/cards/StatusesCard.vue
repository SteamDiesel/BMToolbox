<template>
  <div class="bg-gray-100 rounded-lg">
	  <div class="flex" v-for="(status, index) in statuses">
		  <input type="text" placeholder="Value" v-model="status.value">
		  <input type="color" v-model="status.color">
	  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'StatusesCard',
	computed:{
		...mapState({
			statuses: state => state.user_preferences.statuses
		})
	},
	methods:{
		...mapActions([])
	}
}
</script>

<style>

</style>