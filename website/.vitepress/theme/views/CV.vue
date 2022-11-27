<script setup lang="ts">
import Introduction from "../components/cv/Introduction.vue";
import Skills from "../components/cv/Skills.vue";
import Tools from "../components/cv/Tools.vue";
import Experience from "../components/cv/Experience.vue";
import Projects from "../components/cv/Projects.vue";
import Academia from "../components/cv/Academia.vue";
import Education from "../components/cv/Education.vue";
import Contact from "../components/cv/Contact.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="postcss" scoped>
:deep(h1) {
  margin-bottom: 0.5em !important;
}

:deep(h2) {
  margin-top: 2em !important;
  margin-bottom: 0.5em !important;
}

ol {
  counter-reset: item;

  @apply list-none p-0;
}

ol li :deep(h1),
ol li :deep(h2) {
  @apply relative;
}

ol li :deep(h1:before),
ol li :deep(h2:before) {
  content: counter(item, decimal-leading-zero) " ";
  counter-increment: item;

  @apply absolute;
}

ol li :deep(h1:before) {
  @apply -left-12 bottom-2 border-b-2 text-3xl;
}

ol li :deep(h2:before) {
  @apply -left-8 bottom-2 border-b-1 text-base;
}

@media print {
  .sections > li {
    break-inside: avoid;
  }
}
</style>

<template>
  <main class="bg-white flex flex-col items-center font-sans p-16 print:p-0">
    <div class="max-w-2xl">
      <ol class="sections">
        <li>
          <Introduction />
        </li>

        <li>
          <Skills />
        </li>

        <!-- <li>
          <Tools />
        </li> -->

        <li>
          <Experience />
        </li>

        <li class="projects">
          <Projects />
        </li>

        <li>
          <Academia />
        </li>

        <li class="education">
          <Education />
        </li>

        <li>
          <Contact />
        </li>
      </ol>
    </div>

    <Footer class="w-full max-w-2xl px-0 py-0 mt-20 print:hidden" />
  </main>
</template>
