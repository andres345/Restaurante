import { createApp } from "vue";
import Dashboard from '@/DashboardAdmin';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

const Vue = createApp(Dashboard);

Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);



