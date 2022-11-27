<script setup lang="ts">
import Introduction from "../components/cv/Introduction.vue";
import Skills from "../components/cv/Skills.vue";
import Tools from "../components/cv/Tools.vue";
import Experience from "../components/cv/Experience.vue";
import Projects from "../components/cv/Projects.vue";
import Academia from "../components/cv/Academia.vue";
import Education from "../components/cv/Education.vue";
import Contact from "../components/cv/Contact.vue";
</script>

<style lang="postcss" scoped>
:deep(h1),
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

/***** CONTENT *****/

.experience li,
.education li {
  display: grid;
  grid-template-columns: 1fr 150px;
}

.experience li span,
.education li span,
.projects li span {
  color: grey;
}

.experience li time,
.education li time {
  text-align: right;
  font-weight: 300;
}

.experience li,
.education li,
.projects li {
  padding-bottom: 20px;
}

.experience li:last-child,
.education li:last-child,
.projects li:last-child {
  padding-bottom: 0;
}

.contact .information img,
.projects img {
  height: 19px;
  top: 2px;
  position: relative;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 180px 1fr;
  align-items: center;
  text-align: center;
}

.contact .information p {
  line-height: 2;
}

.contact .information p img {
  height: 16px;
}

.contact .information a {
  color: black;
}

.contact .profile-image {
  border-radius: 50%;
}

@media print {
  @page {
    size: A4; /* DIN A4 standard, Europe */
    margin: 27mm 8mm 20mm 0mm;
  }

  .sections > li {
    break-inside: avoid;
  }

  footer {
    display: none;
  }
}
</style>

<template>
  <main
    class="bg-white flex justify-center font-raleway"
    style="padding: 0px 60px 60px 100px"
  >
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
  </main>
</template>
