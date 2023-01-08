<template>
    <div class="register">
      <h1 class="title">Registro</h1>
      <form action class="form" @submit.prevent="register">
        <label class="form-label" for="#email">Email:</label>
        <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        >
        <label class="form-label" for="#password">Password:</label>
        <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        >
        <!--<Password v-model="password">
            <template #header>
                <h6>Elige una contraseña</h6>
            </template>
            <template #footer>
                
                <Divider />
                <p class="mt-2">Sugerencias</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>Al menos una minúscula</li>
                    <li>Al menos una mayúscula</li>
                    <li>Al menos un número</li>
                    <li>Mínimo 8 caracteres</li>
                </ul>
            </template>
        </Password>-->
        <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
        <input
          v-model="passwordRepeat"
          class="form-input"
          type="password"
          id="password-repeat"
          placeholder="Password"
        >
        <input class="form-submit" type="submit" value="Sign Up">
      </form>
    </div>
  </template>
  
  <script>
  //import Password from 'primevue/password';
  //import Divider from 'primevue/divider';
  import auth from "@/logic/auth";
  export default {
    data: () => ({
      email: "",
      password: "",
      passwordRepeat: ""
    }),
    methods: {
      async register() {
        try {
          await auth.register(this.email, this.password);
          this.$router.push("/");
        }catch (error){
          console.log(error);
        }
      }
    }, 
    components: {
      //Password,
      //Divider
    }
  };
  </script>
  
  <style lang="scss" scoped>

  ::v-deep(.p-password input) {
    width: 15rem
  }

  .register {
    padding: 2rem;
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
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  .form-label {
    margin-top: 2rem;
    color: white;
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
  </style>
  