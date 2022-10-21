<script setup lang="ts">
function currentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
</script>

<template>
    <footer class="p-5 flex justify-between text-sm bg-opacity-20 bg-white">
      <span class="copyright"> © {{ currentYear() }} - Christian Friedow </span>

      <nav class="flex gap-4">
        <a v-for="link in $frontmatter.footer.links" :href="link.href">
          {{link.text}}
        </a>
      </nav>
    </footer>
</template>
