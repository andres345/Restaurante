<template>
  <SidebarDash/>
  <router-view/>
</template>

<script>
  import SidebarDash from "./SidebarDash.vue";

  export default {
    name: 'DashboardAdmin',
    components: {
      SidebarDash,
    },
    data() {
      return {
        reserva: {
          idCliente: null,
          numId: '',
          nombres : "" ,
          apellidos : "",
          fechaReserva: null,
          tipoRes: null,
          hora: '',
          cantidadPersonas: '',
          descripcion: '',
          estado: ''
        },

        admin: {
          nombreAdmin: ""
        }  
      };
    }
  }
</script>
