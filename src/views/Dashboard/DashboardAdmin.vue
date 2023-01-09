<template>
  <SidebarDash/>
  <CRUD/>
</template>

<style>

</style>
<script>
  import SidebarDash from "./SidebarDash";
  import CRUD from '@/components/AdminCRUD';


  export default {
    name: 'DashboardAdmin',
    components: {
      SidebarDash,
      CRUD
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