import { createApp } from "vue";
import PrimeVue from 'primevue/config';
import DialogD from 'primevue/dialog';

import App from "./App";
import Vuelidate from 'vuelidate';
import router from '@/router/router';
import MarqueeText from 'vue-marquee-text-component';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

const app = createApp(App);

app.config.productionTip = false;

app.component("DialogD", DialogD);
app.component('marquee-text', MarqueeText);
app.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
app.use(router, PrimeVue, Vuelidate);
app.mount('#app')
