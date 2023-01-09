import Vue from 'vue';
import Vuelidate from 'vuelidate';

import Registro from './registerRes.vue';

Vue.use(Vuelidate);

new Vue({
    el: '#registerRes',
    render: h => h(Registro)
});
