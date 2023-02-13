<template>
  <q-page padding class="q-gutter-lg">
    <q-card>
      <q-card-section>
        <div class="text-h5 text-center">Reaction Timer Game</div>
      </q-card-section>
    </q-card>

    <q-card style="height: 500px">
      <q-card-section class="text-center">
        <div class="row">
          <div class="col pull-right">
            <q-btn
              color="primary"
              icon-right="bolt"
              label="Play"
              @click="playClick"
              :disable="play"
            />
          </div>
          <div class="col">
            <q-btn>
              <q-avatar
                color="red"
                text-color="white"
                icon="refresh"
                @click="reset"
              />
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-section v-if="play">
        <block-area :delay-time="delay" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlockArea from '../components/games/BlockArea.vue';

const play = ref(false);
const delay = ref(0);

const playClick = () => {
  play.value = true;
  delay.value = 2000 + Math.random() * 5000;
  console.log(`after ${delay.value} seconds`);
};

const reset = () => {
  play.value = false;
};
</script>
