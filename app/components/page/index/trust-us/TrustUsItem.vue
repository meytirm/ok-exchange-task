<template>
  <div class="trust-us-item">
    <img
      :src="icon"
      alt="icon"
      width="40px"
    >
    <div class="trust-us-item-content">
      <div class="trust-us-item-title">
        {{ title }}
      </div>
      <div class="trust-us-item-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped>

</style>
