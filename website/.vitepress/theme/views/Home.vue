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

    <main class="bg-opacity-20 bg-white min-h-screen">
      <Teaser />

      <Profile />

      <section id="projects">
        <Project
          v-for="(project, projectIndex) in frontmatter.projects"
          :project="project"
          :reverse="projectIndex % 2 === 0"
        />
      </section>
    </main>

    <Footer />
  </div>
</template>
