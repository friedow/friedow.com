<script setup>
import Navbar from "./Navbar.vue";
import Teaser from "./sections/Teaser.vue";
import Footer from "./Footer.vue";
</script>

<style lang="postcss">
/***** FONTS *****/

@font-face {
  font-family: 'Raleway';
  src: url('../fonts/Raleway-Regular.woff') format('woff'),
       url('../fonts/Raleway-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Raleway';
  font-weight: 500;
  src: url('../fonts/Raleway-Medium.woff') format('woff'),
       url('../fonts/Raleway-Medium.ttf') format('truetype');
}

/***** TYPOGRAPHY *****/
/* 
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply m-0;
}

h1 {
  @apply text-9xl break-all;
}

h2 {
  @apply text-7xl;
}

a {
  @apply text-white no-underline font-medium;
}

p,
td,
strong {
  @apply text-xl;
}

p, strong {
  @apply max-w-2xl;
} */

/***** GENERAL *****/

html {
  @apply scroll-smooth;
}

body {
  background: linear-gradient(24deg, rgba(2,0,36,1) 0%, rgba(121,9,79,1) 48%, rgb(205 118 22) 100%);
  font-family: 'Raleway', Verdana, Geneva, Tahoma, sans-serif;
  @apply text-white m-0;
}

img {
  @apply max-w-full;
}

/***** CONTENT *****/

main {
  background: rgba( 255, 255, 255, 0.25 );
  min-height: 100vh;
}

main section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  text-align: left;
}

table th,
table td {
  border-bottom: 1px solid white;
  padding: 25px 40px;
}


table tr:last-child td {
  border-bottom: none;
}

.project, .profile {
  margin-top: 15vh;
  margin-bottom: 35vh;
  margin-left: -2rem;
  margin-right: -2rem;
}

.profile {
	margin-bottom: 15vh;
}

.project:first-child {
	margin-top: 35vh;
}

.project, .project-links, .profile {
  display: flex;
  align-items: center;
}

.project-image, .profile-image {
  border-radius: 2rem;
}

.project-image img, .profile-image img {
  border-radius: 2rem;
  display: block;
}

@media only screen and (max-width: 1200px) {
  .project, .profile {
    flex-direction: column;
    margin: 0 20px;
  }
}

.project > *, .profile > * {
  margin: 0 2rem;
}

.project > * {
  flex: 1 0;
}

.profile > .profile-image {
  flex: 0.75 0;
}

.profile > .profile-description {
  flex: 1.25 0;
}

.project-links {
	margin-top: 2rem;
}

.project-links > * {
  margin-left: 15px;
  display: flex;
}

.project-links > *:first-child {
  margin-left: 0;
}

.button {
  border-radius: 5px;
  background: linear-gradient(145deg, #00000015, #ffffff10);
  box-shadow: 3px 3px 15px #00000040, -3px -3px 15px #ffffff20;
  padding: 15px;
  font-size: 18px;
  transition: box-shadow 0.1s;
}

.button:active {
	box-shadow: none;
}

/***** IMPRESSUM *****/

.impressum {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.impressum h1 {
  font-size: 60px;
  margin-top: 150px;
  margin-bottom: 50px;
}

.impressum h2 {
  font-size: 25px;
  margin-bottom: 20px;
}

.impressum p,
.impressum strong {
  font-size: 16px;
}

.content {
  width: 700px;
  max-width: 100%;
}
</style>

<template>
    <Navbar />

    <main class="bg-opacity-20 bg-white">
      <Teaser />

      <section>
        <div class="profile">
          <div class="profile-image">
            <img src="img/contact/christian.jpg" />
          </div>
          <div class="profile-description">
            <h2>Hi, I'm Christian.</h2>
            <p>
              I'm a full-stack developer, software architect and open-source
              contributor located in Berlin, Germany. I dedicate my time to
              projects that help to simplify the daily routine of others.
            </p>
            <p>
              Currently, I work in a small team of software engineers,
              physicians and researchers at Charité – Universitätsmedizin
              Berlin. We develop dot.base, a FHIR-fueled health record system.
            </p>
            <div class="project-links">
              <a href="#dot-base" class="button" title="dot.base"
                >More about dot.base</a
              >
              <a href="https://github.com/friedow" title="Github">
                <img class="icon" src="img/github.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div class="project">
          <div class="project-description">
            <h2>dot.base</h2>
            <p>
              dot.base is an open-source Health Record System.
              It is build to simplify the clinical documentation through user centric design.
              Additionally, a FHIR-based architecture ensures interoperability.
            </p>
            <div class="project-links">
              <a
                href="https://dotbase.org"
                class="button"
                title="Website"
                >Tell Me More</a
              >
              <a href="https://github.com/dot-base" title="Github">
                <img class="icon" src="img/github.svg" />
              </a>
            </div>
          </div>
          <div class="project-image">
            <img src="img/dot-base-showcase.png" />
          </div>
        </div>

        <div class="project">
          <div class="project-image">
            <img src="img/rembrandt-showcase.png" />
          </div>
          <div class="project-description">
            <h2>Rembrandt</h2>
            <p>
              Rembrandt is a resource organization and resource usage optimization plattform.
              It is fully integrated with a business process management system and features a bring your own code system utilizing docker containers.
            </p>
            <div class="project-links">
              <a
                href="https://rembrandt.gitbook.io/docs/"
                class="button"
                title="Website"
                >Rembrandt Docs</a
              >
              <a href="https://github.com/bptlab/rembrandt" title="Github">
                <img class="icon" src="img/github.svg" />
              </a>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="project-description">
            <h2>Kirito</h2>
            <p>
              Kirito is a Discord bot encouraging players to join voice channels
              on Discord Servers. It provides a gamified leveling system based
              on player-in-voice time.
            </p>
            <div class="project-links">
              <a
                href="https://kirito.friedow.com"
                class="button"
                title="Website"
                >Tell Me More</a
              >
              <a
                href="https://discordapp.com/api/oauth2/authorize?client_id=340419258045562882&permissions=402705408&scope=bot"
                title="Add Kirito to your Discord Server"
              >
                <img class="icon" src="img/discord.svg" />
              </a>
              <a
                href="https://discordbots.org/bot/340419258045562882"
                title="Discord Bot List"
              >
                <img class="icon" src="img/discordbots.svg" />
              </a>
              <a href="https://github.com/friedow/kirito" title="Github">
                <img class="icon" src="img/github.svg" />
              </a>
            </div>
          </div>
          <div class="project-image">
            <img src="img/kirito-showcase.png" />
          </div>
        </div>
      </section>
    </main>

    <Footer />
</template>
