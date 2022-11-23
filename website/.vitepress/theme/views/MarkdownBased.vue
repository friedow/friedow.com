<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="postcss" scoped>
/***** FONTS *****/
@font-face {
  font-family: "Raleway";
  src: url("../fonts/Raleway-Regular.woff") format("woff"),
    url("../fonts/Raleway-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Raleway";
  font-weight: 500;
  src: url("../fonts/Raleway-Medium.woff") format("woff"),
    url("../fonts/Raleway-Medium.ttf") format("truetype");
}

>>>h1 {
  @apply text-6xl !important;
}

>>>h2 {
  @apply text-3xl !important;
}

>>>h3 {
  @apply text-2xl !important;
}

>>>h4 {
  @apply text-xl !important;
}

>>>h5 {
  @apply text-lg !important;
}

>>>h1,
>>>h2,
>>>h3,
>>>h4,
>>>h5,
>>>h6,
>>>p {
  margin-top: 1.5em !important;
  margin-bottom: 0.25em !important;
}

>>>a.header-anchor {
  display: none;
}
</style>

<template>
  <Navbar />

  <main class="bg-opacity-20 bg-white min-h-screen px-10 py-28 flex justify-center">
    <div class="w-full max-w-3xl">
      <Content />
    </div>
  </main>

  <Footer />
</template>
