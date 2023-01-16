import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/homeRes.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: '', path: '/', component: HomeView },
    { path: '/login', component: import('../views/loginRes.vue') },
    { path: '/register', name: "/register", component: import('../views/registerRes.vue') },
    { path: '/newBooking', component: import('../components/FormularioCliente.vue') },
    { name: '/Reservas', path: '/ListaReservas', component: import('../views/Dashboard/DashViews/AdminCRUD.vue') },
    { name: '/Dashboard', path: '/Dashboard', component: import('../views/Dashboard/DashboardAdmin.vue') },
    { name: '/Cuenta', path: '/Cuenta', component: import('../views/Dashboard/DashViews/CuentaDash.vue') },
    { name: '/Clientes', path: '/Clientes', component: import('../views/Dashboard/DashViews/ListaClientes.vue') }
  ]
});

export default router