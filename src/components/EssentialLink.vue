<template>
  <div>
    <div v-if="props.children.length > 0">
      <q-expansion-item
        expand-separator
        :icon="props.icon"
        :label="props.title"
        :caption="props.caption"
        :header-inset-level="props.level"
        default-closed
      >
        <!-- if multi level links -->
      </q-expansion-item>
    </div>
    <div v-else>
      <div v-if="props.href">
        <q-item
          v-ripple
          text-color="white"
          :href="props.href"
          clickable
          :inset-level="props.level"
        >
          <q-item-section avatar>
            <q-avatar :icon="props.icon" />
          </q-item-section>
          <q-item-section>{{ props.title }}</q-item-section>
        </q-item>
      </div>
      <div v-else>
        <q-item
          v-ripple
          :to="props.to"
          text-color="white"
          clickable
          :inset-level="props.level"
        >
          <q-item-section avatar>
            <q-avatar :icon="props.icon" />
          </q-item-section>
          <q-item-section>{{ props.title }}</q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface EssentialLinkProps {
  title: string;
  caption?: string;
  to?: unknown;
  href?: string;
  icon: string;
  level: number;
  children?: EssentialLinkProps[];
}
const props = withDefaults(defineProps<EssentialLinkProps>(), {
  title: () => 'no title',
  caption: () => '',
  to: () => ({}),
  href: () => '',
  children: () => [],
});
</script>
<style lang="scss" scoped>
.q-item.q-router-link--active,
.q-item--active {
  color: #ffffff;
  background-color: black;
}
</style>
