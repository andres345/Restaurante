import { createApp } from "vue";
import PrimeVue from 'primevue/config';
import DialogD from 'primevue/dialog';
import App from "./App";
import router from '@/router/router';
import MarqueeText from 'vue-marquee-text-component';

const app = createApp(App);

app.config.productionTip = false;
app.component("DialogD", DialogD);
app.component('marquee-text', MarqueeText);
app.use(router, PrimeVue);
app.mount('#app')
