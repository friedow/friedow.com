<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<template>
  <header class="
      fixed
      top-4
      left-4
      right-4
      py-4
      px-6
      flex
      justify-between
      items-center
      backdrop-blur-sm
      gap-4
      z-10
    ">
    <a href="/#home">
      <img class="icon" :src="theme.navbar.logo" width="50" height="50" />
    </a>

    <nav class="text-xl flex gap-6">
      <a v-for="link in theme.navbar.links" :key="link.href" :href="link.href">
        {{ link.text }}
      </a>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
header {
  box-shadow: 20px 10px 60px #00000050, -20px -10px 60px #ffffff50;
}
</style>
