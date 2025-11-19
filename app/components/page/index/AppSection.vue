<template>
  <section>
    <SectionTitle>
      Download Our Secure Crypto Trading App
    </SectionTitle>
    <SectionSubtitle>
      <span class="lg:block hidden">Download US Application then Trade Anywhere</span>
      <span class="lg:hidden block">Trade Bitcoin & Altcoin</span>
    </SectionSubtitle>

    <div class="flex justify-center gap-4 mt-8">
      <div class="flex lg:flex-row flex-col justify-between lg:gap-36 gap-4">
        <div class="flex lg:justify-start justify-center lg:gap-6 gap-0">
          <img
            :src="Screenshot"
            alt="app screenshot"
          >
          <img
            class="lg:block hidden"
            :src="Screenshot"
            alt="app screenshot"
          >
        </div>
        <div class="flex flex-col lg:items-end items-center">
          <div class="text-base lg:uppercase lg:text-right text-center leading-7 text-grey-new-500">
            Scan to Download<br class="lg:block hidden"> App <span class="lg:font-semibold">iOS and Android</span>
          </div>
          <div class="mt-4 mb-6">
            <img
              :src="QRCode"
              alt="qr code"
            >
          </div>
          <div class="flex lg:flex-col flex-row gap-6">
            <DownloadAppButton
              :icon="AppStore"
              alt="app store"
              text="App Store"
            />
            <DownloadAppButton
              :icon="GooglePlay"
              alt="google play"
              text="Google Play"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionSubtitle from '~/components/common/SectionSubtitle.vue'
import Screenshot from '@/assets/images/mobile-app-screenshot.png'
import QRCode from '@/assets/images/qrcode.png'
import AppStore from '@/assets/icons/apple.svg'
import GooglePlay from '@/assets/icons/google-play.svg'
import DownloadAppButton from '~/components/common/buttons/DownloadAppButton.vue'
</script>

<style scoped>

</style>
