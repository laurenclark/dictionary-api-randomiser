import Vue from 'vue';
import VueRouter from 'vue-router';

import Queries from '../views/Queries.vue';
import History from '../views/History.vue';
import Statistics from '../views/Statistics.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Queries',
        component: Queries
    },
    {
        path: '/',
        name: 'History',
        component: History
    },
    {
        path: '/',
        name: 'Statistics',
        component: Statistics
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
