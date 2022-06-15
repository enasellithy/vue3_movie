<template>
  <div id="app">
    <NavigationDrawer/>
    <router-view/>
  </div>
</template>

<script>

import NavigationDrawer from "@/components/Shard/NavigationDrawer";
export default {
  name: 'App',
  components: {NavigationDrawer},
  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  max-width: 922px;
  margin: auto;
}
</style>