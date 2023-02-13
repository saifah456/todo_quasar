<template>
  <q-card style="min-width: 50vw">
    <div class="text-h5 text-weight-medium text-center">
      Add/Edit Project Form
    </div>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card-section>
        <q-input
          v-model="title"
          dense
          hint="Title"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Title']"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="details"
          autogrow
          hint="Details"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Details']"
        />
      </q-card-section>
      <q-card-section>
        <q-toggle v-model="completed" label="Completed" />
      </q-card-section>

      <q-card-actions horizontal align="right">
        <q-btn
          v-if="isEdit"
          type="button"
          color="dark"
          @click="$emit('on-cancel')"
          >Cancel</q-btn
        >
        <q-btn type="submit" color="primary">Save</q-btn>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
const title = ref('');
const details = ref('');
const id = ref(0);
const completed = ref(false);
const emit = defineEmits(['on-submit', 'on-cancel']);
const isEdit = computed(() => props.isEdit);

const props = defineProps({
  projectFormData: {
    type: Object,
    defualt: () => {
      return {};
    },
  },
  isEdit: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});

onMounted(() => {
  if (isEdit.value) {
    id.value = props.projectFormData?.id;
    title.value = props.projectFormData?.title;
    details.value = props.projectFormData?.details;
    completed.value = props.projectFormData?.completed;
  }
});

const onSubmit = () => {
  console.log('form submitted');
  const data = {
    id: isEdit.value
      ? id.value
      : Number(Math.floor(1000 + Math.random() * 9000).toString()),
    title: title.value,
    details: details.value,
    completed: completed.value,
  };
  emit('on-submit', data, isEdit.value);

  id.value = 0;
  title.value = '';
  details.value = '';
  completed.value = false;
};
</script>
