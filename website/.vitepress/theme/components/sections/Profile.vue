<script setup lang="ts">
import Icon from "../Icon.vue";
</script>

<template>
  <section id="profile" class="min-h-screen flex items-center justify-center">
    <div class="max-w-6xl flex items-center gap-16">
      <img class="w-80" :src="$frontmatter.content.profile.image" />
      <div class="flex flex-col gap-8">
        <div>
          <span class="font-mono text-sm">About Me</span>
          <h2 class="-ml-2 text-8xl">{{ $frontmatter.content.profile.title }}</h2>
        </div>
        <p v-for="paragraph in $frontmatter.content.profile.text" :key="paragraph" class="max-w-2xl text-xl">
          {{ paragraph }}
        </p>
        <div class="flex items-center gap-4">
          <template v-for="link in $frontmatter.content.profile.links" :key="link.href">
            <a v-if="link.type === 'button'" :href="link.href"
              class="border-1 flex justify-center items-center py-2 px-4 font-mono">
              {{ link.text }}
            </a>
            <a v-else-if="link.type === 'icon'" :href="link.href" class="py-1 px-1.5">
              <Icon :name="link.icon" size="32" :stroke-width="1" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
