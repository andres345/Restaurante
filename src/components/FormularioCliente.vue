<template>
    <center>
        <h1 id="tituloP">BURGER</h1>  
    </center>
  <div class="container">
    <div class="row">
      <CForm 
        class="needs-validation" 
        invalidate 
        :validated="validatedCustom01" 
        @submit="handleSubmitCustom01"
      >
          <h2 id="title">Reservar</h2>
          <div class="form-group col-12">
            <CFormFloating id="form-floating">
              <CFormSelect  floatingLabel="Tipo reserva" aria-label="Tipo reserva" required>
                <option>
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
                    Ocasión especial
                </option>
              </CFormSelect>
            </CFormFloating>
            <CFormFloating id="form-floating">
                <CFormInput required type="number" feedback="Por favor ingrese cantidad" label="Cantidad de personas" min="1" max="8"/>
            </CFormFloating>
          </div>
          <div class="form-group col-12">
            <CFormFloating id="form-floating">
                <label for="example-datepicker">Fecha de reserva</label>
                <input required id="startDate" class="form-control mb-2" v-model="value" type="date" />
            </CFormFloating>
            <CFormFloating id="form-floating">
                <label for="example-datepicker">Hora de reserva</label>
                <input required class="form-control mb-2" id="startDate" type="time" label="Hora de reserva" locale="en-US" time="02:17:35 PM" />
            </CFormFloating>
          </div>
          <div class="form-group">
            <CFormFloating CFormFloating id="form-floating" class="colCenter">
              <CFormTextarea label="Descripción" rows="3"></CFormTextarea>
            </CFormFloating>
          </div>
          <div class="form-group">
            <CCol>
              <CButton color="success" type="submit" id="btnLogin">Reservar</CButton>
            </CCol>
          </div>
      </CForm>
    </div>
  </div>
  
</template>

<script>
  import { CFormFloating, CCol, CButton, CForm, CFormSelect, CFormTextarea, CFormInput } from '@coreui/vue';

  export default{
    components: {
      CFormFloating, 
      CCol, 
      CButton,
      CForm,
      CFormSelect,
      CFormTextarea,
      CFormInput
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 500px;
    background-color: #fcfcfc;
    padding: 40px;
    border-radius: 30px;
    box-shadow: rgba(34, 34, 34, 0.1) 11px 10px 18px 0px;
    border: transparent;
  }

  .colCenter {
    width: 60%;
    font-size: 13px;
  }

  .col-12{
    display: inline-flex;
    font-size: 13px;
  }

  #form-floating{ 
    width: 100%; 
    margin-right: 10px;
  }

  .form-group {
    margin: 0 auto;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
    font-size: 14px;
  }

  #floatingInput {
    font-size: 14px;
  }

  #floatingPassword {
    font-size: 16px;
  }

  #tituloP {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    color: #DADADA;
  }

  #noRegis {
    font-family: 'Nunito', sans-serif;
    color: rgb(78, 78, 78);
  }

  #btnLogin {
    font-family: 'Barlow', sans-serif;
    padding: 10px 10px;
  }

  #title {
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    font-size: 40px;
    display: flex; 
    text-align: center;
    margin: 0 auto;
  }
</style>