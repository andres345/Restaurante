<template>
  <div class="login">
    <h1 class="title">BURGER</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email</label>
      <InputText 
        id="email" 
        type="email" 
        aria-describedby="username2-help" 
        />
      <small v-if="error1" id="username2-help" class="p-error1">El email es incorrecto.</small>
      <small v-if="error2" id="username2-help" class="p-error2">El email es requerido.</small>
      <label class="form-label" for="#password">Contraseña</label>
      <Password 
        id="password"
        type="password"
        v-model="password" 
        :feedback="false" />
      <small v-if="error3" id="username2-help" class="p-error3">La contraseña es necesaria.</small>
      <small v-if="error4" id="username2-help" class="p-error4">La contraseña es incorrecta.</small>
      <input class="form-submit" type="submit" value="Login">
    </form>
    <p class="msg">¿No tienes cuenta?
      <a href="/register">
        Regístrate
      </a>
    </p>
  </div>
  </template>

<script>
//import auth from "@/logic/auth";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

export default {
  data: () => ({
    email: "",
    password: "",
    error1: false,
    error2: false,
    error3: false,
    error4: false,
    formSuccess: false
  }),

  components: {
    InputText,
    Password
  },

  methods: {
    login(){
     
    // Validar correo electrónico
    if (!this.validateEmail(this.email)) {
      this.error1 = true;
      document.getElementById("email").addClass('p-invalid');
    } else if(!this.validateEmail2(this.email)) {
      this.error2 = true;
    }

    // Validar contraseña
    if (!this.validatePassword(this.password)) {
      this.error3 = true;
    } else {
      this.passwordError = '';
    }

    // Si no hay errores, establecer indicador de éxito
    if (!this.error1 && !this.error2 && !this.error3 && !this.error4) {
      this.formSuccess = true;
    }
  },

  validateEmail(email) {
    if(email.value.length() > 1){
      return true;
    }
  },

  validateEmail2(email) {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   
    if(emailRegex.test(email)){
      return true;
    }
  },

  validatePassword(password) {
    if(password.value.length() > 1)  {
      return true;
    }
  }

  }
};
</script>

<style lang="scss" scoped>
.p-inputtext {
  display: block;
  margin-bottom: .5rem;
}
.login {
  padding: 2rem;
  font-family: 'Barlow', sans-serif;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgb(250, 250, 250);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: rgb(58, 58, 58);
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>