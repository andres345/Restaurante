<template>
  <div class="jumbotron">
      <div class="container">
          <div class="row">
              <div class="col-sm-8 offset-sm-2">
                  <div>
                      <center>
                        <h2>Registro</h2>
                      </center>
                      <br>
                      <form>
                          <div class="form-group">
                              <label for="firstName">Nombres</label>
                              <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                              <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">Los nombres son requeridos</div>
                          </div>
                          <div class="form-group">
                              <label for="lastName">Apellidos</label>
                              <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                              <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Los apellidos son requeridos</div>
                          </div>
                          <div class="form-group">
                              <label for="email">Email</label>
                              <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                  <span v-if="!$v.user.email.required">El Email es requerido</span>
                                  <span v-if="!$v.user.email.email">El Email es inválido</span>
                              </div>
                          </div>
                          <div class="form-group">
                              <label for="password">Contraseña</label>
                              <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                  <span v-if="!$v.user.password.required">La contraseña es requerida</span>
                                  <span v-if="!$v.user.password.minLength">La contraseña debe tener 8 caracteres</span>
                              </div>
                          </div>
                          <div class="form-group">
                              <label for="confirmPassword">Confirmar contraseña</label>
                              <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                              <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                  <span v-if="!$v.user.confirmPassword.required">Confirmación de contraseña requerida</span>
                                  <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Contraseñas no son iguales</span>
                              </div>
                          </div><br>
                          <div class="form-group">
                              <button @click.prevent="handleSubmit" class="btn btn-primary">Registrar</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    export default {
      name: "registerRes",
      data() {
          return {
              user: {
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  submitted: false
              },
          };
      },
      validations: {
          user: {
              firstName: { required },
              lastName: { required },
              email: { required, email },
              password: { required, minLength: minLength(8) },
              confirmPassword: { required, sameAsPassword: sameAs('password') }
          }
      },
      methods: {
        handleSubmit() {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
                if (this.$v.$invalid) {
                return;
            }
            
          alert("Cuenta agregada exitosamente");

        },
      }
  };
</script>
