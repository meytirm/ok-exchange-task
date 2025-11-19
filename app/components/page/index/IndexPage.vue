<template>
  <div class="flex flex-col gap-24">
    <IntroduceSection />
    <WhyUsSection />
    <PriceMarketDataSection />
    <CardSection />
    <AppSection />
  </div>
</template>

<script setup lang="ts">
import IntroduceSection from '~/components/page/index/IntroduceSection.vue'
import WhyUsSection from '~/components/page/index/why-us/WhyUsSection.vue'
import PriceMarketDataSection from '~/components/page/index/PriceMarketDataSection.vue'
import CardSection from '~/components/page/index/card/CardSection.vue'
import AppSection from '~/components/page/index/AppSection.vue'
</script>

<style scoped>

</style>
