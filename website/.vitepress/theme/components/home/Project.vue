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
  <section
    class="pt-56 pb-36 flex items-center gap-12 lg:gap-16 flex-col-reverse"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <img
      class="rounded-lg max-w-full"
      style="width: 500px"
      :src="project.image"
    />
    <div class="flex flex-col">
      <span class="font-mono text-sm">{{ project.subtitle }}</span>
      <h2 class="text-6xl md:text-8xl mb-8">{{ project.title }}</h2>
      <p
        v-for="paragraph in project.text"
        :key="paragraph"
        class="mb-2 text-xl"
      >
        {{ paragraph }}
      </p>
      <div class="mt-8 flex items-center gap-4">
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
  </section>
</template>
