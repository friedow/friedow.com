<script setup lang="ts">
import { useData } from "vitepress";
import TimedEntry from "./TimedEntry.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.experience.title }}</h2>
  <ul class="flex flex-col gap-4">
    <li v-for="job in frontmatter.experience.jobs">
      <TimedEntry
        :url="job.company.url"
        :title="job.position"
        :description="job.company.name"
        :time="job.time"
      />
    </li>
  </ul>
</template>
