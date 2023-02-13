import { RouteRecordRaw } from 'vue-router';
import testroutes from './testRoutes';
import gameroutes from './gameroutes';
import projectplannerroutes from './projectplanner';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TestLayout.vue'),
    children: testroutes,
  },
  {
    path: '/games',
    component: () => import('layouts/GameLayout.vue'),
    children: gameroutes,
  },
  {
    path: '/todo',
    component: () => import('layouts/ProjectPlannerLayout.vue'),
    children: projectplannerroutes,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
