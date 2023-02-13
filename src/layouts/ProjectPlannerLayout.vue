<template>
  <main-layout>
    <template #menu-links>
      <project-planner-side-pannel />
    </template>
  </main-layout>
</template>

<script setup lang="ts">
import ProjectPlannerSidePannel from 'components/projectplanner/ProjectPlannerSidePannel.vue';
import MainLayout from './MainLayout.vue';
</script>
