<template>
  <div class="min-h-screen text-gray-600 bg-gray-200" id="app">
    <div id="nav" class="bg-gray-300">
      <div class="container mx-auto flex justify-between">
        <div>BM Toolbox</div>
        <div class="font-semibold">
          <router-link to="/">Home</router-link> | 
          <router-link to="/about">About</router-link> | 
          <router-link to="/preferences">Preferences</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import {mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(['getPreferencesFromLocalStorage'])
  },
  mounted() {
    this.getPreferencesFromLocalStorage();
  }
};
</script>

<style>
.primary {
  fill: #64D5CA; }

.secondary {
  fill: #20504F; }
</style>
