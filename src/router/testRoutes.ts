export default [
  {
    path: '',
    redirect: { name: 'test-home' },
  },
  {
    path: 'home',
    name: 'test-home',
    component: () => import('pages/IndexPage.vue'),
  },

  {
    path: 'testsubpage1',
    name: 'test-subpage1',
    component: () => import('pages/TestPage.vue'),
  },
  {
    path: 'testsubpage2',
    name: 'test-subpage2',
    component: () => import('components/Test/test-1.vue'),
  },
  {
    path: 'testsubpage3',
    name: 'test-subpage3',
    component: () => import('components/Test/test-2.vue'),
  },
];
