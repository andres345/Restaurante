<template>
    <Dashboard/>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <center>
                            <h2>Lista de <b>Clientes</b></h2>
                        </center>
					</div>
					
                </div>
            </div>
            <table class="table table-striped table-hover" style="margin-top: 30px">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Tipo de documento</th>
                        <th>Número de documento</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Andres Felipe</td>
                        <td>Vega</td>
                        <td>CC</td>
                        <td>100062458</td>
                        <td>a@g.com</td>
                    </tr>
                    <tr>
                        <td>Leidy Johana</td>
                        <td>Talero</td>
                        <td>CC</td>
                        <td>11932455</td>
                        <td>l@g.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>        
   import Dashboard from '../DashboardAdmin.vue';

   export default {
    components: {
        Dashboard
    }
   }
</script>

<style>
    @import url("./styles/dash.scss");
</style>

<style scoped>
table {
    display: table;
    width: 50%;
    margin: 0 auto;
}
table, th, td {
    border: 1px solid black;
}

CCod {
    width: 150px;
}
</style>