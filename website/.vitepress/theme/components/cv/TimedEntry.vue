<script setup lang="ts">
const props = defineProps<{
  url: string;
  title: string;
  description: string;
  time: string;
}>();
</script>

<template>
  <a :href="url" class="flex justify-between gap-4">
    <div>
      <h3 class="text-lg">{{ title }}</h3>
      <span class="text-lightgray">{{ description }}</span>
    </div>
    <time class="font-mono text-sm">{{ time }}</time>
  </a>
</template>
