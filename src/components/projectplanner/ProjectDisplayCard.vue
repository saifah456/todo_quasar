<template>
  <q-card>
    <!--

      <q-card-section
        class=""

      >
      </q-card-section> -->

    <q-card-section>
      <div class="row q-gutter-sm">
        <div
          class="col-1 justify-around"
          :class="project.completed ? 'bg-positive' : 'bg-warning'"
        ></div>
        <div class="col">
          <div class="row">
            <div class="col-lg-9">
              <div class="row">
                <div class="text-h6">{{ project.title }}</div>
              </div>
              <div class="row">
                <div class="text-body1">{{ project.details }}</div>
              </div>
            </div>
            <div class="col-3 text-right q-gutter-sm">
              <!-- completed or not -->
              <div class="row">
                <div class="col">
                  <q-btn round>
                    <q-avatar
                      icon="check"
                      :text-color="project.completed ? 'positive' : ''"
                      @click="$emit('toggleCompleted', project)"
                    />
                  </q-btn>
                </div>
              </div>

              <!-- edit -->
              <div class="row">
                <div class="col">
                  <q-btn round @click="$emit('showProjectForm', project, true)">
                    <q-avatar icon="edit" text-color="warning" />
                  </q-btn>
                </div>
              </div>
              <!-- delete -->
              <div class="row">
                <div class="col">
                  <q-btn round>
                    <q-avatar
                      icon="delete"
                      text-color="negative"
                      @click="$emit('onDelete', project)"
                    />
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineEmits(['showProjectForm', 'toggleCompleted', 'onDelete']);
const props = defineProps({
  project: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const project = computed(() => props.project);
</script>
