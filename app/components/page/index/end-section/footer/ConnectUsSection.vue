<template>
  <div class="flex justify-between items-end">
    <div>
      <p class="text-sm leading-6 max-w-[600px]">
        Buy and trade top cryptocurrencies like Bitcoin and Ethereum on OKEX – a globally trusted crypto exchange with over 2M users. Enjoy low trading fees, 24/7 expert support, and exclusive trading bonuses for new and active users.
      </p>
    </div>
    <div class="flex items-end">
      <div class="flex flex-col justify-end gap-5">
        <div class="flex gap-1">
          <Label
            for="theme-switch"
            class="text-sm font-semibold text-grey-new-900 leading-5"
          >Theme</Label>
          <Switch
            id="theme-switch"
            class="[&>span]:rounded-[4px] [&>span]:p-[2px] [&>span]:w-[20px] [&>span]:h-[20px] px-[3px] py-[4px] h-[28px] w-[48px] rounded-[6px]"
          >
            <template #thumb="item">
              <img
                :src="item.modelValue ? NightIcon : LightIcon"
                :alt="item.modelValue ? 'night' : 'light'"
              >
            </template>
          </Switch>
        </div>
        <div class="flex items-center justify-end gap-1">
          <img
            :src="LanguageIcon"
            alt="language icon"
          >
          <span class="font-semibold text-sm leading-5">English</span>
        </div>
      </div>
      <div class="min-w-[120px] flex flex-col items-end">
        <div class="text-[10px] leading-4 text-black">
          Scan to Download
        </div>
        <div class="w-[79px] h-[79px]">
          <img
            :src="QRCode"
            alt="qr code"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCode from '~/assets/images/qrcode.png'
import { Switch } from '~/components/ui/switch'
import LightIcon from '~/assets/icons/light.svg'
import NightIcon from '~/assets/icons/night.svg'
import LanguageIcon from '~/assets/icons/web_language 1.svg'
</script>

<style scoped>

</style>
