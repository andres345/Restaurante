import { createApp } from "vue";
import Dashboard from '@/DashboardAdmin';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import router from '@/router/dashRouter';

const Vue = createApp(Dashboard);

Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
Vue.use(router);


