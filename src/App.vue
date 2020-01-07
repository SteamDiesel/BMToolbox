<template>
  <div id="app">
    <div id="nav" class="bg-gray-300">
      <div class="container mx-auto flex justify-between">
        <div>BM Toolbox</div>
        <div>
          <router-link to="/">Home</router-link> | 
          <router-link to="/about">About</router-link>
        </div>
        <div>
          Pro Version
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>

</style>
