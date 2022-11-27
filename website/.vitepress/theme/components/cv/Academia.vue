<script setup lang="ts">
import { useData } from "vitepress";
import TimedEntry from "./TimedEntry.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.academia.title }}</h2>
  <ul class="flex flex-col gap-4">
    <li v-for="paper in frontmatter.academia.papers">
      <TimedEntry
        :url="paper.url"
        :title="paper.title"
        :description="paper.journal"
        :time="paper.published_date"
      />
    </li>
  </ul>
</template>
