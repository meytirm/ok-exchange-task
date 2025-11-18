<template>
  <header class="top-header">
    <div class="hidden md:block">
      <TopHeaderNavigationMenu />
    </div>
    <TopHeaderActions />
  </header>
</template>

<script setup lang="ts">
import TopHeaderNavigationMenu from '~/components/common/header/TopHeaderNavigationMenu.vue'
import TopHeaderActions from '~/components/common/header/TopHeaderActions.vue'
</script>

<style scoped>

</style>
