<template>
  <div class="flex justify-between">
    <div
      v-for="item in footerMenu"
      :key="item.title"
    >
      <h3 class="text-base font-semibold leading-7 text-black">
        {{ item.title }}
      </h3>
      <ul class="mt-2">
        <li
          v-for="childItem in item.children"
          :key="childItem.title"
        >
          <NuxtLink
            class="text-sm font-medium leading-6 text-black"
            :href="childItem.href"
          >{{ childItem.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { footerMenu } from '~/constants/footer-menu'
</script>

<style scoped>

</style>
