<script setup lang="ts">
import Icon from "../Icon.vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center gap-4"
  >
    <h1 style="font-size: 12rem; line-height: 1">
      {{ frontmatter.teaser.title }}
    </h1>
    <h2 class="text-4xl">{{ frontmatter.teaser.subtitle }}</h2>
    <div class="mt-4 flex gap-2">
      <a
        v-for="link in frontmatter.teaser.links"
        :key="link.href"
        :href="link.href"
        class="py-1 px-1.5"
      >
        <Icon :name="link.icon" :size="32" :stroke-width="1" />
      </a>
    </div>
  </section>
</template>
