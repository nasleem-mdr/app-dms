require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';
import router from './router'
import DepartementsIndex from './components/departements/DepartementsIndex.vue'

createApp({
    components: {
        DepartementsIndex
    }
}).use(router).mount('#app')