<template>
  <div class="">
    <TopHeader />
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopHeader from '~/components/common/header/TopHeader.vue'
</script>

<style scoped>

</style>
