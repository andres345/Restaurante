<template id="ComponentC">
    <main class="form-signin">
    <h1 id="titulo">Hacer un reserva</h1><br>
    <form @submit.prevent="enviarFormulario">
        <div class="row">
            <div class="form-group col">
                <InputText 
                    id="inputText" 
                    placeholder="Nombre" 
                    class="form-control" 
                    type="text" 
                    v-model="reserva.nombres"
                    :class="{ 'is-invalid': procesando && nombreInvalido }"
                    @focus="resetEstado" 
                    required />
                <small id="username2-help" class="p-error">Los nombres no son válidos.</small>
            </div>
            <div class="form-group col">
                <InputText 
                    id="inputText" 
                    placeholder="Apellidos" 
                    class="form-control" 
                    type="text" 
                    v-model="reserva.apellidos"
                    :class="{ 'is-invalid': procesando && apellidoInvalido }"
                    @focus="resetEstado" 
                    required/>
                <small id="username2-help" class="p-error">Los apellidos no son válidos.</small>
            </div>
        </div>
        <div class="row">
            <div class="form-group col">
                <Dropdown 
                    id="tipoDoc" 
                    v-model="reserva.tipoDocumento" 
                    :options="Doc" 
                    optionLabel="name" 
                    placeholder="Tipo de documento"
                    :class="{ 'is-invalid': procesando && tipoDocInvalido }"
                    @focus="resetEstado"
                    required>
                </Dropdown>
                <small id="username2-help" class="p-error">Seleccione un tipo de documento.</small>
            </div>
            <div class="col">
                <input 
                    id="numDoc" 
                    v-model="reserva.numeroDocumento" 
                    :min="20000000" 
                    :max="1500000000" 
                    placeholder="# de documento" 
                    type="number" 
                    class="form-control" 
                    :class="{ 'is-invalid': procesando && numDocInvalido }"
                    @focus="resetEstado"
                    required />
                <small id="username2-help" class="p-error">Porfavor coloque un número válido</small>
            </div>
        </div>
        <div class="row">
            <div class="form-group col">
                <InputText 
                    id="inputText" 
                    placeholder="Email" 
                    class="form-control" 
                    type="email" 
                    v-model="reserva.email" 
                    :class="{ 'is-invalid': procesando && emailInvalido }"
                    @focus="resetEstado"
                    required/>
                <small id="username2-help" class="p-error">El email no es válido.</small>
            </div>
            <div class="form-group col">
                <Calendar 
                    id="spanish" 
                    size="30" 
                    :locale="es" 
                    mindate="#{myBean.fromDate}" 
                    placeholder="dd/mm/aaaa" 
                    v-model="reserva.fechaReserva" 
                    input-id="basic" 
                    :class="{ 'is-invalid': procesando && fechaInvalido }"
                    @focus="resetEstado"
                    autocomplete="off">
                </Calendar>
                <small id="username2-help" class="p-error">Porfavor ingrese fecha de reserva.</small>
            </div>
        </div>
        <div class="row">
            <div class="form-group col">
                <input 
                    v-model="reserva.cantidadPersonas" 
                    :min="1" 
                    :max="8" 
                    placeholder="Cantidad de personas" 
                    id="cantidadPersonas" 
                    inputId="minmax" 
                    type="number" 
                    class="form-control" 
                    :class="{ 'is-invalid': procesando && cantPerInvalido }"
                    @focus="resetEstado"
                    required />
                <small id="username2-help" class="p-error">Ingrese la cantidad de personas.</small>
            </div>
            <div class="form-group col">
                <Calendar 
                    inputId="time12"
                    v-model="reserva.hora" 
                    :timeOnly="true" 
                    hourFormat="12" 
                    id="time12" 
                    value="hora" 
                    :class="{ 'is-invalid': procesando && horaInvalido }"
                    @focus="resetEstado"
                    placeholder="Hora de reserva (12:00)">
                </Calendar>
                <small id="username2-help" class="p-error">Ingrese una hora de llegada.</small>
            </div>
        </div>
        <div class="form-group">
            <Dropdown 
                v-model="reserva.tipoRes" 
                id="tipoRes" 
                :options="tipoR" 
                optionLabel="name" 
                :class="{ 'is-invalid': procesando && tipoResInvalido }"
                @focus="resetEstado"
                placeholder="Tipo de reserva">
            </Dropdown>
            <small id="username2-help" class="p-error">Porfavor indique tipo de reserva.</small>
        </div>
        <div class="form-group">
            <Textarea 
                v-model="reserva.descripcion" 
                id="Desc" 
                :autoResize="true" 
                placeholder="Descripción (opcional)" 
                rows="5" 
                cols="30" 
                :class="{ 'is-invalid': procesando && descInvalido }"
                @focus="resetEstado"
                class="form-control"/>  
        </div>
        <div class="form-group">
            <Button label="Enviar" id="submitBtn" class="p-button-success"></Button>
        </div>
    </form>
    </main>
</template>
  
<style scoped>
    @import url("./Styles/estilos.scss");
</style>

<script>
    import Dropdown from 'primevue/dropdown';
    import Calendar from 'primevue/calendar';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    export default {
        el: "#ForularioCliente",
        name: 'FormularioCliente',
        components: {
            Dropdown,
            Calendar,
            InputText,
            Button
        },

        data() {
            return {
                //Inialization vars
                procesando: false,
                correcto: false,
                error: false,
                reserva: {    
                    nombres: '',
                    apellidos: '',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    email: '',
                    fechaReserva: null,
                    tipoRes: null,
                    hora: '',
                    cantidadPersonas: '',
                    descripcion: ''
                },

                //Validation form vars
                errors: [],
                name: null,
                age: null,
                movie: null,
    
                //Vectors Selects
                selectedDoc: null,
                Doc: [
                    {name: 'Cédula', code: 'Cédula'},
                    {name: 'Pasaporte', code: 'Pasaporte'},
                ],
                tipoR: [
                    {name: 'Cena', code: 'Cena'},
                    {name: 'Almuerzo', code: 'Almuerzo'},
                    {name: 'Onces', code: 'Onces'},
                    {name: 'Cumpleaños', code: 'Cumpleanos'},
                    {name: 'Ocasion especial', code: 'OcasionEspecial'}
                ]
            }
        }
    }
</script>


