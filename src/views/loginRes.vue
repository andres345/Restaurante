<template>
  <div class="container">
    <div class="row">
      <CForm
        class="needs-validation" 
        invalidate 
        :validated="validatedCustom01" 
        @submit.prevent="handleSubmit(!v$.$invalid)"
      >
        <div class="form-group">
          <h1 id="title">BURGER</h1>  
          <CFormFloating class="mb-3">
            <CFormInput 
              type="email" 
              id="floatingInput email" 
              placeholder="name@example.com"
              v-model="v$.email.$model" 
              :class="{'p-invalid':v$.email.$invalid && submitted}"
              aria-describedby="email-error"
              :invalid=setInvalidEmail             
              />
            <CFormLabel for="floatingInput">Email</CFormLabel>
            <span v-if="v$.email.$error && submitted">
              <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                <small class="p-error">El email es incorrecto</small>
              </span>
            </span>
            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">Email requerido</small>
          </CFormFloating>
        </div>
        <div class="form-group">
          <CFormFloating>
            <CFormInput 
            type="password" 
            id="floatingPassword" 
            placeholder="Password"
            :invalid=setInvalidPass
            v-model="v$.password.$model" 
            :class="{'p-invalid':v$.password.$invalid && submitted}" 
            toggleMask/>
            <CFormLabel for="exampleFormControlPassword">Contraseña</CFormLabel>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">La contraseña es requerida</small>
          </CFormFloating>
        </div>
        <div class="form-group">
          <CCol xs="12">
            <CButton color="primary" type="submit" id="btnLogin">Iniciar sesión</CButton>
          </CCol>
        </div>
        <div class="form-group"><br>
          <p id="noRegis">¿No tienes una cuenta?
            <router-link to='/register'>
              Regístrate
            </router-link>
          </p>
        </div>
      </CForm>
    </div>
  </div>
</template>

<script>
  import { CFormFloating, CFormInput, CFormLabel, CCol, CButton, CForm } from '@coreui/vue';
  import { email, required } from "@vuelidate/validators";
  import { useVuelidate } from "@vuelidate/core";
  import axios from "axios";

  export default{
    setup: () => ({ v$: useVuelidate() }),
    data() {
      return {
        email: '',
        password: '',
        accept: null,
        submitted: false,
        showMessage: false,
        setInvalidEmail: false,
        setInvalidPass: false,
      }
    },
    
    validations() {
      return {
        email: {
          required,
          email,
          setInvalidEmail: true,
        },
        password: {
          required
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
      CForm
    },

    mounted:function() {
      var logForm = this.toFormData(this.email, this.password);
        axios.post('@/database/login.php', logForm)
        .then(function(response){
          if(response.data.error){
            return;
          }else{
            setTimeout(function(){
              window.location.href="@/database/success.php";
            },2000);             
          }
        });
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

      toFormData(obj){
        var form_data = new FormData();
        for(var key in obj){
          form_data.append(key, obj[key]);
        }
        return form_data;
      },

      toggleDialog() {
        this.showMessage = !this.showMessage;
        //this.setInvalid = !this.setInvalid;
        
        if(!this.showMessage && !this.setInvalid) {
          this.resetForm();
        }
      },
      
      resetForm() {
        this.email = '';
        this.password = '';
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
    width: 350px;
    height: 450px;
    background-color: #fcfcfc;
    padding: 40px;
    border-radius: 30px;
    box-shadow: rgba(34, 34, 34, 0.1) 11px 10px 18px 0px;
    border: transparent;
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

  #noRegis {
    font-family: 'Nunito', sans-serif;
    color: rgb(78, 78, 78);
  }

  #btnLogin {
    font-family: 'Barlow', sans-serif;
    padding: 10px 10px;
  }

  #title {
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 35px;
  }
</style>