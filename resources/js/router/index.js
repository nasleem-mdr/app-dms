import { createRouter, createWebHistory } from 'vue-router'

import DepartementsIndex from '../components/departements/DepartementsIndex.vue'
import DepartementsCreate from '../components/departements/DepartementsCreate'
import DepartementsEdit from '../components/departements/DepartementsEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'departements.index',
        component: DepartementsIndex
    },
    {
        path: '/departements/create',
        name: 'departements.create',
        component: DepartementsCreate
    },
    {
        path: '/departements/edit',
        name: 'departements.edit',
        component: DepartementsEdit
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})