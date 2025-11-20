<template>
  <section>
    <SectionTitle>
      What do users tell about us?
    </SectionTitle>
    <div class="flex justify-between gap-5 mt-8 lg:flex hidden">
      <TellAboutUsCard
        title="Tony Marshal"
        :icon="UserIcon"
        description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
      />
      <TellAboutUsCard
        title="Tony Marshal"
        :icon="UserIcon"
        description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
      />
      <TellAboutUsCard
        title="Tony Marshal"
        :icon="UserIcon"
        description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
      />
    </div>
    <div class="lg:hidden block mt-8">
      <TellAboutUsCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import TellAboutUsCard from '~/components/page/index/tell-about-us/TellAboutUsCard.vue'
import UserIcon from '~/assets/icons/user.svg'
import TellAboutUsCarousel from '~/components/page/index/tell-about-us/TellAboutUsCarousel.vue'
</script>

<style scoped>

</style>
