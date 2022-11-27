<script setup>
import Home from "./views/Home.vue";
import CV from "./views/CV.vue";
import MarkdownBased from "./views/MarkdownBased.vue";
</script>

<template>
  <Home v-if="$frontmatter.layout === 'home'" />
  <CV v-else-if="$frontmatter.layout === 'cv'" />
  <MarkdownBased v-else />
</template>
