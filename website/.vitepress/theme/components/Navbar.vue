<template>
    <header class="fixed top-4 left-4 right-4 py-4 px-6 flex justify-between items-center backdrop-blur-sm gap-4">
        <div class="logo-container">
            <a href="/#home">
                <img class="icon" src="/images/friedow.svg" width="50" height="50" />
            </a>
        </div>

        <nav class="text-xl flex gap-4">
            <a v-for="link in $frontmatter.navbar.links" :href="link.href">
                {{link.text}}
            </a>
        </nav>
    </header>
</template>

<style lang="postcss">
header {
  box-shadow: 20px 10px 60px #00000050, -20px -10px 60px #ffffff50;
}
</style>
