<template>
  <div>
    <div v-if="showBlockArea" class="row">
      <div class="col-4 offset-4">
        <q-card
          style="height: 250px; width: 250px; background: green"
          class="text-center"
          @click="stopTimer"
        >
          <q-card-section>
            <div class="text-h5">Click me</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div v-if="showResult" class="row">
      <div class="col offset-4">
        <div class="text-h4">You Took : {{ reactionTime }} sec.</div>

        <div v-if="reactionTime > 3" class="text-h4">
          Are you a snail? Next time hit it fast
        </div>
        <div v-if="reactionTime < 2 && reactionTime > 1" class="text-h4">
          Hmm.. Kind of good shot
        </div>
        <div v-if="reactionTime <= 1" class="text-h4">Wooooo!!!</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
const props = defineProps({
  delayTime: {
    type: Number,
    default: () => 0,
  },
});
const delayTime = computed(() => props.delayTime);
const showBlockArea = ref(false);
const showResult = ref(false);
const timer = ref();
const reactionTime = ref(0);
onMounted(() => {
  setTimeout(() => {
    showBlockArea.value = true;
    startTimer();
  }, delayTime.value);
});

const startTimer = () => {
  timer.value = setInterval(() => {
    reactionTime.value += 10;
  }, 10);
};

const stopTimer = () => {
  clearInterval(timer.value);
  showBlockArea.value = false;
  showResult.value = true;
  reactionTime.value = Math.round(reactionTime.value / 1000);
  console.log('Timer value', reactionTime.value);
};
</script>
