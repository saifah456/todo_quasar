<template>
  <main-layout>
    <template #menu-links>
      <test-side-pannel />
    </template>
  </main-layout>
</template>

<script setup lang="ts">
import TestSidePannel from 'components/Test/TestSidePannel.vue';
import MainLayout from './MainLayout.vue';
</script>
