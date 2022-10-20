<template>
    <header class="top-4 left-4 right-4 p-1">
        <div class="logo-container">
            <a href="/#home">
                <img class="icon" src="/images/friedow.svg" width="50" height="50" />
            </a>
        </div>

        <nav>
            <a v-for="link in $frontmatter.navbar.links" :href="link.href">
                {{link.text}}
            </a>
        </nav>
    </header>
</template>

<style lang="postcss">
header {
  box-shadow: 20px 10px 60px #00000050, -20px -10px 60px #ffffff50;
  border-radius: 2rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
}

header .logo-container,
header nav,
footer {
  padding: 20px;
}

footer {
  background: rgba( 255, 255, 255, 0.25 );
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

header nav {
  font-size: 25px;
}

nav a {
  padding: 0 10px;
}
</style>
