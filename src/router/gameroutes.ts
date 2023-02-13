export default [
  {
    path: '',
    redirect: { name: 'games/ReactionTimer' },
  },
  {
    path: 'reactiontimer',
    name: 'games/ReactionTimer',
    component: () => import('pages/ReactionTimer.vue'),
  },
];
