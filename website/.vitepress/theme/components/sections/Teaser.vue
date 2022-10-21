<script setup>
import Icon from "../Icon.vue";
</script>

<template>
  <section id="home" class="gap-4">
    <h1 class="text-9xl">friedow</h1>
    <h2 class="text-4xl">custom-made code</h2>
    <div class="mt-8">
      <a
        v-for="link in $frontmatter.content.teaser.links"
        :key="link.href"
        :href="link.href"
      >
        <Icon :name="link.icon" />
      </a>
    </div>
  </section>
</template>

<!-- 

.subtitle {
  @apply text-4xl;
}

    .icon-container {
  margin-top: 30px;
}

.icon-container > * {
  padding: 0px 10px
}

.icon {
  height: 50px;
}
 -->