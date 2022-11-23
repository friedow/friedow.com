<script setup lang="ts">
import { useData } from 'vitepress';
import Navbar from "../components/Navbar.vue";
import Teaser from "../components/sections/Teaser.vue";
import Profile from "../components/sections/Profile.vue";
import Project from "../components/sections/Project.vue";
import Footer from "../components/Footer.vue";

const { frontmatter } = useData();
</script>

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
