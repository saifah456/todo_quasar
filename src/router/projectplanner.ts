export default [
  {
    path: '',
    redirect: { name: 'projectplanner/ProjectPlanner' },
  },

  {
    path: '',
    name: 'projectplanner/ProjectPlanner',
    component: () => import('pages/projectplanner/ProjectPlanner.vue'),
  },
];
