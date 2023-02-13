<template>
  <essential-link
    v-for="link in links"
    :key="link.title"
    v-bind="link"
  ></essential-link>
</template>
<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const links = [
  {
    title: 'Home',
    icon: 'home',
    to: { name: 'test-home' },
    level: 0,
    children: [],
  },
  {
    title: 'Project Planner',
    icon: 'checklist',
    to: { name: 'projectplanner/ProjectPlanner' },
    level: 0,
    children: [],
  },
];
</script>
