<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <span v-html="value"></span>
</template>
