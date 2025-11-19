<template>
  <section>
    <SectionTitle>
      Advanced Crypto Trading Tools for Faster, Smarter Transactions
    </SectionTitle>
    <div class="mt-8 lg:block hidden">
      <FutureCards />
    </div>
    <div class="mt-8 lg:hidden block">
      <FutureCardsCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import FutureCards from '~/components/page/index/card/FutureCards.vue'
import FutureCardsCarousel from '~/components/common/FutureCardsCarousel.vue'
</script>

<style scoped>

</style>
