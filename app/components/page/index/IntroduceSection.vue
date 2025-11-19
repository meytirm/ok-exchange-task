<template>
  <div class="introduce-section">
    <div class="flex flex-col md:w-[65%] w-full gap-6">
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
    <div class="md:w-[35%] w-full">
      <CryptoMiniListTab />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '~/components/ui/input'
import BrandButton from '~/components/common/buttons/BrandButton.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useForm, Field as VeeField } from 'vee-validate'
import {
  Field,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import GoogleButton from '~/components/common/buttons/GoogleButton.vue'
import CryptoMiniListTab from '~/components/common/CryptoMiniListTab.vue'

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
