import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/homeRes.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: import('../views/loginRes.vue') },
    { path: '/register', component: import('../views/registerRes.vue') },
    { path: '/newBooking', component: import('../components/FormularioCliente.vue') }
  ]
})

export default router