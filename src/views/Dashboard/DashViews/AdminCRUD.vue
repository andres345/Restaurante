<template>
    <Dashboard/>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <center>
                            <h2>Lista de <b>Reservas</b></h2>
                        </center>
					</div>
					
                </div>
            </div>
            <table class="table table-striped table-hover" style="margin-top: 30px">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>id Cliente</th>
                        <th>Fecha reserva</th>
                        <th>Hora</th>
						<th>Tipo de reserva</th>
                        <th>Cantidad personas</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Editar</th>
                        <th>Editar estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservas in reserva">
                        <td>{{ reserva.idReserva }}</td>
                        <td>{{ reserva.idCliente }}</td>
                        <td>{{ reserva.fechaReserva }}</td>
                        <td>{{ reserva.horaReserva }}</td>
						<td>{{ reserva.cantPersonas }}</td>
                        <td>{{ reserva.desc }}</td>
                        <td></td>
                        <td><CButton color="secondary" @click="toggleButton()" shape="rounded-pill" disabled="true"><span>pendiente</span></CButton></td>
                        <td>
                            <CButton style="font-size: 30px; color: #FFC300;" @click="() => { visibleStaticBackdropDemo = true }"><i class='bx bx-edit'></i></CButton>
                        </td>
                        <td>
                            <CButton @click="() => { setEstatus = true }"><i class='bx bxs-calendar-check' style="font-size: 30px; color: #1FC67F;"></i></CButton>
                        </td>
                    </tr>
                    <tr>
                        <td>Juan</td>
                        <td>100064155</td>
                        <td>11/01/2023</td>
                        <td>11:00 am</td>
						<td>Cena</td>
                        <td>4</td>
                        <td></td>
                        <td><CButton color="secondary" @click="toggleButton()" shape="rounded-pill" disabled="true"><span>pendiente</span></CButton></td>
                        <td>
                            <CButton style="font-size: 30px; color: #FFC300;" @click="() => { visibleStaticBackdropDemo = true }"><i class='bx bx-edit'></i></CButton>
                        </td>
                        <td>
                            <CButton @click="() => { setEstatus = true }"><i class='bx bxs-calendar-check' style="font-size: 30px; color: #1FC67F;"></i></CButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
	<!--MODAL-->
    <CModal backdrop="static" :visible="visibleStaticBackdropDemo" @close="() => { visibleStaticBackdropDemo = false }">
    <CModalHeader>
      <CModalTitle>Editar reserva</CModalTitle>
    </CModalHeader>
    <CModalBody width="100%">
        <CForm
        class="needs-validation" 
        novalidate 
        :validated="validatedCustom01" 
        @submit="handleSubmitCustom01"
        >
        <CRow class="g-3">
        <CCol xs>
            <CFormInput
                feedbackValid="¡Bien!"
                id="validationCustom01"
                label="Nombres"
                required
                value="Andres"
                />
        </CCol>
        <CCol xs>
                <CFormInput
                feedback="Porfavor ingrese numero de documento"
                id="validationServer05"
                label="Numero Documento"
                required
                />
        </CCol>    
        <CCol xs>
            <label for="example-datepicker">Fecha de reserva</label>
            <input id="startDate" class="form-control mb-2" v-model="value" type="date" />
        </CCol>
        <CCol xs>
            <!-- Invalid == id="datepicker-invalid" :state="false" -->
            <label for="example-datepicker">Hora de reserva</label>
            <input class="form-control mb-2" id="startDate" type="time" label="Hora de reserva" locale="en-US" time="02:17:35 PM" />
        </CCol>
        <CCol xs>
            <CFormSelect
                aria-describedby="validationCustom04Feedback"
                feedbackInvalid="Please select a valid state."
                id="validationCustom04"
                label="Tipo de reserva"
                required
            >
            <option selected="true" disabled="" value="">
                Cena
            </option>
            <option>
                Almuerzo
            </option>
            <option>
                Onces
            </option>
            <option>
                Cumpleaños
            </option>
            <option>
                Ocasion Epecial
            </option>
            </CFormSelect>
        </CCol>
        <CCol xs>
            <CFormInput
                type="number"
                feedback="Por favor ingrese cantidad"
                id="validationServer05"
                label="Cantidad de personas"
                min="1" max="8"
            />
        </CCol>
        <CCol xs>
            <CFormTextarea
                id="exampleFormControlTextarea1"
                label="Descripción"
                rows="3"
            >
            </CFormTextarea>
        </CCol>
        </CRow>
        </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleStaticBackdropDemo = false }">
        Cerrar
      </CButton>
      <CButton color="primary" type="submit">Editar</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>        
   import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CForm, CFormSelect, CFormInput, CFormTextarea  } from '@coreui/vue'
   import Dashboard from '../DashboardAdmin.vue';
   import axios from 'axios';

   export default {
    data() {
      return { 
        setEstatus: false,
        visibleStaticBackdropDemo: false,
        reservas:[]
      }
    },
    
    components: {
        Dashboard,
        CModal,
        CModalHeader,
        CModalTitle,
        CModalBody,
        CModalFooter,
        CButton,
        CForm,
        CFormSelect,
        CFormInput,
        CFormTextarea
    },
    mounted:function(){
        this.mostrarReservas();   
    },
    methods: {
        mostrarReservas:function() {
            axios.get('@/database/api.php?evento=mostrar').then(function(response){
                if(response.data.verificar == true){
                    this.reservas = response.data.reserva
                    alert(response.data.mensaje);
                }
                else{
                    alert.error(response.data.mensaje);
                }
                this.reserva = response.data.reserva;
                console.log(response);
            })
        },
        toggleButton(){
            this.setEstatus = !this.setEstatus;
        },

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