<script setup lang="ts">
import Icon from "../Icon.vue";

export interface Props {
  project: {
    image: string;
    title: string;
    text: string[];
    links: Array<{
      type: string;
      href: string;
      text?: string;
      icon?: string;
    }>;
  };
  reverse: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
});
</script>

<template>
  <section class="py-48 px-8 flex items-center justify-center">
    <div
      class="max-w-6xl flex items-center gap-12 sm:gap-0 lg:gap-16 flex-col-reverse sm:-ml-52 lg:ml-0"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div class="sm:-mr-96 sm:-mt-12 lg:mr-0 lg:mt-0">
        <img class="w-full max-w-xl" :src="project.image" />
      </div>
      <div class="flex flex-col gap-8">
        <div>
          <span class="font-mono text-sm">Projects</span>
          <h2 class="-ml-2 text-8xl">{{ project.title }}</h2>
        </div>
        <p
          v-for="paragraph in project.text"
          :key="paragraph"
          class="max-w-lg lg:max-w-2xl text-xl"
        >
          {{ paragraph }}
        </p>
        <div class="flex items-center gap-4">
          <template v-for="link in project.links" :key="link.href">
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
