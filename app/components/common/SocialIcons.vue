<template>
  <ul class="flex items-center gap-3">
    <li
      v-for="(icon, index) in icons"
      :key="index"
    >
      <NuxtLink>
        <img
          :src="icon.icon"
          :alt="icon.name"
          width="20px"
        >
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import XIcon from '~/assets/icons/social-icons/x.svg'
import TelegramIcon from '~/assets/icons/social-icons/telegram.svg'
import InstagramIcon from '~/assets/icons/social-icons/instagram.svg'
import YoutubeIcon from '~/assets/icons/social-icons/youtube.svg'

const icons = [
  { icon: XIcon, href: '#', name: 'x' },
  { icon: InstagramIcon, href: '#', name: 'instagram' },
  { icon: TelegramIcon, href: '#', name: 'telegram' },
  { icon: YoutubeIcon, href: '#', name: 'youtube' },
]
</script>

<style scoped>

</style>
