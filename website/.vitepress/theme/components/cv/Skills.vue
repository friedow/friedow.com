<script setup lang="ts">
import { useData } from "vitepress";
import Icon from "../Icon.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.skills.title }}</h2>
  <div class="grid grid-cols-3 gap-y-3 gap-x-5">
    <div
      v-for="skill in frontmatter.skills.skills"
      class="flex gap-2 items-center"
    >
      <Icon
        :name="skill.icon"
        :size="28"
        :stroke-width="0.75"
        class="text-orange"
      />
      <span>{{ skill.title }}</span>
    </div>
  </div>
</template>
