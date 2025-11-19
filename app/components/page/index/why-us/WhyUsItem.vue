<template>
  <div class="why-us-item">
    <div class="why-us-item-value">
      {{ value }}
    </div>
    <div class="why-us-item-label">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<style scoped>

</style>
