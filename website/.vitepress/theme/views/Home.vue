<script setup lang="ts">
import { useData } from 'vitepress';
import Navbar from "../components/Navbar.vue";
import Teaser from "../components/sections/Teaser.vue";
import Profile from "../components/sections/Profile.vue";
import Project from "../components/sections/Project.vue";
import Footer from "../components/Footer.vue";

const { frontmatter } = useData();
</script>

<style lang="postcss">
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

html {
  font-size: 12px;
}

@media (min-width: 1280px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1536px) {
  html {
    font-size: 16px;
  }
}

html {
  @apply scroll-smooth;
}

body {
  background: linear-gradient(24deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(121, 9, 79, 1) 48%,
      rgb(205 118 22) 100%);
  font-family: "Raleway", Verdana, Geneva, Tahoma, sans-serif;
  @apply text-white m-0;
}

/* Hover effect on all links */
a {
  background-image: linear-gradient(#ffffff 0 0);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .3s ease;
}

a:hover {
  background-size: 100% 1px;
}
</style>

<template>
  <Navbar />

  <main class="bg-opacity-20 bg-white min-h-screen">
    <Teaser />

    <Profile />

    <section id="projects">
      <Project v-for="(project, projectIndex) in frontmatter.projects" :project="project"
        :reverse="projectIndex % 2 === 0" />
    </section>
  </main>

  <Footer />
</template>
