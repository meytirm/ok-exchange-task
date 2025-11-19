<template>
  <section>
    <SectionTitle>
      Why Millions Trust US?
    </SectionTitle>
    <div class="lg:flex flex-row justify-between items-center mt-8 hidden">
      <TrustUsItem
        title="6 years with you"
        :icon="MedalIcon"
        description="Customer Support in 40 languages"
      />
      <TrustUsItem
        title="Secure and Stable"
        :icon="StableIcon"
        description="Customer Support in 40 languages"
      />
      <TrustUsItem
        title="Trade Fast"
        :icon="FastIcon"
        description="Customer Support in 40 languages"
      />
      <TrustUsItem
        title="24/7"
        :icon="SupportIcon"
        description="Customer Support in 40 languages"
      />
    </div>
    <TrustUsItemsCarousel class="lg:hidden block mt-8" />
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import TrustUsItem from '~/components/page/index/trust-us/TrustUsItem.vue'
import MedalIcon from '@/assets/icons/medal.svg'
import FastIcon from '@/assets/icons/fast.svg'
import StableIcon from '@/assets/icons/stable.svg'
import SupportIcon from '@/assets/icons/support.svg'
import TrustUsItemsCarousel from '~/components/page/index/trust-us/TrustUsItemsCarousel.vue'
</script>

<style scoped>

</style>
