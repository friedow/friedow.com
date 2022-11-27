<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <h1 class="text-5xl">{{ frontmatter.introduction.title }}</h1>
  <p>{{ frontmatter.introduction.text }}</p>
</template>
