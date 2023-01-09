<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>

import Dashboard from '@/views/Dashboard/DashboardAdmin.vue';

export default {
  name: "App",
  components: {
    Dashboard,
  }
};
</script>

<style>
  @import url("@/App.scss");
</style>