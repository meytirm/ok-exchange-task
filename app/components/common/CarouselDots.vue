<template>
  <div class="carousel-dots">
    <div class="carousel-dots-container">
      <div
        v-for="dot in total"
        :key="dot"
        class="carousel-dot"
        :class="{ active: dot === current }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  total: number
  current: number
}>()
</script>
