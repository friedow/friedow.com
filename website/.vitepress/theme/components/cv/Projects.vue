<script setup lang="ts">
import { useData } from "vitepress";
import Icon from "../Icon.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.projects.title }}</h2>

  <ul class="flex flex-col gap-4">
    <li v-for="project in frontmatter.projects.projects">
      <div class="flex items-center gap-2">
        <h3 class="text-lg">{{ project.title }} –</h3>
        <a :href="project.github_link" class="flex items-center font-mono">
          <Icon
            name="Github"
            :size="16"
            :stroke-width="1.5"
            class="text-darkgray"
          />
          {{ project.github_link.replace("https://github.com", "") }}
        </a>
      </div>

      <span class="text-gray">{{ project.description }}</span>

      <div class="flex gap-2">
        <span v-for="tag in project.tags" class="text-xs font-mono">
          #{{ tag }}
        </span>
      </div>
    </li>
  </ul>
</template>
