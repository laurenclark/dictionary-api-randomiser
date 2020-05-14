import Vue from 'vue';
import VueRouter from 'vue-router';

import Queries from '@/views/Queries.vue';
import History from '@/views/History.vue';
import Statistics from '@/views/Statistics.vue';
import { setLastActivity, getLastActivity } from '@/utility/activityTracker';

import {
    MAX_TIME_TO_RETURN,
    LS_ROUTE_KEY,
    STATS_URL,
    HISTORY_URL
} from '@/consts';

Vue.use(VueRouter);

let isFirstTransition = true;

const routes = [
    {
        path: '/',
        name: 'Queries',
        component: Queries
    },
    {
        path: HISTORY_URL,
        name: 'History',
        component: History
    },
    {
        path: STATS_URL,
        name: 'Stats',
        component: Statistics
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const lastRouteName = localStorage.getItem(LS_ROUTE_KEY);
    const lastActivityAt = getLastActivity();

    const hasBeenActiveRecently = Boolean(
        lastActivityAt &&
            Date.now() - Number(lastActivityAt) < MAX_TIME_TO_RETURN
    );

    const shouldRedirect = Boolean(
        to.name === 'Queries' &&
            isFirstTransition &&
            lastRouteName &&
            hasBeenActiveRecently
    );

    if (shouldRedirect) {
        next({ name: lastRouteName });
    } else {
        next();
    }

    isFirstTransition = false;
});

router.afterEach(to => {
    localStorage.setItem(LS_ROUTE_KEY, to.name);
    setLastActivity();
});

export default router;
