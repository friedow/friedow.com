<script setup lang="ts">
import { useData } from "vitepress";
import Icon from "../Icon.vue";

const { frontmatter } = useData();
</script>

<template>
  <h2 class="text-3xl">{{ frontmatter.contact.title }}</h2>

  <div class="flex pt-1">
    <div>
      <img :src="frontmatter.contact.image" class="rounded-full w-48" />
    </div>

    <div class="flex flex-col justify-center gap-1">
      <h3 class="ml-4">{{ frontmatter.contact.name }}</h3>

      <a :href="`mailto:${frontmatter.contact.email}`" class="ml-7">
        {{ frontmatter.contact.email }}
      </a>

      <a
        :href="`tel:${frontmatter.contact.phone.replace(' ', '')}`"
        class="font-mono ml-8"
      >
        {{ frontmatter.contact.phone }}
      </a>

      <a
        :href="frontmatter.contact.github"
        class="flex items-center font-mono ml-7"
      >
        <Icon
          name="Github"
          :size="16"
          :stroke-width="1.5"
          class="text-darkgray"
        />
        {{ frontmatter.contact.github.replace("https://github.com", "") }}
      </a>

      <a
        :href="frontmatter.contact.linkedin"
        class="flex items-center font-mono ml-4"
      >
        <Icon
          name="Linkedin"
          :size="16"
          :stroke-width="1.5"
          class="text-darkgray"
        />
        {{
          frontmatter.contact.linkedin.replace(
            "https://www.linkedin.com/in",
            ""
          )
        }}
      </a>
    </div>
  </div>
</template>
