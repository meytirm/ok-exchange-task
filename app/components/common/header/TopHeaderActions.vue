<template>
  <div class="flex gap-4 items-center">
    <Button
      size="sm"
      class="bg-white-new-300 text-grey-new-900 hover:bg-white-new-300/80 font-semibold text-sm"
    >
      Log In
    </Button>
    <BrandButton
      class="bg-brand text-grey-new-900 hover:bg-brand/80 font-semibold text-sm"
      size="sm"
    >
      Sign Up
    </BrandButton>
    <div class="hidden md:block">
      <TopHeaderIcons />
    </div>
    <div class="md:hidden">
      <MobileNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import TopHeaderIcons from '~/components/common/header/TopHeaderIcons.vue'
import MobileNavigation from '~/components/common/MobileNavigation.vue'
import BrandButton from '~/components/common/BrandButton.vue'
</script>

<style scoped>

</style>
