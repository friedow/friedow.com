<script setup>
import Home from './views/Home.vue';
import MarkdownBased from './views/MarkdownBased.vue';
</script>

<template>
  <Home v-if="$frontmatter.layout === 'home'" />
  <MarkdownBased v-else />
</template>
