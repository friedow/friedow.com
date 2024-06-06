<script setup lang="ts">
import { useData } from "vitepress";
import Navbar from "../components/Navbar.vue";
import Teaser from "../components/home/Teaser.vue";
import Profile from "../components/home/Profile.vue";
import Project from "../components/home/Project.vue";
import Footer from "../components/Footer.vue";

const { frontmatter } = useData();
</script>

<style lang="postcss" scoped>
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

    <main class="min-h-screen pb-24 px-4 max-w-2xl lg:max-w-6xl mx-auto">
      <Teaser />

      <div id="about-me" />
      <Profile />

      <h1 id="open-source" class="pt-56 text-2xl">Open Source</h1>
      <hr />
      <Project
        v-for="(project, projectIndex) in frontmatter.projects"
        :project="project"
        :reverse="projectIndex % 2 === 0"
      />
    </main>

    <Footer />
  </div>
</template>
