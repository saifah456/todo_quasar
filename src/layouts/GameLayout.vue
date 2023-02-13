<template>
  <main-layout>
    <template #menu-links>
      <game-side-pannel />
    </template>
  </main-layout>
</template>

<script setup lang="ts">
import GameSidePannel from 'components/games/GameSidePannel.vue';
import MainLayout from './MainLayout.vue';
</script>
