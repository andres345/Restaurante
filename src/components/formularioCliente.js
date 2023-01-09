import { createApp } from "vue";
import PrimeVue from 'primevue/config';

import FormularioCliente from "./FormularioCliente.vue";
import Vuelidate from 'vuelidate';

const app = createApp(FormularioCliente);

app.config.productionTip = false;

app.use(PrimeVue, Vuelidate);
app.mount('#FormularioCliente');
