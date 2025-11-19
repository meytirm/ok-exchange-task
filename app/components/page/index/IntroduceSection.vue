<template>
  <div class="introduce-section">
    <div class="flex flex-col w-[65%] gap-6">
      <p class="introduce-text">
        Buy, Trade & Earn Bitcoin and 100+ Cryptocurrencies
      </p>
      <p class="introduce-sub-text">
        Secure platform to trade Bitcoin, Ethereum and altcoins with low fees
      </p>
      <div class="introduce-join">
        <form
          class="flex gap-2 items-center max-w-[70%] grow"
          @submit.prevent="onSubmit"
        >
          <FieldGroup>
            <VeeField
              v-slot="{ field, errors }"
              name="email"
            >
              <Field
                :data-invalid="!!errors.length"
                class="relative"
              >
                <Input
                  id="form-vee-demo-email"
                  placeholder="Email"
                  v-bind="field"
                  autocomplete="off"
                  :aria-invalid="!!errors.length"
                />
                <FieldError
                  v-if="errors.length"
                  class="absolute top-10"
                  :errors="errors"
                />
              </Field>
            </VeeField>
          </FieldGroup>
          <BrandButton
            type="submit"
            size="lg"
          >
            Join & Earn $25 Bonus
          </BrandButton>
        </form>
        <GoogleButton />
      </div>
    </div>
    <div class="w-[35%]">
      <CryptoTab />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '~/components/ui/input'
import BrandButton from '~/components/common/BrandButton.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useForm, Field as VeeField } from 'vee-validate'
import {
  Field,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import GoogleButton from '~/components/common/header/GoogleButton.vue'
import CryptoTab from '~/components/common/CryptoTab.vue'

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email('enter a correct email'),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: '',
  },
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<style scoped>

</style>
