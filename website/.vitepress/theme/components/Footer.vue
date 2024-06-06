<script setup lang="ts">
import { useData } from "vitepress";

const { theme } = useData();

function currentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
</script>

<template>
  <footer class="px-10 py-5 flex justify-between text-sm">
    <span> © {{ currentYear() }} - {{ theme.footer.copyright.author }} </span>

    <nav class="flex gap-4">
      <a v-for="link in theme.footer.links" :key="link.href" :href="link.href">
        {{ link.text }}
      </a>
    </nav>
  </footer>
</template>
