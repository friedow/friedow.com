<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="postcss" scoped>
:deep(h1) {
  @apply text-6xl !important;
}

:deep(h2) {
  @apply text-3xl !important;
}

:deep(h3) {
  @apply text-2xl !important;
}

:deep(h4) {
  @apply text-xl !important;
}

:deep(h5) {
  @apply text-lg !important;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6),
:deep(p) {
  margin-top: 1.5em !important;
  margin-bottom: 0.25em !important;
}

:deep(a.header-anchor) {
  display: none;
}

div.body {
  background: linear-gradient(
    24deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 79, 1) 48%,
    rgb(205 118 22) 100%
  );
}
</style>

<template>
  <div class="body font-sans text-white">
    <Navbar />

    <main
      class="bg-opacity-20 bg-white min-h-screen px-10 py-28 flex justify-center"
    >
      <div class="w-full max-w-3xl">
        <Content />
      </div>
    </main>

    <Footer />
  </div>
</template>
