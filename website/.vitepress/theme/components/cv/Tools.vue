<script setup lang="ts">
import { useData } from "vitepress";
import Icon from "../Icon.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.tools.title }}</h2>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="tool in frontmatter.tools.tools"
      class="flex gap-3 items-center"
    >
      <Icon
        :name="tool.icon"
        :size="24"
        :stroke-width="0.75"
        class="text-orange"
      />
      <span>{{ tool.title }}</span>
    </div>
  </div>
</template>
