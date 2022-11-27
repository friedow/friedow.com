<script setup lang="ts">
import { useData } from "vitepress";
import TimedEntry from "./TimedEntry.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.education.title }}</h2>
  <ul class="flex flex-col gap-4">
    <li v-for="degree in frontmatter.education.degrees">
      <TimedEntry
        :url="degree.url"
        :title="degree.title"
        :description="degree.institution"
        :time="degree.time"
      />
    </li>
  </ul>
</template>
