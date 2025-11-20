<template>
  <section>
    <SectionTitle class="justify-start">
      What is Bitcoin?
    </SectionTitle>
    <p class="text-base leading-7 text-gray-900 mt-4">
      {{ truncatedText }}
    </p>
    <div
      class="text-center mt-4"
      @click="isExpanded = !isExpanded"
    >
      <span class="text-sm leading-6 font-medium text-brand-foreground cursor-pointer">{{ toggleText }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'

const text = `What is Bitcoin (BTC)?
Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin continues to be the top cryptocurrency by market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024.
What is Bitcoin (BTC)?
Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin continues to be the top cryptocurrency by market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. Bitcoin recorded a new all-time high of $111,970 in May 2025, pushing the crypto market capitalization to an impressive $3.5 trillion.
As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. Bitcoin crossed $108K, reaching an all-time high in December 2024.`
const isExpanded = ref(false)
const truncatedText = computed(() => isExpanded.value ? text : text.substring(0, 620))
const toggleText = computed(() => isExpanded.value ? 'show less' : 'show more')
</script>

<style scoped>

</style>
