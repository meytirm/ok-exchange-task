<template>
  <header class="top-header">
    <div class="hidden md:block">
      <TopHeaderNavigationMenu />
    </div>
    <TopHeaderActions />
  </header>
</template>

<script setup lang="ts">
import TopHeaderNavigationMenu from '~/components/header/TopHeaderNavigationMenu.vue'
import TopHeaderActions from '~/components/header/TopHeaderActions.vue'
</script>

<style scoped>

</style>
