<script setup>
import DefaultTheme from 'vitepress/theme';
import Home from './components/Home.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Home v-if="$frontmatter.layout === 'home'" />
  <Layout v-else />
</template>
