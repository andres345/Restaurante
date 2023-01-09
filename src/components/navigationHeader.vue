<template>
    <div class="template">
    <router-link to="/">
      <img v-bind:src="require('@/assets/images/LogoBurger.svg')" class="logo"/>
    </router-link>
    <ul>
      <div class="items">
          <router-link to="/login">
              <Button label="Iniciar sesión" id="btnISesion" class="p-button-warning"></Button>
          </router-link>
      </div>
    </ul>
    </div>
  </template>
  
  <script>
  import Button from 'primevue/button';

  export default {
    name: "navigationHeader",
    components: {
      Button,
    }
  };
  </script>
  
  <style scoped>
  .template {
    position: relative;
    z-index: 13;
  }

  #btnISesion {
    text-decoration: none;
    color: #fff;
    display: inline-flex;
  }

  .logo{
    margin: 0 auto;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 20;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-top: -40px
  }
  li {
    display: inline-flex;
    padding: 1em 0.5em;
  }

  .items {
    position: absolute;
    right: 40px;
    top: 40px;
    text-decoration: none;
  }
  </style>