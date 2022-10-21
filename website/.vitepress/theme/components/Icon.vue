<script setup lang="ts">
import {computed, defineProps} from 'vue';
import * as icons from "lucide-vue-next";

const props = defineProps<{
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  defaultClass?: string
}>();

const icon = computed(() => icons[props.name]);
</script>

<template>
    <component :is="icon" :size="size" :color="color" :strokeWidth="strokeWidth" :defaultClass="defaultClass" />
</template>
