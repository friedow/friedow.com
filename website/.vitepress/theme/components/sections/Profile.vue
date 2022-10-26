<script setup lang="ts">
import Icon from "../Icon.vue";
</script>

<template>
  <section id="profile" class="min-h-screen flex items-center justify-center">
    <div class="max-w-6xl flex items-center gap-16">
      <img class="w-80" :src="$frontmatter.content.profile.image" />
      <div class="flex flex-col gap-8">
        <h2 class="text-8xl">{{ $frontmatter.content.profile.title }}</h2>
        <p v-for="paragraph in $frontmatter.content.profile.text" :key="paragraph" class="max-w-2xl text-xl">
          {{ paragraph }}
        </p>
        <div class="flex items-center gap-4">
          <template v-for="link in $frontmatter.content.profile.links" :key="link.href">
            <a v-if="link.type === 'button'" :href="link.href"
              class="button border-1 flex justify-center items-center py-2 px-4 font-bold">
              {{ link.text }}
            </a>
            <a v-else-if="link.type === 'icon'" :href="link.href" class="button py-1 px-1.5">
              <Icon :name="link.icon" size="32" :stroke-width="1" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.button {
  background-image: linear-gradient(#ffffff 0 0);
  background-size: 200% .08em;
  background-position: 200% 100%;
  background-repeat: no-repeat;
  transition: background-position .3s .3s;
}

.button:hover {
  transition: background-position .3s;
  background-position: 100% 100%;
}
</style>