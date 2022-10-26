<script setup lang="ts">
import Icon from "../Icon.vue";

export interface Props {
    project: {
        image: string;
        title: string;
        text: string[];
        links: Array<{
            type: string;
            href: string;
            text?: string;
            icon?: string;
        }>;
    };
    reverse: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    reverse: false,
})
</script>

<template>
    <section class="min-h-screen flex items-center justify-center">
        <div class="max-w-6xl flex items-center gap-16" :class="{ 'flex-row-reverse': reverse }">
            <img class="w-full max-w-xl" :src="project.image" />
            <div class="flex flex-col gap-8">
                <h2 class="text-8xl">{{ project.title }}</h2>
                <p v-for="paragraph in project.text" :key="paragraph" class="max-w-2xl text-xl">
                    {{ paragraph }}
                </p>
                <div class="flex items-center gap-4">
                    <template v-for="link in project.links" :key="link.href">
                        <a v-if="link.type === 'button'" :href="link.href"
                            class="button border-1 flex justify-center items-center py-2 px-4 font-bold">
                            {{ link.text }}
                        </a>
                        <a v-else-if="link.type === 'icon'" :href="link.href" class="button py-1 px-1.5">
                            <Icon :name="link.icon" :size="32" :stroke-width="1" />
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
