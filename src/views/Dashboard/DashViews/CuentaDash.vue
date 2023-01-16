<template>
    <Dashboard/>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <center>
                            <h2>Cuenta Usuario</h2>
                        </center>
					</div>
                </div>
            </div>
            <div class="from-group" id="cAdmin">
                <CImage rounded thumbnail src="@/assets/images/user.png" width="200" height="200"/> <br/>
                <CCard :text-color="primary" class="mb-3" :class="'border-' + primary" style="max-width: 18rem">
                    <CCardHeader>Perfil del Administrador</CCardHeader>
                    <CCardBody>
                        <CCardTitle>Andres Vega</CCardTitle>
                        <CCardText>Nombre: {{ admin.name }}</CCardText>
                    </CCardBody>
                </CCard>
            </div>
        </div>
    </div>
</template>

<script>        
   import { CImage, CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
   import Dashboard from '../DashboardAdmin.vue';

   export default {
    name: 'CuentaDash',
    components: {
        Dashboard,
        CImage,
        CCard,
        CCardHeader,
        CCardBody,
        CCardTitle,
        CCardText
    }
  }
</script>

<style>
    @import url("./styles/dash.scss");
</style>

<style scoped>
    #cAdmin {
        display:inline-flex;
    }
</style>