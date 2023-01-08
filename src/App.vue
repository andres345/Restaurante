<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//import { auth } from "./utils/firebase";
//import { onMounted } from 'vue';

export default {
    name: "App",
    /*setup() {
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        if(user){
          console.log("Usuario logueado");
        }else{
          console.log("usuario no logueado");
        }
      })
    });
  },*/
  components: {
  }
};
</script>

<style>
  @import url("@/App.scss");
</style>