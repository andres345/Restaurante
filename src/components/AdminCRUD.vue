<template>
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
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll">
								<label for="selectAll"></label>
							</span>
						</th>
                        <th>Fecha reserva</th>
                        <th>Hora</th>
						<th>Tipo de reserva</th>
                        <th>Cantidad personas</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1">
								<label for="checkbox1"></label>
							</span>
						</td>
                        <td>11/01/2023</td>
                        <td>11:00 am</td>
						<td>Cena</td>
                        <td>4</td>
                        <td></td>
                        <td>Pendiente</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        </td>
                    </tr>
                    <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox2" name="options[]" value="1">
								<label for="checkbox2"></label>
							</span>
						</td>
                        <td>13/01/2023</td>
                        <td>04:00 pm</td>
						<td>Almuerzo</td>
                        <td>3</td>
                        <td></td>
                        <td>Pendiente</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        </td>
                    </tr>
					<tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox3" name="options[]" value="1">
								<label for="checkbox3"></label>
							</span>
						</td>
                        <td>16/01/2023</td>
                        <td>08:00 pm</td>
						<td>Cena</td>
                        <td>4</td>
                        <td></td>
                        <td>Aprobado</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        </td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
	<!-- Edit Modal HTML -->
	<div id="editEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Editar Reserva</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Fecha de reserva</label>
							<Calendar 
                                id="spanish" 
                                size="30" 
                                :locale="es" 
                                mindate="#{myBean.fromDate}" 
                                placeholder="dd/mm/aaaa" 
                                v-model="reserva.fechaReserva" 
                                input-id="basic" 
                                autocomplete="off">
                            </Calendar>
						</div>
						<div class="form-group">
							<label>Hora reserva</label>
							<Calendar 
                                inputId="time12"
                                v-model="reserva.hora" 
                                :timeOnly="true" 
                                hourFormat="12" 
                                id="time12" 
                                value="hora" 
                                placeholder="Hora de reserva (12:00)">
                            </Calendar>
						</div>
						<div class="form-group">
							<label>Tipo de reserva</label>
                            <Dropdown 
                                v-model="reserva.tipoRes" 
                                id="tipoRes" 
                                :options="tipoR" 
                                optionLabel="name" 
                                placeholder="Tipo de reserva">
                            </Dropdown>
						</div>
						<div class="form-group">
							<label>Cantidad de personas</label>
							<input 
                                v-model="reserva.cantidadPersonas" 
                                :min="1" 
                                :max="8" 
                                placeholder="Cantidad de personas" 
                                id="cantidadPersonas" 
                                inputId="minmax" 
                                type="number" 
                                class="form-control" 
                                required />
						</div>		
                        <div class="form-group">
							<label>Descripción</label>
                            <Textarea 
                                v-model="reserva.descripcion" 
                                id="Desc" 
                                :autoResize="true" 
                                placeholder="Descripción (opcional)" 
                                rows="5" 
                                cols="30" 
                                class="form-control"/>  
						</div>			
                        <div class="form-group">
							<label>Estado</label>
							<Dropdown 
                                v-model="reserva.estado" 
                                id="estado" 
                                :options="estado" 
                                optionLabel="Estado" 
                                placeholder="Tipo de reserva">
                            </Dropdown>
						</div>			
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
						<input type="submit" class="btn btn-info" value="Save">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';

export default {
    name : "AdminCRUD",
    data() {
        return {
            reserva: {
                nombres : "" ,
                apellidos : "",
                fechaReserva: null,
                tipoRes: null,
                hora: '',
                cantidadPersonas: '',
                descripcion: '',
                estado: ''
            }
        }
    }, 
    
    components: {
        Dropdown,
        Calendar,
        Textarea
    },

    //Vectors Selects
    selectedDoc: null,
    estado: [
        {name: 'Pendiente', code: 'Pendiente'},
        {name: 'Aprobado', code: 'Aprobado'},
    ],
    tipoR: [
        {name: 'Cena', code: 'Cena'},
        {name: 'Almuerzo', code: 'Almuerzo'},
        {name: 'Onces', code: 'Onces'},
        {name: 'Cumpleaños', code: 'Cumpleanos'},
        {name: 'Ocasion especial', code: 'OcasionEspecial'}
    ],
    
    methods : {
    }
}

</script>

<style>
    @import url("./Styles/dash.scss");
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
</style>