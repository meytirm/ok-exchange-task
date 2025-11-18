<template>
  <div class="flex gap-4 items-center">
    <Button
      size="sm"
      class="bg-gray-300 text-gray-800 hover:bg-gray-300/80 font-semibold text-sm"
    >
      Log In
    </Button>
    <Button
      class="bg-brand text-gray-800 hover:bg-brand/80 font-semibold text-sm"
      size="sm"
    >
      Sign Up
    </Button>
    <img
      :src="Download"
      width="24px"
      alt="download"
    >
    <img
      :src="Light"
      width="24px"
      alt="light"
    >
    <img
      :src="Language"
      width="24px"
      alt="language"
    >
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import Download from '@/assets/icons/web_download.svg'
import Light from '@/assets/icons/light.svg'
import Language from '@/assets/icons/web_language 1.svg'
</script>

<style scoped>

</style>
