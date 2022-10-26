<script setup lang="ts">
import Icon from "../Icon.vue";
</script>

<template>
  <section id="home" class="min-h-screen flex flex-col items-center justify-center gap-4">
    <h1 class="text-9xl">{{ $frontmatter.content.teaser.title }}</h1>
    <h2 class="text-4xl">{{ $frontmatter.content.teaser.subtitle }}</h2>
    <div class="mt-4 flex gap-2">
      <a v-for="link in $frontmatter.content.teaser.links" :key="link.href" :href="link.href" class="py-1 px-1.5">
        <Icon :name="link.icon" size="32" :stroke-width="1" />
      </a>
    </div>
  </section>
</template>
