<template>
  <section>
    <SectionTitle>
      Download Our Secure Crypto Trading App
    </SectionTitle>
    <SectionSubtitle>
      Download US Application then Trade Anywhere
    </SectionSubtitle>

    <div class="flex justify-center gap-4 mt-8">
      <div class="flex justify-between gap-36">
        <div class="flex gap-6">
          <img
            :src="Screenshot"
            alt="app screenshot"
          >
          <img
            :src="Screenshot"
            alt="app screenshot"
          >
        </div>
        <div class="flex flex-col items-end">
          <div class="text-base uppercase text-right leading-7">
            Scan to Download<br>App <span class="font-semibold">iOS and Android</span>
          </div>
          <div class="mt-4 mb-6">
            <img
              :src="QRCode"
              alt="qr code"
            >
          </div>
          <div class="flex flex-col gap-6">
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
