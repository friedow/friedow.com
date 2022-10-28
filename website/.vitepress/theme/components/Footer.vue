<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();

function currentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
</script>

<template>
  <footer class="px-10 py-5 flex justify-between text-sm bg-opacity-20 bg-white">
    <span> © {{ currentYear() }} - Christian Friedow </span>

    <nav class="flex gap-4">
      <a v-for="link in frontmatter.footer.links" :key="link.href" :href="link.href">
        {{ link.text }}
      </a>
    </nav>
  </footer>
</template>
