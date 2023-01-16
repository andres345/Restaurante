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
        @submit.prevent="handleSubmit(!v$.$invalid)"
      >
          <h2 id="title">Registro</h2>
          <div class="form-group col-12">
            <CFormFloating id="form-floating">
              <CFormInput type="text" v-model="v$.nombre.$model" :class="{'p-invalid':v$.nombre.$invalid && submitted}" id="floatingInput" placeholder="Nombre"/>
              <CFormLabel for="floatingInput" :class="{'p-error':v$.nombre.$invalid && submitted}">Nombres</CFormLabel>
            </CFormFloating>
            <small v-if="(v$.nombre.$invalid && submitted) || v$.nombre.$pending.$response" class="p-error">Los nombres son requeridos</small>
            <CFormFloating id="form-floating">
              <CFormInput type="text" v-model="v$.apellido.$model" :class="{'p-invalid':v$.apellido.$invalid && submitted}" id="floatingInput" placeholder="Apellidos"/>
              <CFormLabel for="floatingInput" :class="{'p-error':v$.apellido.$invalid && submitted}">Apellidos</CFormLabel>
            </CFormFloating>
            <small v-if="(v$.apellido.$invalid && submitted) || v$.apellido.$pending.$response" class="p-error">Los apellidos son requeridos</small>
          </div>
          <div class="form-group col-12">
            <CFormFloating id="form-floating">
              <CFormInput type="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" id="floatingInput" placeholder="name@example.com"/>
              <CFormLabel for="floatingInput" :class="{'p-error':v$.email.$invalid && submitted}">Email</CFormLabel>
            </CFormFloating>
            <span v-if="v$.email.$error && submitted">
            <small class="p-error">El email es incorrecto</small>
            </span>
            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">El email es requerido</small>
            <CFormFloating id="form-floating" >
              <CFormInput type="password" v-model="v$.password.$eventpass.$model" :class="{'p-invalid':v$.password.pass.$invalid && submitted}" id="floatingPassword" placeholder="Password"/>
              <CFormLabel for="exampleFormControlPassword" :class="{'p-error':v$.password.pass.$invalid && submitted}">Contraseña</CFormLabel>
            </CFormFloating>
            <small v-if="(v$.password.pass.$invalid && submitted) || v$.password.pass.$pending.$response" class="p-error">La contraseña es requerida</small>
          </div>
          <div class="form-group col-12">
            <CFormFloating id="form-floating">
              <CFormInput type="password" v-model="v$.password.pass2.$model" :class="{'p-invalid':v$.password.pass2.$invalid && submitted}" id="floatingPassword" placeholder="Password"/>
              <CFormLabel for="exampleFormControlPassword" :class="{'p-error':v$.password.pass2.$invalid && submitted}">Repetir Contraseña</CFormLabel>
            </CFormFloating>
            <small v-if="(v$.password.pass2.$invalid && submitted) || v$.password.pass2.$pending.$response" class="p-error">La confirmación de contraseña es requerida</small>
            <CFormFloating id="form-floating">
              <CFormSelect  floatingLabel="Tipo de documento" aria-label="Tipo de documento">
                <option>
                    CC
                </option>
                <option>
                    PAS
                </option>
                <option>
                    NIP
                </option>
                <option>
                    NIT
                </option>
              </CFormSelect>
            </CFormFloating>
          </div>
          <div class="form-group">
            <CFormFloating CFormFloating id="form-floating" class="colCenter">
              <CFormInput type="number" v-model="v$.numID.$model" :class="{'p-invalid':v$.numID.$invalid && submitted}" id="floatingInput" placeholder="1000624111"/>
              <CFormLabel for="floatingInput" :class="{'p-error':v$.numID.$invalid && submitted}">Numero de Identificación</CFormLabel>
            </CFormFloating>
          </div>
          <div class="form-group">
            <CCol>
              <CButton color="primary" type="submit" id="btnLogin">Registrar</CButton>
            </CCol>
          </div>
      </CForm>
    </div>
    <div class="form-group"><br>
        <p id="noRegis">Ya tengo cuenta
            <router-link to='/login'>
                Iniciar Sesión
            </router-link>
        </p>
    </div>
  </div>
  
</template>

<script>
  import { CFormFloating, CFormInput, CFormLabel, CCol, CButton, CForm, CFormSelect } from '@coreui/vue';
  import { email, required, minLength, sameAs, numeric } from "@vuelidate/validators";
  import { useVuelidate } from "@vuelidate/core";

  export default{
    setup: () => ({ 
      v$: useVuelidate() 
    }),
    data() {
      return{
        nombre: '',
        apellido: '',
        email: '',
        password: {
          pass: '',
          pass2: '',
        },
        numID: '',
        accept: null,
        submitted: false,
        showMessage: false
      }
    },

    validations() {
      return {
        nombre: {
          required
        },
        apellido: {
          required
        },
        email: {
          required,
          email,
        },
        password: {
          pass: {
            required, 
            minLength: minLength(8)
          },
          pass2: {
            required,
            sameAs: sameAs(this.password.pass)
          }
        },
        numID: {
          required,
          numeric
        },
        accept: {
          required
        }
      }
    },

    components: {
      CFormFloating, 
      CFormInput, 
      CFormLabel,
      CCol, 
      CButton,
      CForm,
      CFormSelect
    },

    methods: {
      handleSubmit(isFormValid) {
        this.submitted = true;
        this.setInvalid = false;

        if (!isFormValid) {
          //this.setInvalid = true;
          return;
        }

        this.toggleDialog();
      },

      toggleDialog() {
        this.showMessage = !this.showMessage;
        //this.setInvalid = !this.setInvalid;
        
        if(!this.showMessage && !this.setInvalid) {
          this.resetForm();
        }
      },
      
      resetForm() {
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.password.pass = '';
        this.password.pass2 = '';
        this.numID = '';
        this.accept = null;
        this.submitted = false;
        this.setInvalid = false;
      }
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
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
  }
</style>