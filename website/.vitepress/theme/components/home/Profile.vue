<script setup lang="ts">
import Icon from "../Icon.vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <section id="profile" class="flex items-center justify-center px-8">
    <div
      class="pt-56 pb-36 max-w-6xl flex flex-col lg:flex-row items-center gap-16"
    >
      <img class="hidden lg:block w-80" :src="frontmatter.profile.image" />
      <div class="flex flex-col gap-8">
        <div class="flex gap-8">
          <img
            class="h-44 sm:h-56 lg:hidden"
            :src="frontmatter.profile.image"
          />
          <div>
            <span class="font-mono text-sm">About Me</span>
            <h2 class="-ml-2 text-7xl sm:text-8xl max-w-sm lg:max-w-none">
              {{ frontmatter.profile.title }}
            </h2>
          </div>
        </div>
        <p
          v-for="paragraph in frontmatter.profile.text"
          :key="paragraph"
          class="max-w-2xl text-xl"
        >
          {{ paragraph }}
        </p>
        <div class="flex items-center gap-4">
          <template v-for="link in frontmatter.profile.links" :key="link.href">
            <a
              v-if="link.type === 'button'"
              :href="link.href"
              class="border-1 flex justify-center items-center py-2 px-4 font-mono"
            >
              {{ link.text }}
            </a>
            <a
              v-else-if="link.type === 'icon'"
              :href="link.href"
              class="py-1 px-1.5"
            >
              <Icon :name="link.icon" :size="32" :stroke-width="1" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
